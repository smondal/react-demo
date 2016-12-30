import React from 'react';
import ReactDom from 'react-dom'
import Photo from './photo'

class OnlineGrid extends React.Component{
  render(){
    return(
    <div className="photo-grid">
      Hello
      {this.props.posts.map(function(post, i){
        return <Photo key={i}/>
      })
      }
    </div>
    )
  }
}

export default OnlineGrid