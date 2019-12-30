import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updatePost} from '../redux/actions';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newBody = this.getBody.value;
  const data = {
    newTitle,
    newBody,
  }
  console.log("edit.js post",this.props.post,data)
  this.props.dispatch(updatePost(this.props.post.id,data))
  console.log("edit.js post",this.props.post,data)
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
    <textarea rows="5" ref={(input) => this.getBody = input}
    defaultValue={this.props.post.body} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);