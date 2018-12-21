import React from 'react';
import { NavLink } from "react-router-dom";
import './header.less';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 3,
      headerList: [
        {
          id: '0',
          name: '项目',
          link: 'project'
        },
        {
          id: '1',
          name: '效果图',
          link: 'effect'
        },
        {
          id: '2',
          name: '视频',
          link: 'video'
        },
        {
          id: '3',
          name: '登录',
          link: 'login'
        },
        {
          id: '4',
          name: '产品',
          link: 'list'
        }
      ]
    }
  }
  render() {
    const { headerList } = this.state;

    const renderLi = () => {
      const headerItemLIst = []
      headerList.forEach((element, i) => {
        headerItemLIst.push(<li key={element.id}> <NavLink to={element.link}> {element.name}</NavLink></li>)
      })
      return headerItemLIst;
    }
    return (
      <div className="header">
        <div data-index={this.state.index} className="header-inner">
          <NavLink to="/home" className="logo"> <img src="/asstes/images/logo.jpg"  alt=""/></NavLink>
          <ul className="list clearfix">
            {renderLi()}
          </ul>
        </div>
      </div>

    )
  }
}
export default Header;
