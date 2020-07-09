import React from 'react';
import { Card } from 'antd';

const ExtraInfo = (props) => {
    const { nameOfDocument } = props;
    return ( 
      <div>
        <Card title="Доп. информация" style={{ width: 300 }}>
          <p>Вы выбрали:</p>
          <p>{nameOfDocument}</p>
          <p>Текущая дата</p>
          <p>{new Date().toLocaleString()}</p>
        </Card>        
      </div>
    );
}
 
export default ExtraInfo;