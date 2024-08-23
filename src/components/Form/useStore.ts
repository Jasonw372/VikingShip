import { useReducer, useState } from "react";
import Schema, { RuleItem, ValidateError } from "async-validator";
import { each, mapValues } from "lodash-es";

export type CustomRuleFunc = (context: {
  getFieldValue: (name: string) => string;
}) => RuleItem;
export type CustomRule = RuleItem | CustomRuleFunc;

export interface FieldDetail {
  name: string;
  value: string;
  rules: CustomRule[];
  isValidate: boolean;
  errors: ValidateError[];
}

export interface FieldState {
  [key: string]: FieldDetail;
}

export interface FormState {
  isValidate: boolean;
  isSubmitting?: boolean;
  errors?: Record<string, ValidateError[]>;
}

export interface FieldsAction {
  type: "addField" | "updateValue" | "updateValidateResult";
  name: string;
  value: any;
}

export interface ValidateErrorType extends Error {
  errors: ValidateError[];
  fields: Record<string, ValidateError[]>;
}

function fieldsReducer(state: FieldState, action: FieldsAction): FieldState {
  switch (action.type) {
    case "addField": {
      return {
        ...state,
        [action.name]: {
          ...action.value,
        },
      };
    }
    case "updateValue": {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
        },
      };
    }
    case "updateValidateResult": {
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          isValidate: action.value.isValid,
          errors: action.value.errors,
        },
      };
    }
    default:
      return state;
  }
}

function useStore(initialValues?: Record<string, any>) {
  const [form, setForm] = useState<FormState>({
    isValidate: false,
    isSubmitting: false,
    errors: {},
  });
  const [fields, dispatch] = useReducer(fieldsReducer, {});

  const getFieldValue = (name: string) => {
    return fields[name] ? fields[name].value : "";
  };

  const getFieldsValue = () => {
    return mapValues(fields, (item) => item.value);
  };

  const setFieldValue = (name: string, value: string) => {
    if (fields[name]) {
      dispatch({
        type: "updateValue",
        name,
        value,
      });
    }
  };

  const resetFields = () => {
    if (!initialValues) {
      return;
    }
    each(fields, (_, name) => {
      dispatch({
        type: "updateValue",
        name,
        value: initialValues[name] || "",
      });
    });
  };

  const transformRules = (rules: CustomRule[]) => {
    return rules.map((rule) => {
      if (typeof rule === "function") {
        return rule({ getFieldValue });
      }
      return rule;
    });
  };
  const validateField = async (name: string) => {
    const field = fields[name];
    if (!field) {
      return;
    }
    const { value, rules } = field;

    const descriptor = {
      [name]: transformRules(rules),
    };

    const valueMap = {
      [name]: value,
    };

    const validator = new Schema(descriptor);

    let isValidate = true;
    let errors: ValidateError[] = [];

    try {
      await validator.validate(valueMap);
    } catch (e) {
      isValidate = false;
      const err = e as ValidateErrorType;
      errors = err.errors;
    } finally {
      dispatch({
        type: "updateValidateResult",
        name,
        value: {
          isValidate,
          errors,
        },
      });
    }
  };

  const validateAllFields = async () => {
    let isValidate = true;
    let errors: Record<string, ValidateError[]> = {};

    const valueMap = mapValues(fields, (item) => item.value);
    const descriptor = mapValues(fields, (item) => transformRules(item.rules));

    const validator = new Schema(descriptor);
    setForm({
      ...form,
      isSubmitting: true,
    });

    try {
      await validator.validate(valueMap);
    } catch (e) {
      isValidate = false;
      const err = e as ValidateErrorType;

      errors = err.fields;

      each(fields, (value, name) => {
        if (errors[name]) {
          const itemErrors = errors[name];
          dispatch({
            type: "updateValidateResult",
            name,
            value: {
              isValidate: false,
              errors: itemErrors,
            },
          });
        } else if (value.rules.length > 0 && !errors[name]) {
          dispatch({
            type: "updateValidateResult",
            name,
            value: {
              isValidate: true,
            },
          });
        }
      });
    } finally {
      setForm({
        ...form,
        isSubmitting: false,
        isValidate,
        errors,
      });
    }

    return {
      isValidate,
      errors,
      values: valueMap,
    };
  };

  return {
    form,
    setForm,
    fields,
    dispatch,
    validateField,
    getFieldValue,
    validateAllFields,
    getFieldsValue,
    setFieldValue,
    resetFields,
  };
}

export default useStore;
