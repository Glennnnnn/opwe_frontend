import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  UploadProps,
  message,
  Upload,
  Button,
  Space
} from 'antd';

import type { UploadFile } from 'antd';
import { useCreateNewFileMutation } from "@/redux/services/fileApi"
import {
  InboxOutlined,
  UploadOutlined,
  PlusCircleOutlined
} from '@ant-design/icons';

const AddInstructionVideoPage: React.FC = () => {
  // const CHUNK_SIZE = 2 * 1024 * 1024;
  const CHUNK_SIZE = 100 * 1024;
  const [form] = Form.useForm();
  const [createNewFile] = useCreateNewFileMutation();

  const [fileToUpload, setFileToUpload] = useState<UploadFile | undefined>(undefined);

  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
    onRemove: () => {
      setFileToUpload(undefined);
    },
    beforeUpload: () => {
      if (fileToUpload) {
        message.error('You can only upload one file.');
        // prevent replacing the first file with the second file 
        return Upload.LIST_IGNORE;
      }
      return false;
    }
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    // If file is removed or no files present, reset state
    if (Array.isArray(e)) {
      return e;
    }

    const fileList = e?.fileList || [];
    if (fileList.length > 0) {
      setFileToUpload(fileList[0]);
    } else {
      setFileToUpload(undefined); // Reset when no file is present
    }
    return fileList;
  };
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const onFinish = async (values: any) => {
    const formData = new FormData();
    if (!fileToUpload || !fileToUpload.originFileObj) {
      message.error('No file to upload or originFileObj is undefined');
      return;
    }

    const fileBlob: Blob = fileToUpload.originFileObj;
    const totalChunks = Math.ceil(fileBlob.size / CHUNK_SIZE);
    const fileChunksMap: Map<string, Blob> = new Map();
    const fileName: string = fileToUpload.name
    let nonFileData: { [key: string]: any } = {};

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, fileBlob.size);
      fileChunksMap.set(`${fileToUpload.name}-${i + 1}`, fileBlob.slice(start, end));
    }

    for (let key in values) {
      console.log(key)
      nonFileData[key] = values[key];
    }
    nonFileData['uploadFileName'] = fileName

    formData.append("fileData", new Blob([JSON.stringify(nonFileData)], { type: 'application/json' }))
    fileChunksMap.forEach((blob, key) => {
      // Append the Blob with a unique key (filename) under the same field name
      formData.append('files', blob, key); // 'files' is the field name
    });
    // const entries = Array.from(formData.entries());

    // for (const [key, value] of entries) {
    //   console.log(`${key}: ${value}`);
    // }
    await createNewFile(formData)
      .unwrap()
      .then((payload) => {
        console.log("aaa")
        console.log(payload)
        if (payload.msg === "SUCCESS") {
          message.success("发送信息成功");
          form.resetFields();
        } else {
          message.error("发送信息失败");
        }
      })
      .catch((error) => {
        console.log(error)
        message.error("Something went wrong...")
      });
  };

  return <>
    <Form
      name="instructionVideoUpload"
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="fileName" label="File Name">
        <Input />
      </Form.Item>

      <Form.Item name="fileDescription" label="File Description">
        <Input />
      </Form.Item>


      <Form.Item label="File">
        <Form.Item name="file" valuePropName="originileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for only single upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">reset</Button>
        </Space>
      </Form.Item>
    </Form>
  </>
}

export default AddInstructionVideoPage;