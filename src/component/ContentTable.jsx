import React from "react";
import {Table} from "antd";
const dataSource = [{
    theme: '胡彦斌',
    category: 32,
    user: <a href="www.baidu.com">西湖区湖底公园1号</a>,
    reply:1,
    looking:22
  }, {
    theme: '大多数杰拉德骄傲',
    category: 32,
    user: '圣诞节阿来得及',
    reply:1,
    looking:22
  }];
  const columns = [{
    title: '主题',
    dataIndex: 'theme',
    key: 'theme',
  }, {
    title: '分类',
    dataIndex: 'category',
    key: 'category',
  }, {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '回复',
    dataIndex: 'reply',
    key: 'reply',
  },{
    title: '浏览',
    dataIndex: 'looking',
    key: 'looking',
  },{
      title:"活动",
      dataIndex:"data",
      key:"data",
      render:(text)=>{return new Date().getHours()}

  }];
class ContentTable extends React.Component{
    render(){
        return(
         
            <Table dataSource={dataSource} columns={columns}  style={{position:"relative",top:62,overflowY:"hidden"}}/>
         
        )
    }
}
export default ContentTable