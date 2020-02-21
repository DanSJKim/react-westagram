import React, { Component } from 'react';
import '../App.css';

class SotryItem extends Component {
    render() {
        return(
            // <Router>
            //   <Route exact path='/' component={Login}/>
            //   <Route path='/main' component={Main}/>
            // </Router>
            <div className="right-story-item">
                <button className="right-story-item-btn">
                    <div>
                        <img className="right-story-item-img img-radius" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75458034_463208610997500_6790997079192764416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wMkg-DDMFkMAX_M4dbW&oh=0776b84a33ec84661d4d772ede2121fd&oe=5EBBE2D4" alt=""/>
                    </div>
                    <div className="account-name-group">
                        <div className="account-name">
                            alexishyuni
                        </div>
                        <div className="right-story-item-ago">
                            2시간 전
                        </div>
                    </div>
                </button>
            </div>
        );
    }
}

export default SotryItem;

