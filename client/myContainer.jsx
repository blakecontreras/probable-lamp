import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import addTrack from './actions'
import store from './app'

class MyContainer extends React.Component{
  handleClick() {
    this.props.addTrack({id: 1, key: '001'});
    console.log('props ', this.props);
    console.log('store state? ', store.getState())
  }

  render() {
    return (
      <div>
        <div className="container">
          <button onClick= { this.handleClick.bind(this) }>Add track 1</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTrack: addTrack
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyContainer);
