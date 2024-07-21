import React, { useState, useEffect } from 'react';
import { InboxOutlined, UploadOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { http } from '@/utils';
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
  message,
  Spin,
  Modal,
  Input
} from 'antd';
import { set } from 'mobx';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};


const ProductPage: React.FC = () => {
  // const navigate = useNavigate()
  // const [tagGroups, setTagGroups] = useState<string[]>([]);

  const tagGroups = [
    {
      "tagName": "color",
      "tagValueList": [
        "white",
        "black"
      ]
    },
    {
      "tagName": "size",
      "tagValueList": [
        "20mm*20mm",
        "30mm*30mm"
      ]
    }
  ]
  const [form] = Form.useForm();
  const [tagValues, setTagValues] = useState<string[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const [tagNameSeleted, setTagNameSeleted] = useState<string | undefined>(undefined);
  const [addTagModalOpen, setAddTagModalOpen] = useState<boolean>(false)

  const handleGroupChange = async (group: string) => {
    setLoading(true);
    setSelectedGroup(group);
    try {
      const response = await http.get<string[]>(`/api/tag-values/${group}`);
      setTagValues(response.data);
    } catch (error) {
      message.error('Failed to load tag values');
    } finally {
      setLoading(false);
    }
  };

  const closeAddTagModel = () => {
    setAddTagModalOpen(false)
  }

  const openAddTagModel = () => {
    setAddTagModalOpen(true)
  }

  const handleTagNameSeleted = (value: string) => {
    setTagNameSeleted(value)
  }

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
        console.log('Form values:', values);
        console.log(values)
        closeAddTagModel()
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        'color-picker': null,
      }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Plain Text">
        <span className="ant-form-text">China</span>
      </Form.Item>
      <Form.Item
        name="select"
        label="Select"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select placeholder="Please select a country">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="select-multiple"
        label="Select[multiple]"
        rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
      >
        <Select mode="multiple" placeholder="Please select favourite colors">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Tags">
        <PlusCircleOutlined onClick={openAddTagModel} />
        {/* <Button icon={<PlusCircleOutlined />} onClick={() => setAddTagModalOpen(true)}>
        </Button> */}
        <Modal
          title="Select Tag"
          open={addTagModalOpen}
          onCancel={closeAddTagModel}
          onOk={handleModalOk}
        >
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
          >
            <Form.Item
              name="tagName"
              label="tagName"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Select placeholder="Please select a tag name" onSelect={handleTagNameSeleted}>
                {tagGroups.map(tagGroup => (
                  <Option value={tagGroup.tagName}>{tagGroup.tagName}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="tagValue"
              label="tagValue"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Select placeholder="Please select a tag name" disabled={tagNameSeleted ? false : true}>
                {tagNameSeleted ? tagGroups.find(tagGroup => tagGroup.tagName === tagNameSeleted)?.tagValueList.map(tagValue => (
                  <Option value={tagValue}>{tagValue}</Option>
                )) :
                  undefined}
              </Select>
            </Form.Item>
          </Form>
        </Modal>

      </Form.Item>

      <Form.Item label="product stock">
        <Form.Item name="productStock" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text" style={{ marginLeft: 8 }}>
          total
        </span>
      </Form.Item>

      <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item name="slider" label="Slider">
        <Slider
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </Form.Item>

      <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>

      <Form.Item label="Upload">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for only single upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item
        name="color-picker"
        label="ColorPicker"
        rules={[{ required: true, message: 'color is required!' }]}
      >
        <ColorPicker />
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
  )
}


export default ProductPage;