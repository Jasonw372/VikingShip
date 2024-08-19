import Alert, {AlertProps} from './alert';
import {describe, expect, vitest} from "vitest";
import React from "react";
import {fireEvent, render, waitFor} from "@testing-library/react";

vitest.mock('../Icon/icon', () => {
  return {
    default: ({icon}) => {
      return <span>{icon as string}</span>
    }
  }
})


const testProps: AlertProps = {
  title: 'test',
  onClose: vitest.fn()
}

const typeProps: AlertProps = {
  ...testProps,
  type: 'success',
  description: 'hello',
  closable: false
}

describe('test Alert component', () => {
  it('should render the correct default alert', async () => {
    const wrapper = render(
      <React.Fragment>
        <Alert {...testProps} />
      </React.Fragment>);
    const element = wrapper.getByText('test');
    expect(element).toBeInTheDocument();
    expect(wrapper.container.querySelector('.viking-alert')).toHaveClass('viking-alert-default')
    fireEvent.click(wrapper.getByText('times'));
    expect(testProps.onClose).toHaveBeenCalled();
    await waitFor(() => {
      expect(element).not.toBeInTheDocument();
    });
  });

  it('should render the correct Alert based on different type and description', () => {
    const wrapper = render(
      <React.Fragment>
        <Alert {...typeProps} />
      </React.Fragment>
    );
    expect(wrapper.container.querySelector('.viking-alert')).toHaveClass('viking-alert-success')
    expect(wrapper.container.querySelector('.viking-alert')).not.toHaveClass('viking-alert-default')
    expect(wrapper.getByText('hello')).toBeInTheDocument();
    expect(wrapper.getByText('hello')).toHaveClass('viking-alert-desc');
    expect(wrapper.queryByText('times')).not.toBeInTheDocument();
  });

  it('should change class when type change', () => {
    const wrapper = render(
      <React.Fragment>
        <Alert {...typeProps} />
      </React.Fragment>);
    expect(wrapper.container.querySelector('.viking-alert')).toHaveClass('viking-alert-success')
    typeProps.type = 'danger';
    wrapper.rerender(
      <React.Fragment>
        <Alert {...typeProps} />
      </React.Fragment>);
    expect(wrapper.container.querySelector('.viking-alert')).toHaveClass('viking-alert-danger')
  });
})