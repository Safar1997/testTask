import React from 'react';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const OpenedEditor = (props) => {
    const { nameOfDocument } = props;
    if(nameOfDocument) {
       return(
         <Result
           style={{width: '300px', marginLeft: '500px', marginRight: 'auto', position: 'absolute'}}
           status="success"
           title={props.nameOfDocument}
         />
       )
    }
    return(
      <Result
      style={{width: '300px', marginLeft: '500px', marginRight: 'auto',  position: 'absolute'}}
      status="403"
        title="Sorry, you didnt choose any file"
      />
    )
}

export default OpenedEditor;