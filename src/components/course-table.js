import React from 'react';
import { Table } from 'antd';

const CoursesTable = ({courses, handleCourseAction, ActionComponent}) => <Table columns={[{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
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
      <span key={record.crn + "i"}>
        <ActionComponent
            onClick={() =>handleCourseAction(record)}/>
      </span>
    ),
  }]} dataSource={courses || []} />

export default CoursesTable;