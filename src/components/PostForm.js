import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPost} from '../redux/actions';

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const body =  this.getBody.value;
    const data = {
      userId: new Date(),
      title,
      body,
      editing:false
    }
    this.props.dispatch(addPost(data));
    
    this.getTitle.value = '';
    this.getBody.value = '';
  }
render() {
return (
<div>
  <h1>Create Post</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Post Title"/>
   <br /><br />
   <textarea required rows="5" ref={(input)=>this.getBody = input} cols="20" 
    placeholder="Enter Post" />
   <br /><br />
   <button>Post</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);