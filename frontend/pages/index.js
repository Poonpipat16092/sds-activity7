import "antd/dist/antd.css";
import Head from 'next/head'
import axios from 'axios'
import { Row, Col, List, Avatar, Button, Skeleton } from 'antd';

export default function Home(props) {
  return (
    <Row>
      <Col span={12} offset={6}>
      <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={props.data}
          renderItem={item => (
            <List.Item
              actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">delete</a>]}
            >
              <List.Item.Meta
                // avatar={
                //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                // }
                title={<div>{item.title}</div>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Col>
  </Row>
  )
}
export async function getServerSideProps(context) {
  const blog = await axios.get('http://activity7_node_1:8000/api/v1/blog')
  console.log(blog.data.pagination.limit)
  const dataList = []
  var obj ={}
  blog.data.data.forEach((data) => {
    obj = {
      title: data.title,
      description: data.description
    }
    dataList.push(obj)
  });
  console.log(blog.data.data)
  console.log('data',dataList[0])
  return {
    props: {
      total: blog.data.pagination.limit,
      data: dataList
    }, // will be passed to the page component as props
  }
}
