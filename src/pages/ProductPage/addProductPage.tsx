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
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { set } from 'mobx';
import {
  useGetAllTagGroupsQuery,
} from "@/redux/services/tagApi";

import {
  useGetAllStatusByGroupQuery,
} from "@/redux/services/statusApi";

import {
  useSendNewProductWithFileMutation,
} from "@/redux/services/productApi";

import { Value } from 'sass';
import { escape } from 'querystring';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};


interface TagValueWithId {
  tagId: string;
  tagValue: string;
}

interface TagGroup {
  tagName: string;
  tagValueList: TagValueWithId[];
}

interface TagToAdd {
  tagId: string
  tagName: string
  tagValue: string
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



const AddProductPage: React.FC = () => {
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
  const [sendNewProductWithFile] = useSendNewProductWithFileMutation();

  useEffect(() => {
    if (baseTagGroups) {
      console.log(baseTagGroups)
      setTagGroups(baseTagGroups);
    }
    if (baseProductStatus) {
      setProductStatus(baseProductStatus);
    }
  }, [baseTagGroups]);

  const [tagGroups, setTagGroups] = useState<TagGroup[]>([])
  const [productStatus, setProductStatus] = useState<ProductStatus[]>([])
  const [fileList, setFileList] = useState<any[]>([]);

  const [tagValues, setTagValues] = useState<string[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const [isTagNameInModalSeleted, setIsTagNameInModalSeleted] = useState<string | undefined>(undefined);
  const [addTagModalOpen, setAddTagModalOpen] = useState<boolean>(false)
  const [tagsToAdd, setTagsToAdd] = useState<TagToAdd[]>([])

  //  tag functions
  const handleTagClose = (tagId: string, tagName: string) => {
    setTagsToAdd((preTagsToAdd) => {
      let tagsToAdd = preTagsToAdd.filter(tag => tag.tagId !== tagId);
      return tagsToAdd
    })
    setTagGroups((preTagGroups) => {
      // Ensure prevTagGroups is handled properly
      const currentTagGroups = preTagGroups || []; // Default to empty array if undefined
      baseTagGroups?.find(group => group.tagName === tagName);
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
        const { tagName, tagId } = values;
        form.resetFields()
        closeAddTagModel()
        setTagsToAdd((preTagsToadd) => {
          let tagGroup = baseTagGroups?.find((group: TagGroup) => group.tagName === tagName);
          let newTag: TagToAdd = {
            tagId,
            tagName,
            tagValue: tagGroup.tagValueList?.find((tag: TagValueWithId) => tag.tagId === tagId).tagValue,
          }
          return [
            ...preTagsToadd,
            newTag
          ]
        })
        setTagGroups(preTagGroups =>
          preTagGroups.filter(tagGroup => tagGroup.tagName !== values.tagName)
        )
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleModalCancel = () => {
    form.resetFields()
    setIsTagNameInModalSeleted(undefined)
    closeAddTagModel()
  }

  const handleTagNameSeleted = (value: string) => {
    setIsTagNameInModalSeleted(value)
  }

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      if (fileList.length < 1) {
        message.info('')
        setFileList([...fileList, file]);
      }
      return false;
    },
    fileList,
  };

  const onFinish = async (values: any) => {
    const formData = new FormData();
    let file: File | Blob | null = null;
    let nonFileData: { [key: string]: any } = {};
    fileList.forEach(file => {
      if (file.originFileObj) {
        formData.append('productImgs', file.originFileObj);
      } else {
        formData.append('productImgs', file);
      }
    });
    // fileList.forEach(file => {
    //   formData.append('productImgs', file as FileType);
    // });
    for (let key in values) {
      if (values[key] instanceof File || values[key] instanceof Blob) {
        file = values[key];
      } else {
        nonFileData[key] = values[key];
      }
    }
    let tagIdList = []
    for (let tag of tagsToAdd) {
      tagIdList.push(tag.tagId)
    }
    nonFileData["productTags"] = tagIdList
    console.log(nonFileData)
    formData.append('productData', new Blob([JSON.stringify(nonFileData)], { type: 'application/json' }));
    if (file) {
      formData.append('productImg', file);
    }

    await sendNewProductWithFile(formData)
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

      <Form.Item name="productDesc" label="Product description">
        <Input />
      </Form.Item>

      <Form.Item name="tags" label="Tags">
        {tagsToAdd.map((tagToAdd: TagToAdd) => {
          return <Tag
            closable
            key={tagToAdd.tagId}
            onClose={() => handleTagClose(tagToAdd.tagId, tagToAdd.tagName)}
          >
            {tagToAdd.tagName}: {tagToAdd.tagValue}
          </Tag>
        })}
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
              name="tagId"
              label="tagValue"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Select placeholder="Please select a tag name" disabled={isTagNameInModalSeleted ? false : true}>
                {isTagNameInModalSeleted ? tagGroups.find(tagGroup => tagGroup.tagName === isTagNameInModalSeleted)?.tagValueList.map(TagValueWithId =>
                  <Option key={TagValueWithId.tagId} value={TagValueWithId.tagId}>{TagValueWithId.tagValue}</Option>
                ) :
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
        name="productStatus"
        label="Product Status"
      //rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          {productStatus.map(status =>
            <Radio.Button key={status.statusId} value={status.statusId} >{status.statusName}</Radio.Button>
          )}
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Upload">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
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
  )
}


export default AddProductPage;