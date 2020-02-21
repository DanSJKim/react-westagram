import React, { Component } from 'react';

class CommentItem extends Component {
  constructor(props) {
    console.log('commentitem props: ', props);
    super(props);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.state = {isUpdate: false};
  }

  state = {
    body: ''
  }

  handleUpdateClick(e) {
    e.preventDefault();
    this.setState({
      isUpdate: !this.state.isUpdate
    });
  
  }

  handleSubmitClick = (e) => {
    e.preventDefault();
    this.props.updateComment(this.props.comment.id, this.state.body);
    this.setState({
      isUpdate: !this.state.isUpdate
    });
  }

  handleCancelClick = () => {
    this.setState({isUpdate: !this.state.isUpdate});
  }

  // detect text changed
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const isUpdate = this.state.isUpdate;
    let button;
    let textForm;
    const { id, name, body } = this.props.comment;

    // 일반 댓글 창
    if (!isUpdate) {
      button = 
      <div>
        <button onClick={this.handleUpdateClick} style={btnStyle}>수정
        </button>
      </div>;

      textForm = <div className="comment-item"><span className="account-name">{name}</span> {body}</div>;
      
    // 댓글 수정 버튼 눌렀을 때
    } else {
      // 수정 내용 입력폼
      textForm = 
      <div style={inputStyle}>
        <textarea type="text" name="body" onChange={this.onChange} value={this.state.body}/>
      </div>;

      // 수정 모드 버튼
      button = 
      <div>
        <div>
          <button 
            onClick={this.handleSubmitClick} 
            style={btnStyle}>
            확인
          </button>
        </div>
        <div>
          <button 
            onClick={this.handleCancelClick} 
            style={btnStyle}>
            취소
          </button>
        </div> 
      </div>;
    }

    return (

    <div style={commentStyle}>
        {textForm}
        {button}
      <div>
        <button onClick={this.props.delComment.bind(this, id)} style={btnStyle}>삭제</button>
      </div>
    </div>
    );
  }
}

const inputStyle = {
  width:'100'
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  width: '40px'
}

const commentStyle = {
  display: 'flex'
}

export default CommentItem;