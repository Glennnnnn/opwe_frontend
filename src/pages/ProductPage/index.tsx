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
  Input,
  Tag
} from 'antd';
import { set } from 'mobx';
import {
  useGetAllTagGroupsQuery,
} from "@/redux/services/tagApi";

import {
  useGetAllStatusByGroupQuery,
} from "@/redux/services/statusApi";
import { Value } from 'sass';


const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};


interface TagGroup {
  tagName: string;
  tagValueList: string[];
}

interface ProductStatus {
  statusId: bigint
  statusName: string
}

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};



const ProductPage: React.FC = () => {
  // const navigate = useNavigate()
  // const [tagGroups, setTagGroups] = useState<string[]>([]);

  const [form] = Form.useForm();
  // const baseTagGroups = [
  //   {
  //     "tagName": "color",
  //     "tagValueList": [
  //       "white",
  //       "black"
  //     ]
  //   },
  //   {
  //     "tagName": "size",
  //     "tagValueList": [
  //       "20mm*20mm",
  //       "30mm*30mm"
  //     ]
  //   }
  // ]


  const { data: baseTagGroups, error, isLoading } = useGetAllTagGroupsQuery()
  const { data: baseProductStatus } = useGetAllStatusByGroupQuery("product")
  useEffect(() => {
    if (baseTagGroups) {
      setTagGroups(baseTagGroups);
    }
    if (baseProductStatus) {
      setProductStatus(baseProductStatus);
    }
  }, [baseTagGroups]);

  const [tagGroups, setTagGroups] = useState<TagGroup[]>([])
  const [productStatus, setProductStatus] = useState<ProductStatus[]>([])

  const [tagValues, setTagValues] = useState<string[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const [tagNameSeleted, setTagNameSeleted] = useState<string | undefined>(undefined);
  const [addTagModalOpen, setAddTagModalOpen] = useState<boolean>(false)
  const [tagsToAdd, setTagsToAdd] = useState<Map<string, string>>(new Map())

  //  tag functions
  const handleTagClose = (tagName: string) => {
    setTagsToAdd((preTagsToAdd) => {
      const newTagsToAdd = new Map(preTagsToAdd)
      newTagsToAdd.delete(tagName)
      return newTagsToAdd
    })
    setTagGroups((preTagGroups) => {
      // Ensure prevTagGroups is handled properly
      const currentTagGroups = preTagGroups || []; // Default to empty array if undefined

      const baseGroup = baseTagGroups?.find(group => group.tagName === tagName);
      if (!baseGroup) {
        return currentTagGroups; // If no base group found, return the existing tagGroups
      }

      // Merge existing values with base values
      return [
        ...preTagGroups,
        baseGroup
      ];
    })
  }


  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    console.log(tagsToAdd)
  };

  //  Model functions
  const closeAddTagModel = () => {
    setAddTagModalOpen(false)
  }

  const openAddTagModel = () => {
    setAddTagModalOpen(true)
  }

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields()
        closeAddTagModel()
        setTagsToAdd((preTagsToadd) => {
          const newTagsToAdd = new Map(preTagsToadd)
          newTagsToAdd.set(values.tagName, values.tagValue)
          return newTagsToAdd
        })
        setTagGroups(preTagGroups =>
          preTagGroups.filter(tagGroup => tagGroup.tagName !== values.tagName)
        )
        console.log(tagGroups)
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleModalCancel = () => {
    form.resetFields()
    setTagNameSeleted(undefined)
    closeAddTagModel()
  }

  const handleTagNameSeleted = (value: string) => {
    setTagNameSeleted(value)
  }

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

      <Form.Item name="productName" label="Product Name">
        <Input />
      </Form.Item>

      <Form.Item name="radio-group" label="Radio.Group">
        <Input />
      </Form.Item>

      <Form.Item label="Tags">
        {Array.from(tagsToAdd.entries()).map(([tagName, tagValue]) => (
          <Tag closable key={tagName} onClose={() => handleTagClose(tagName)}>{tagName}: {tagValue}</Tag>
        ))}
        <PlusCircleOutlined onClick={openAddTagModel} />
        {/* <Button icon={<PlusCircleOutlined />} onClick={() => setAddTagModalOpen(true)}>
        </Button> */}
        <Modal
          title="Select Tag"
          open={addTagModalOpen}
          onCancel={handleModalCancel}
          onOk={handleModalOk}
          destroyOnClose={true}
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
                  <Option key={tagGroup.tagName} value={tagGroup.tagName}>{tagGroup.tagName}</Option>
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
                  <Option key={tagValue} value={tagValue}>{tagValue}</Option>
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

      <Form.Item
        name="radio-button"
        label="Radio.Button"
      //rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          {productStatus.map(status =>
            <Radio.Button key={status.statusId} value={status.statusId} >{status.statusName}</Radio.Button>
          )}
          {/* <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button> */}
        </Radio.Group>
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