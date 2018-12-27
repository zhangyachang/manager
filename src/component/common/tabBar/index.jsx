import React, {Component} from 'react';

// import {Link} from "react-router-dom";


import { TabBar } from 'antd-mobile';
import "./index.scss";

/**
 *    @param  badage     number/string  徽标数
 *    @param  dot        boolean        是否在右上角显示小红点
 *    @param  selected   boolean        是否选中
 *    @param  onpress    function       点击触发 (需要自己改变组件  state & selecte={true})
 *    @param  icon       img source     默认展示图片
 *    @param  selectedIcon img source   选中后展示图片
 *    @param  title       string        标题文字
 *    @param iconStyle   String         iCon样式 {width: 28, height: 28}
 *
 */
class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'shenghuo',
      hidden: false,
      navData: [
        {
          title: '生活',
          icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
          selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
          badge: 2,
          onpressSelectedTab: 'shenghuo'
        },
        {
          title: '口碑',
          icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
          selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
          badge: 'new',
          onpressSelectedTab: 'koubei'
        },
        {
          title: '朋友',
          icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
          selectedIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
          badge: 'update',
          dot: true,
          onpressSelectedTab: 'friend'
        },
        {
          title: '我的',
          icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
          selectedIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
          onpressSelectedTab: 'my'
        }
      ]
    };
  }
  
  render() {
    return (
      <div className={'tab_bar'}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            this.state.navData.map((item, index) => {
              return (
                <TabBar.Item
                  title={item.title}
                  key={item.title}
                  icon={<div style={{
                    width: '0.44rem',
                    height: '0.44rem',
                    background: `url(${item.icon}) center center /  0.42rem 0.42rem no-repeat` }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '0.44rem',
                    height: '0.44rem',
                    background: `url(${item.selectedIcon}) center center /  0.42rem 0.42rem no-repeat` }}
                  />
                  }
                  selected={this.state.selectedTab === item.onpressSelectedTab}
                  badge={item.badge}
                  dot={item.dot}
                  onPress={() => {
                    this.setState({
                      selectedTab: item.onpressSelectedTab,
                    });
                  }}
                />
              )
            })
    
          }
          
          {/*<TabBar.Item
            title="生活"
            key="生活"
            icon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            // data-seed="logId"
          >
            {this.renderContent('生活')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="koubei-o" size="md" />}
            selectedIcon={<Icon type="koubei" size="md" />}
            title="口碑"
            key="口碑"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          
          <TabBar.Item
            icon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
              />
            }
            title="朋友"
            key="朋友"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>
          
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>*/}
          
        </TabBar>
      </div>
    );
  }
}

export default BottomNav;