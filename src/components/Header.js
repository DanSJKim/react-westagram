import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <nav className="header-nav">
                    <div className="left-nav-group">
                        <img className="icon-resize" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt=""/>
                        <div className="left-pole"></div>
                        <div className="left-logo-wrapper">
                            <img className="left-logo" src="/images/logo_text.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <input className="input-search box-border" type="text" placeholder="검색"/>
                    </div>
                    <div className="right-nav-group">
                        <a className="icon-resize" href="">
                            <img className="max-width-height" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt=""/>
                        </a>
                        <a className="icon-resize" href="">
                            <img className="max-width-height" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt=""/>
                        </a>
                        <a className="icon-resize" href="">
                            <img className="max-width-height" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt=""/>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;