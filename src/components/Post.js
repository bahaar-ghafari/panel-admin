import React, { Component } from 'react';
import {deletePost,editPost} from '../redux/actions';
import { connect } from "react-redux";
class Post extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.body}</p>
      <button onClick={() => this.props.dispatch(editPost(this.props.post.id))}>edit</button>
      <button onClick={() => this.props.dispatch(deletePost(this.props.post.id))}>delete</button>
    </div>
  );
 }
}
export default connect()(Post);