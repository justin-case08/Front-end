import React from 'react';
import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';




const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Link to={'/customers'} ><a>{text}</a></Link>,
  },
//   {
//     title: 'Contact Number',
//     dataIndex: 'contactnum',
//     key: 'contactnum',
//   },

  {
    title: 'Payment Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
        let color
          if (tag === 'Paid') {
            color = 'green';
          }
          if (tag === 'Unpaid') {
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
    title: 'Payment Option',
    dataIndex: 'option',
    key: 'option',
  },
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item',
    render: (text) => <Link to={'/inventory'}><a>{text}</a></Link>,
  },
  {
    title: 'Order Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (text) => <Link to={'/orders'}><a>{text}</a></Link>,
  },
  {
    title: 'Total Price',
    dataIndex: 'total',
    key: 'total',
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
    option: 'Online Payment',
    //payment status = tags
    tags: ['Unpaid'],
    amount: 9,
    total: '$99',
    item: 'NoBrand TS'
  },
  {
    key: '2',
    name: 'Jim Green',
    contactnum: '09XX-XXX-XXXX',
    option: 'Cash on Delivery',
    //payment status = tags
    tags: ['Paid'],
    amount: 9,
    total: '$99',
    item: 'Brandy TS'
  },
  {
    key: '3',
    name: 'Joe Black',
    contactnum: '09XX-XXX-XXXX',
    option: 'Cash on Delivery',
    //payment status = tags
    tags: ['Unpaid'],
    amount: 9,
    total: '$99',
    item: 'NoBrand LS',
  },
];
const PaymentsTable = () => <Table columns={columns} dataSource={data} pagination={false} />;
export default PaymentsTable;