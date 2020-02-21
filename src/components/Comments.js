import React, { Component } from 'react';
import CommentItem from './CommentItem';

class Comments extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <CommentItem key={comment.id} comment={comment} updateComment={this.props.updateComment} delComment={this.props.delComment}/>
    ));
  }
}

export default Comments;