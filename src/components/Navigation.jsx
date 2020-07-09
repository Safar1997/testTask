import React from 'react';
import { Menu, Avatar, message } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

const Navigation = (props) => {
  const { SubMenu } = Menu;
  const { nameOfDocument } = props;
  const clickOpen = () => {
    if(nameOfDocument) {
      message.success('Документ открыт');
    }
  }

  const clickSave = () => {
    if(nameOfDocument) {
      message.success('Документ сохранен');
    } 
  }

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px', display: 'flex' }}
    >
      <Menu.Item key="/home">
        <span>Тестовое задание</span>
      </Menu.Item>
      <Menu.Item key="/avatar" style={{ marginRight: '10px', marginLeft: 'auto'}}>
        <Link to="/home">
          <Avatar size={30} icon={<UserOutlined />} />
        </Link>
      </Menu.Item>
      <SubMenu
          key="sub1"
          title={
            <span>
              <span>Действия</span>
            </span>
          }
        >
          <Menu.Item key="/Open">
              <Link 
                to="/Open"
                onClick={clickOpen}
              >
                Открыть
              </Link>
          </Menu.Item>
          <Menu.Item
            key="/Save"
            onClick={clickSave}
          >
            Сохранить
          </Menu.Item>
        </SubMenu>
    </Menu>
  );
};

export default Navigation;