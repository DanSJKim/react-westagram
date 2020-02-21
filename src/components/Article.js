import React, { Component } from 'react';
import '../App.css';
import AddComment from './AddComment';
import uuid from 'uuid';
import axios from 'axios';
import Comments from './Comments';

class Article extends Component {
    state = {
        comments: []
    };

    componentDidMount() {
        // HTTP 통신으로 JSON 데이터 받아오기
        // axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
        //     .then(res => this.setState({ comments: res.data }));
    }

    // Add Comment
    addComment = (name, body) => {

        // HTTP
        // axios.post('https://jsonplaceholder.typicode.com/comments', {
        //     name,
        //     body
        // })
        //     .then(res => {
        //     console.log('add res: ', res.data);
        //     res.data.id = uuid.v4();
        //     this.setState({ comments: [...this.state.comments, res.data] });
        //     });

        // Client
        let newComment = {
            id: uuid.v4(),
            name: name,
            body: body
        }
        this.setState({ comments: [...this.state.comments, newComment] });
    }

    delComment = (id) => {

        console.log('delTodo id: ', `${id}`);
        // axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
        //   .then(res => {
        //       console.log('res del: ', res.data)
        //     this.setState({
        //     comments: [...this.state.comments.filter(comment => comment.id !== id)] 
        //   })});
        this.setState({
            comments: [...this.state.comments.filter(comment => comment.id !== id)]
        });
    }

    updateComment = (id, body) => {
        console.log('id: ', id, 'body: ', body);

        for(let i = 0 ; i < this.state.comments.length ; i++) {
            console.log("this.state.comments.id: ", this.state.comments[i]);
            if(this.state.comments[i].id === id) {
                console.log('updated');
                this.state.comments[i].body = body;
            }
        }
    }


  render() {
    return (
        <article className="box-border">
            <div className="article-head">
                <div className="profile-text-group">
                    <a className="profile-32px" href="">
                        <img className="max-width-height img-radius" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75458034_463208610997500_6790997079192764416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wMkg-DDMFkMAX_M4dbW&oh=0776b84a33ec84661d4d772ede2121fd&oe=5EBBE2D4" alt=""/>
                    </a>
                    <div className ="article-account">
                        <div className="account-name">wecode_bootcamp</div>
                        <div>WeCode - 위코드</div>
                    </div>
                </div>
                
                <div>
                    <button className="article-head-btn">
                        <img className="max-width-height" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt=""/>
                    </button>
                </div>
            </div>
            <div>
                <img className="article-img" src="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.0-9/70455795_2642649862466701_8361951122268618752_o.jpg?_nc_cat=103&_nc_ohc=1tO2vcgN79cAX8ivbOz&_nc_ht=scontent-gmp1-1.xx&oh=b19ae3b73f6f4d0f9c2f81b6bb1743cc&oe=5E9047DD" alt=""/>
            </div>
            <div className="article-bottom-wrapper">
                <div className="article-buttons">
                    <div className="article-left-buttons">
                        <a className="img-button" href="">
                            <input className="max-width-height" type="image" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                        </a>
                        <a className="img-button" href="">
                            <input className="max-width-height" type="image" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                        </a>
                        <a className="img-button" href="">
                            <input className="max-width-height" type="image"src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"/>
                        </a>
                    </div>
                    <div className="article-right-buttons">
                            <input type="image" className="img-button" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"/>
                        
                    </div>
                </div>
                <div className="article-likes">
                    <div>
                        <img className="article-likes-profile img-radius" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75458034_463208610997500_6790997079192764416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wMkg-DDMFkMAX_M4dbW&oh=0776b84a33ec84661d4d772ede2121fd&oe=5EBBE2D4" alt=""/>
                    </div>
                    <div>
                        <span className="account-name">seungyoun_iain</span>님 <span className="account-name"> 외 21명</span>이 좋아합니다
                    </div>
                </div>
                <div className="article-content">
                    <div className="article-recent-comment">
                        <Comments comments={this.state.comments} updateComment={this.updateComment} delComment={this.delComment} />
                    </div>
                </div>
                <div className="article-content-ago right-story-item-ago">
                    54분 전
                </div>
                <div className="article-ago">
                    
                </div>
                <AddComment addComment={this.addComment} />
            </div>
        </article>
    );
  }
}

export default Article;