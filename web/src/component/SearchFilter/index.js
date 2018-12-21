import React from 'react';
import './index.less';
import { Dropdown, Icon, Menu, Radio } from 'antd';
import _ from 'lodash';

class SearchFilter extends React.Component {
	constructor() {
		super();
		this.state = {
            index: 3,
            orderSwitchActivedId: '',
            searchTypeActiveId: '-1',
            filterlist: [
                {
                    id: '1',
                    name: '吃'
                },
                {
                    id: '2',
                    name: '穿'
                }
            ]

		}
    }
    componentWillMount () {
        const orderSwitchActivedId = this.props.orderSwitchActivedId;
        this.setState({
            orderSwitchActivedId : orderSwitchActivedId
        })
        
        console.log(this.state.orderSwitchActivedId)
    }
    // componentWillReceiveProps (nextProps) {
    //     console.log(nextProps.orderSwitchActivedId);
    //     const orderSwitchActivedId  = nextProps.orderSwitchActivedId
    //     this.setState({
    //         orderSwitchActivedId : orderSwitchActivedId
    //     })
    // }
    renderFilterList = (list) => {
        // const list = this.state.filterlist;
        // console.log(list)
        if (list) {
            const { searchTypeActiveId } = this.state;
            const createMenu = (list) => (
                <Menu >
                {list.map(item => (
                    <Menu.Item key={item.id} onClick={() => {this.choseFilter(item.id)}}><span>{item.name} </span></Menu.Item>
                )) }  
                </Menu>
            )
            return (
                <span className="searchFilter-wrap">
                    <Dropdown overlay={createMenu(list)} >
                        <span> {_.find(list, {id: searchTypeActiveId }).name} <Icon type="down" /></span>
                    </Dropdown>
                 </span>
            )
        }
        
    }
    choseFilter = (item) => {
        console.log(item)
        this.setState({
            searchTypeActiveId: item
        })
        this.props.handleClick(this.backFactory(item, this.state.orderSwitchActivedId))
    }
    handleorderSwitch = (e) => {
        this.setState({
            orderSwitchActivedId: e.target.value
        })
        this.props.handleClick(this.backFactory(this.state.searchTypeActiveId, e.target.value))
    }
    backFactory = (searchTypeActiveId ,orderSwitchActivedId) => {
        const back = {
            type: searchTypeActiveId,
            sort: orderSwitchActivedId
        };
        return back;
    }
	render() {
        const { orderSwitch, filterSwitch } = this.props;
        const { orderSwitchActivedId } = this.state;

		return (
			<div className="search-filter">
				<div className="content">
                    <div className="label">排序</div>
                       { this.renderFilterList(filterSwitch) }
                        {/* {
                            filterSwitch.map((item, i) => (
                                <Radio.Button key={i} value={item.id}>{item.name}</Radio.Button>
                            ))
                        } */}
                    <div className="order-wrap clearfix">
                        <div className="label">排序</div>
                        <Radio.Group className="mySwitch"  value={orderSwitchActivedId} onChange={this.handleorderSwitch}>
                        
                            {
                                orderSwitch.map((item, i) => (
                                    <Radio.Button key={i} value={item.id}>{item.name}</Radio.Button>
                                ))
                            }
                        </Radio.Group>
                    </div>
                </div>
			</div>
		)
	}
}
export default SearchFilter; 
