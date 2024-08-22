import "@testing-library/jest-dom";
import { Upload, UploadProps } from "./upload.tsx";
import { beforeEach, describe, expect, Mocked, vitest } from "vitest";
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import React from "react";

vitest.mock("../Icon/icon", () => {
  return {
    default: ({ icon, onClick }: any) => {
      return <span onClick={onClick}>{icon as string}</span>;
    },
  };
});
vitest.mock("axios");
const mockedAxios = axios as Mocked<typeof axios>;

const testProps: UploadProps = {
  children: undefined,
  multiple: false,
  action: "fake.com",
  onSuccess: vitest.fn(),
  onChange: vitest.fn(),
  onRemove: vitest.fn(),
  drag: true,
};
let wrapper: RenderResult, fileInput: HTMLInputElement, uploadArea: HTMLElement;
const testFile = new File(["xyz"], "test.png", { type: "image/png" });
describe("test upload component", () => {
  beforeEach(() => {
    wrapper = render(
      <React.Fragment>
        <Upload {...testProps}>Click to upload</Upload>
      </React.Fragment>,
    );
    fileInput = wrapper.container.querySelector(
      ".viking-file-input",
    ) as HTMLInputElement;
    uploadArea = wrapper.queryByText("Click to upload") as HTMLElement;
  });

  it("should render upload component", () => {
    // 编写测试样例
    expect(uploadArea).toBeInTheDocument();
    expect(fileInput).not.toBeVisible();
  });

  it("should upload file when upload input change and remove", async () => {
    const { queryByText } = wrapper;
    mockedAxios.post.mockResolvedValue({ data: "cool" });

    fireEvent.change(fileInput, { target: { files: [testFile] } });
    expect(queryByText("spinner")).toBeInTheDocument();
    await waitFor(() => {
      expect(testProps.onSuccess).toHaveBeenCalled();
      expect(testProps.onChange).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(wrapper.queryByText("test.png")).toBeInTheDocument();
    });
    expect(queryByText("check-circle")).toBeInTheDocument();
    expect(testProps.onSuccess).toHaveBeenCalledWith(
      "cool",
      expect.objectContaining({
        raw: testFile,
        status: "success",
        response: "cool",
        name: "test.png",
      }),
    );
    expect(testProps.onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        raw: testFile,
        status: "success",
        response: "cool",
        name: "test.png",
      }),
    );

    const icon = wrapper.getByText("times");
    fireEvent.click(icon);
    expect(wrapper.queryByText("test.png")).not.toBeInTheDocument();
    expect(testProps.onRemove).toHaveBeenCalledWith(
      expect.objectContaining({
        raw: testFile,
        status: "success",
        response: "cool",
        name: "test.png",
      }),
    );
  });

  it("should upload file by drag and drop", async () => {
    mockedAxios.post.mockResolvedValue({ data: "cool" });
    fireEvent.dragOver(uploadArea);
    expect(uploadArea).toHaveClass("is-dragover");
    fireEvent.dragLeave(uploadArea);
    expect(uploadArea).not.toHaveClass("is-dragover");
    fireEvent.drop(uploadArea, { dataTransfer: { files: [testFile] } });
    await waitFor(() => {
      expect(wrapper.queryByText("test.png")).toBeInTheDocument();
    });
    expect(wrapper.queryByText("check-circle")).toBeInTheDocument();
    expect(testProps.onSuccess).toHaveBeenCalled();
    expect(testProps.onChange).toHaveBeenCalled();
    expect(testProps.onSuccess).toHaveBeenCalledWith(
      "cool",
      expect.objectContaining({
        raw: testFile,
        status: "success",
        response: "cool",
        name: "test.png",
        percent: 100,
      }),
    );
  });
});
