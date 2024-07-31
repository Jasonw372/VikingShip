import {fireEvent, render} from "@testing-library/react";
import Button, {ButtonProps} from "./button";
import React from "react";
import {describe, expect, it, vitest} from "vitest";

const defaultProps: ButtonProps = {
  onClick: vitest.fn()
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: vitest.fn(),
}
describe("test Button component", () => {
  it('should render the correct default button', () => {
    const wrapper = render(
      <React.Fragment>
        <Button {...defaultProps}>Nice</Button>
      </React.Fragment>
    );
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass("btn btn-default");

    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();

  });

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button btnType="primary" size="lg" className="klass">Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn-primary btn-lg klass");
  });

  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link' href="http://dummyurl">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  });

  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  });
})