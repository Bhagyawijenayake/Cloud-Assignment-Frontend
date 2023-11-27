import React from 'react';
import './newPage.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const NewPage: React.FC = () => {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
        data-bs-theme="dark"
      >
        <Tab eventKey="home" title="Tab1">
          <Tab1/>
        </Tab>
        <Tab eventKey="profile" title="Tab2">
          <Tab2/>
        </Tab>
        <Tab eventKey="longer-tab" title="Tab3">
          <Tab3/>
        </Tab>
      </Tabs>
    </>
  )
}

export default NewPage;