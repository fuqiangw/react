import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getVideoList } from './action'

class Video extends React.Component {
  render() {
    return (
        <div>
            这里是Home的内容(Video)
        </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    ...state.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getVideoList
  }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps )(Video);
