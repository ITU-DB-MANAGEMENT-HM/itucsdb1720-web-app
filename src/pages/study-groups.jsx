import React from "react";
import CardImageView from "../components/card-image";
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class StudyGroup extends React.Component {
  render = () => (
    <div>
      <Tabs defaultActiveKey="1" onChange={() => console.log()}>
        <TabPane tab="My Groups" key="1">
          <CardImageView />
          <CardImageView />
          <CardImageView />
          <CardImageView />
        </TabPane>
        <TabPane  tab="Matches" key="2">Content of Tab Pane 2</TabPane>
        <TabPane  tab="Discover" key="3">Content of Tab Pane 3</TabPane>
        <TabPane tab="History" key="4">Content of Tab Pane 3</TabPane>
      </Tabs>

    </div>
  );
}

export default StudyGroup;
