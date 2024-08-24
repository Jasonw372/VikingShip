import { render, fireEvent, RenderResult } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import Tabs, { TabsProps } from './tab'
import TabItem from './tabItem'
import {vitest} from "vitest";

const testProps: TabsProps = {
  defaultIndex: 1,
  onSelect: vitest.fn()
}

let wrapper: RenderResult
describe('test Tab Component', () => {
  beforeEach(() => {
    wrapper = render(
      <Tabs {...testProps}>
        <TabItem label="tab1">content1</TabItem>
        <TabItem label="tab2">content2</TabItem>
        <TabItem label="disabled" disabled>content3</TabItem>
      </Tabs>
    )
  })
  afterEach(() => {
    vitest.clearAllMocks()
  })
  it('should render the correct default Tabs', () => {
    const { queryByText, container } = wrapper
    expect(container.querySelector('.viking-tabs-nav')).toHaveClass('nav-line')
    const activeElement = queryByText('tab2')
    expect(activeElement).toBeInTheDocument()
    expect(activeElement).toHaveClass('is-active')
    expect(queryByText('tab1')).not.toHaveClass('is-active')
    expect(queryByText('content2')).toBeInTheDocument()
    expect(queryByText('content1')).not.toBeInTheDocument()
  })
  it('click tabItem should switch to content', () => {
    const { queryByText, getByText } = wrapper
    const clickedElement = getByText('tab1')
    fireEvent.click(clickedElement)
    expect(clickedElement).toHaveClass('is-active')
    expect(queryByText('tab2')).not.toHaveClass('is-active')
    expect(queryByText('content1')).toBeInTheDocument()
    expect(queryByText('content2')).not.toBeInTheDocument()
    expect(testProps.onSelect).toHaveBeenCalledWith(0)
  })
  it('click disabled tabItem should not works', () => {
    const { getByText } = wrapper
    const disableElement = getByText('disabled')
    expect(disableElement).toHaveClass('disabled')
    fireEvent.click(disableElement)
    expect(disableElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalled()
  })
})