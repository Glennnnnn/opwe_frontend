import React, { useState, useEffect } from 'react';
import { Form, Input } from 'antd';
const AddInstructionVideoPage: React.FC = () => {
  return <>
    <Form.Item name="productName" label="Product Name">
      <Input />
    </Form.Item>

    <Form.Item name="productDesc" label="Product description">
      <Input />
    </Form.Item></>
}

export default AddInstructionVideoPage;