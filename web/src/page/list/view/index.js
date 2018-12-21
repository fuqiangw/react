import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Input } from 'antd';
// import _ from 'lodash';
import MasonryCard from '../../../component/MasonryCard';
import SearchFilter from '../../../component/SearchFilter';
// SearchFilter
import { bindActionCreators } from 'redux';
import { getProductList, getSearchFilterCond } from '../action'
import './index.less';

const Search = Input.Search;

class List extends Component {
  constructor(props) {
    super(props)
    this.seqData = {
      orderSwitchActivedId: '1',
      filters: {
        type: '-1',
        sort: '1',
        keyword: '',
        pageNo: 1,
        getType: -1
      },
      inputValue: '',
      orderSwitch: [
        {
          id: '1',
          name: '销售量'
        },
        {
          id: '3',
          name: '售价'
        }
      ]
    }
  }
  componentDidMount() {
    console.log('didMount');
    this.sendSeq(this.seqData.filters);
    this.sendFilterCond()
  }

  handlebottomTrigger = () => {
    const { data, total } = this.props.productList;
    if ( data.length < total ) {
      this.seqData.filters.getType = 1;
      this.seqData.filters.pageNo += 1;
      this.sendSeq(this.seqData.filters);
    }
  }
  sendSeq = (filters) => {
    this.props.getProductList('product',filters )
  }
  sendFilterCond = () => {
    this.props.getSearchFilterCond('productType');
  }
  searchHandle = (value) => {
    const keyword = (value && value.trim()) ? value.trim() : ''
    this.seqData.filters.keyword = keyword; 
    this.seqData.filters.getType = 0;
    this.seqData.filters.pageNo = 1;
    this.sendSeq(this.seqData.filters);

  }
  handleFilter = (params) => {
    this.seqData.filters.type =params.type; 
    this.seqData.filters.sort =params.sort; 
    this.seqData.filters.getType = 0;
    this.seqData.filters.pageNo = 1;
    this.sendSeq(this.seqData.filters);
  }
  render() {
    const { orderSwitch, orderSwitchActivedId, inputValue } = this.seqData;
    const { productList, filterCond } = this.props;
    const { isLoaded, data, total } = productList
    return (
      <div className="page-product">
        <div className="page-product-inner">
          <div className="search">
            <Search
              autoComplete="off"
              defaultValue={inputValue}
              placeholder="搜索你喜欢的"
              onSearch={this.searchHandle}
              style={{ width: 536 }}
            />
          </div>
          <div className="SearchFilter-wrap">
            <SearchFilter orderSwitch={orderSwitch} orderSwitchActivedId={orderSwitchActivedId} filterSwitch={filterCond.data}  handleClick={this.handleFilter} />
          </div>
          <div className="search-result-wrap">
            <div className="total-numb">找到 <span>{total}</span> 个结果</div>
            <div className="result-list clearfix">
              <MasonryCard data={data} isLoaded={ isLoaded } isNeedLoad={data.length < total} bottomTrigger={this.handlebottomTrigger} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
function mapseqDataToProps(seqData) {
  return {
    ...seqData.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProductList,
    getSearchFilterCond
  }, dispatch)

}

export default connect(mapseqDataToProps, mapDispatchToProps)(List);
