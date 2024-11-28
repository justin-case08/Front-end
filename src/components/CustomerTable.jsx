import React from 'react';
import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to={'/payments'} ><a>{text}</a></Link>,
  },
  {
    title: 'Contact Number',
    dataIndex: 'contactnum',
    key: 'contactnum',
  },
  {
    title: 'Delivery Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Delivery Option',
    key: 'delivery',
    dataIndex: 'delivery',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
        let color
          if (tag === 'In-store Pick up') {
            color = 'geekblue';
          }
          if (tag === 'Home Delivery') {
            color = 'green';
          }
          if (tag === 'Pick up Point') {
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
//   {
//     title: 'Item',
//     dataIndex: 'item',
//     key: 'item',
//     render: (text) => <Link to={'/inventory'}><a>{text}</a></Link>,
//   },
//   {
//     title: 'Total',
//     dataIndex: 'total',
//     key: 'total',
//   },
  {
    title: 'Estimated Delivery',
    dataIndex: 'estimated',
    key: 'estimated',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    contactnum: '09XX-XXX-XXXX',
    address: 'New York No. 1 Lake Park',
    tags: ['In-store Pick up'],
    // item: 'NoBrand TS',
    // total: '$99',
    estimated: 'Insert Date'
  },
  {
    key: '2',
    name: 'Jim Green',
    contactnum: '09XX-XXX-XXXX',
    address: 'London No. 1 Lake Park',
    tags: ['Home Delivery'],
    // item: 'Brandy TS',
    // total: '$99',
    estimated: 'Insert Date'
  },
  {
    key: '3',
    name: 'Joe Black',
    contactnum: '09XX-XXX-XXXX',
    address: 'Sydney No. 1 Lake Park',
    tags: ['Pick up Point'],
    // item: 'NoBrand LS',
    // total: '$99',
    estimated: 'Insert Date'
  },
];
const CustomerTable = () => <Table columns={columns} dataSource={data} pagination={false} />;
export default CustomerTable;