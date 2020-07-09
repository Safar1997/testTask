import React from 'react';
import { Tree } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const Catalog = (props) => {
  const { TreeNode } = Tree;


  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);

    if (!info.node.children){
        console.log(info.node.title);
        props.nameOfOpenedFile(info.node.title);
    }
    else {
        props.nameOfOpenedFile(null);
    }
  };

//   const onExpand = (selectedKeys, info) => {
//     console.log(selectedKeys, info);
//     console.log(selectedKeyss);
//   }
//     console.log(selectedKeyss);
    return (
        <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        // onExpand={onExpand}
        // expandedKeys={selectedKeyss}
        >
        <TreeNode title="Каталог" key="0-0">
            <TreeNode showLine={false} title="Документы" key="0-0-0">
                <TreeNode  showLine={false} title="Договора" key="0-0-0-0" >
                  <TreeNode title="Договор1" key="0-0-0-0-0" />
                  <TreeNode title="Договор2" key="0-0-0-0-1" />
                  <TreeNode title="Договор3" key="0-0-0-0-2" />
                </TreeNode>
                <TreeNode title="Декларации" key="0-0-0-1">
                  <TreeNode title="Декларация1" key="0-0-0-1-0" />
                  <TreeNode title="Декларация2" key="0-0-0-1-1" />
                  <TreeNode title="Декларация3" key="0-0-0-1-2" />
                </TreeNode>
            </TreeNode>
            <TreeNode title="Переписка" key="0-0-1">
              <TreeNode title="Паттерны" key="0-0-1-0">
                <TreeNode title="Письмо 1" key="0-0-1-0-0" />
                <TreeNode title="Письмо 2" key="0-0-1-0-1" />
                <TreeNode title="Письмо 3" key="0-0-1-0-2" />
              </TreeNode>
              <TreeNode title="ФНС" key="0-0-1-1">
                <TreeNode title="Извещение1" key="0-0-1-1-0" />
                <TreeNode title="Извещение2" key="0-0-1-1-1" />
                <TreeNode title="Извещение3" key="0-0-1-1-2" />
              </TreeNode>
            </TreeNode>
        </TreeNode>
        </Tree>
    );
};

export default Catalog;