import React from 'react';
import { Table, Button } from 'antd';

const CoursesTable = ({courses, handleCourseRemove}) => <Table columns={[{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'CRN',
    dataIndex: 'crn',
    key: 'crn',
  }, {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button key={record.crn} icon="delete" size={"small"} type="danger" ghost 
        onClick={() =>handleCourseRemove(record)}>remove</Button>
      </span>
    ),
  }]} dataSource={courses || []} />

export default CoursesTable;