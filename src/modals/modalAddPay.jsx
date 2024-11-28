import React, { useState } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';

const AddInv = ({ onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        values.price = `$${values.price}`;
        form.resetFields();
        setIsModalOpen(false);
        onAdd(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Add" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} layout="vertical" name="add_item_form">
          <Form.Item
            name="name"
            label="Item Name"
            rules={[{ required: true, message: 'Please input the item name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="item"
            label="Item Type"
            rules={[{ required: true, message: 'Please select the item type!' }]}
          >
            <Select>
              <Select.Option value="long sleeves">Long Sleeves</Select.Option>
              <Select.Option value="T-shirt">T-Shirt</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input
              type="number"
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(value) && parseInt(value) >= 0) {
                  form.setFieldsValue({ price: value });
                }
              }}
              addonBefore="$"
            />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Stock"
            rules={[{ required: true, message: 'Please input the stock amount!' }]}
          >
            <Input
              type="number"
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(value) && parseInt(value) >= 0) {
                  form.setFieldsValue({ stock: value });
                }
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddInv;
