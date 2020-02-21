import React, { Component } from 'react';
import '../App.css';
import SotryItem from './StoryItem';
import RightInfo from './RightInfo';

class MainRight extends Component {
  render() {
    return (
        <div>
            <div className="main-right">    
                <div className="right-top">
                    <div>
                        <img className="right-profile-img img-radius" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75458034_463208610997500_6790997079192764416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wMkg-DDMFkMAX_M4dbW&oh=0776b84a33ec84661d4d772ede2121fd&oe=5EBBE2D4" alt=""/>
                    </div>
                    <div className="account-name-group">
                        <div className="account-name">
                            wecode_bootcamp
                        </div>
                        <div className="sub-account-name">
                            WeCode | 위코드
                        </div>
                    </div>
                </div>
                <div className="right-story box-border">
                    <div className="right-header">
                        <div className="right-header-text">스토리</div>
                        <a href="">
                            <div className="right-header-all-view">모두 보기</div>
                        </a>
                    </div>
                    <div className="right-story-inner">
                        <div className="right-story-content">
                            <SotryItem></SotryItem>
                            <SotryItem></SotryItem>
                            <SotryItem></SotryItem>
                            <SotryItem></SotryItem>
                        </div>
                    </div>
                </div>
                <div className="right-suggest box-border">
                    <div className="right-header">
                        <div className="right-header-text">회원님을 위한 추천</div>
                        <a href="">
                            <div className="right-header-all-view">모두 보기</div>
                        </a>
                    </div>
                    <div className="right-suggest-container">
                        <div className="right-suggest-item">
                            <div className="profile-text-group">
                                <a className="profile-32px" href="">
                                    <img className="max-width-height img-radius" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75458034_463208610997500_6790997079192764416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wMkg-DDMFkMAX_M4dbW&oh=0776b84a33ec84661d4d772ede2121fd&oe=5EBBE2D4" alt=""/>
                                </a>
                                <div className="account-name-group">
                                    <div className="account-name">
                                        bowerbird_sym
                                    </div>
                                    <div className="sub-account-name">
                                        회원님을 팔로우합니다
                                    </div>
                                </div>
                            </div>
                            <div className="right-suggest-follow-btn-wrap">
                                <button className="right-suggest-follow-btn">
                                    팔로우
                                </button>
                            </div>
                        </div>
                        <div className="right-suggest-item">
                            <div className="profile-text-group">
                                <a className="profile-32px" href="">
                                    <img className="max-width-height img-radius" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75458034_463208610997500_6790997079192764416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wMkg-DDMFkMAX_M4dbW&oh=0776b84a33ec84661d4d772ede2121fd&oe=5EBBE2D4" alt=""/>
                                </a>
                                <div className="account-name-group">
                                    <div className="account-name">
                                        bowerbird_sym
                                    </div>
                                    <div className="sub-account-name">
                                        회원님을 팔로우합니다
                                    </div>
                                </div>
                            </div>
                            <div className="right-suggest-follow-btn-wrap">
                                <button className="right-suggest-follow-btn">
                                    팔로우
                                </button>
                            </div>
                        </div>
                        <div className="right-suggest-item">
                            <div className="profile-text-group">
                                <a className="profile-32px" href="">
                                    <img className="max-width-height img-radius" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/75458034_463208610997500_6790997079192764416_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=wMkg-DDMFkMAX_M4dbW&oh=0776b84a33ec84661d4d772ede2121fd&oe=5EBBE2D4" alt=""/>
                                </a>
                                <div className="account-name-group">
                                    <div className="account-name">
                                        bowerbird_sym
                                    </div>
                                    <div className="sub-account-name">
                                        회원님을 팔로우합니다
                                    </div>
                                </div>
                            </div>
                            <div className="right-suggest-follow-btn-wrap">
                                <img src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-info">
                    <nav className="right-info-nav max-width-height">
                        <ul className="right-info-ul">
                            <RightInfo value='Instagram 정보'></RightInfo>
                            <RightInfo value='도움말'></RightInfo>
                            <RightInfo value='홍보 센터'></RightInfo>
                            <RightInfo value='API'></RightInfo>
                            <RightInfo value='채용 정보'></RightInfo>
                            <RightInfo value='개인정보처리방침'></RightInfo>
                            <RightInfo value='약관'></RightInfo>
                            <RightInfo value='디렉터리'></RightInfo>
                            <RightInfo value='프로필'></RightInfo>
                            <RightInfo value='해시태그'></RightInfo>
                            <RightInfo value='언어'></RightInfo>
                        </ul>
                    </nav>
                    <span className="right-info-li">@ 2020 INSTAGRAM</span>
                </div>
            </div>
        </div>
    );
  }
}

export default MainRight;


