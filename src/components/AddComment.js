import React, { Component } from 'react'

class AddComment extends Component {
    state = {
        name: '',
        comment: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addComment('kim', this.state.comment);
        this.setState({ comment: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="article-comment">
                <form onSubmit={this.onSubmit} className="article-comment-form">
                    <input
                        type="text"
                        name="comment"
                        className="article-comment-area" 
                        placeholder="댓글 달기..."
                        onChange={this.onChange}
                        value={this.state.comment}
                    />
                    <input
                        type="submit"
                        value="게시"
                        className="article-comment-btn"
                    />
                </form>
            </div>
        )
    }
}

export default AddComment