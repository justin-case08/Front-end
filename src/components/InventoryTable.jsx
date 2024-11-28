import React, { useState } from 'react';
import { Space, Table, Tag, Button, Modal, Form, Input, Select } from 'antd';
import AddInv from '../modals/modalAddInv';

const InventoryTable = () => {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'NoBrand LS',
      stock: 32,
      brand: 'NoBrand',
      price: '$11',
      tags: ['long sleeves'],
    },
    {
      key: '2',
      name: 'NoBrand TS',
      stock: 42,
      brand: 'NoBrand',
      price: '$11',
      tags: ['T-shirt'],
    },
    {
      key: '3',
      name: 'Brandy LS',
      stock: 32,
      brand: 'Brandy',
      price: '$11',
      tags: ['long sleeves'],
    },
  ]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form] = Form.useForm();

  const handleAdd = (newItem) => {
    setData((prevData) => [
      ...prevData,
      {
        key: prevData.length + 1,
        ...newItem,
        tags: [newItem.item],
      },
    ]);
  };

  const handleEdit = (record) => {
    setEditingItem(record);
    setIsEditModalOpen(true);
    form.setFieldsValue(record);
  };

  const handleDelete = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  const showDeleteConfirm = (key) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDelete(key);
      },
    });
  };

  const handleEditOk = () => {
    form
      .validateFields()
      .then((values) => {
        setData((prevData) =>
          prevData.map((item) => (item.key === editingItem.key ? { ...item, ...values } : item))
        );
        setIsEditModalOpen(false);
        setEditingItem(null);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleEditCancel = () => {
    setIsEditModalOpen(false);
    setEditingItem(null);
  };

  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Item Type',
      key: 'item',
      dataIndex: 'item',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'T-shirt') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() => showDeleteConfirm(record.key)} type="danger">
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <AddInv onAdd={handleAdd} />
      <Table columns={columns} dataSource={data} pagination={false} />
      
      <Modal title="Edit Item" open={isEditModalOpen} onOk={handleEditOk} onCancel={handleEditCancel}>
        <Form form={form} layout="vertical" name="edit_item_form">
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
            name="brand"
            label="Brand"
            rules={[{ required: true, message: 'Please input the brand!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Stock"
            rules={[{ required: true, message: 'Please input the stock amount!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default InventoryTable;
