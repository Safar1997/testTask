import React, { useState } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navigation from '../components/Navigation';
import Catalog from '../components/Catalog';
import OpenedDocument from '../components/OpenedDocument';
import ExtraInfo from '../components/ExtraInfo';

const { Header } = Layout;

const Routes = () => {
  const [num, setNum] = useState();

  const nameOfOpenedFile = (name) => {
    setNum(name);
  }

  return (
    <Layout className="layout" style={{ maxWidth: '1440px', backgroundColor: 'white', margin: '0 auto' }}>
      <Header>
        <div className="logo" />
        <Navigation nameOfDocument={num} />
      </Header>
      <div style={{display: 'flex'}}>
        <Catalog nameOfOpenedFile={nameOfOpenedFile} />
        <OpenedDocument nameOfDocument={num}  />
      </div>
      <div style={{ marginLeft: '40px', marginTop: '500px', position: 'absolute'}}>
      <ExtraInfo nameOfDocument={num} /> 
      </div>
    </Layout>
  );
};

export default Routes;
