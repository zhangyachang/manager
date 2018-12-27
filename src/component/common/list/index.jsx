import React, {Component} from 'react';
import { List } from 'antd-mobile';
import './index.scss'

const Item = List.Item;
const Brief = Item.Brief;



class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '任务完成情况',
        list: [
          {
            time: '10:31',
            icon: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
            title: '标题文字',
            subtitle: '副标题'
          },
          {
            time: '12-3 10:31',
            icon: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
            title: '完成我的个人项目',
            subtitle: '副导航'
          }
        ]
      }
    }
  }
  render() {
    return (
      <div className={'test'}>
        <List renderHeader={() => {return (this.state.data.title)}} className="my-list">
          {
            this.state.data.list.map((item, index) => {
              return (
                <Item
                  key={index}
                  extra={item.time}
                  align="top"
                  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                  multipleLine>
                  {item.title}
                  <Brief>{item.subtitle}</Brief>
                </Item>
              )
            })
          }
        </List>
      </div>
    );
  }
}

export default TaskList;