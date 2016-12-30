import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '../actions/actionCreators'

import Main from './main'

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

function mapStateToProps(state){
  return {
    posts: state.posts,
    comments : state.comments
  }
}

function mapDispatchToProps(dispatch){
  return  bindActionCreators(actionCreators, dispatch)
}

export default App;
