import React from 'react';
import ReactDOM from 'react-dom';
import {setCookie,getCookie} from "./common"

class MobApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.state = {
            like: 0,
            text: "喜欢就给个赞吧！",
            c8ClassName: "cover c8"
        };
        $.ajax({
            type: "GET",
            url: "/like.php",
            success: function (msg) {
                console.log(msg);
                let dataObj = eval("(" + msg + ")");
                if (dataObj.code == 200) {
                    this.setState({
                        like: parseInt(dataObj.data.like)
                    })
                }
            }.bind(this),
        });
    }

    handleLike() {
        if (getCookie('like'))
            this.setState({
                text: "鼓励我们已经收到啦！",
                c8ClassName: "cover c8 white"
            });
        else
            $.ajax({
                type: "POST",
                data: "",
                url: "/like.php",
                success: function (msg) {
                    console.log(msg);
                    let dataObj = eval("(" + msg + ")");
                    if (dataObj.code == 200) {
                        if (dataObj.result) {
                            this.setState({
                                like: this.state.like + 1,
                                text: "谢谢你的鼓励！",
                                c8ClassName: "cover c8 white"
                            });
                            setCookie('like', 1);
                        } else {
                            this.setState({
                                text: "鼓励我们已经收到啦！",
                                c8ClassName: "cover c5 white"
                            });
                            setCookie('like', 1);
                        }
                    }
                }.bind(this),
            });
    }

    render() {
        return (
            <div className="hide-pc no-margin">
                <div className="swiper-container no-margin">
                    <div className="swiper-wrapper no-margin">
                        <div className="swiper-slide no-margin">
                            <div className="cover c1">
                                <p>鲁ICP备16005737号-1 · Made with ❤.</p>
                                <div className="headline">
                                    <h1>2645 Studio</h1>
                                    <h2>Will code for food!</h2>
                                </div>
                                <div className="next"><i className="fa fa-angle-double-right" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div className="swiper-slide no-margin">
                            <div className="cover c6">
                                <div className="card card1">
                                    <img className="avatar" src="https://avatars0.githubusercontent.com/u/18445295" />
                                    <h4>Bittersweet</h4>
                                    <p className="left">μ'sic forever~</p>
                                    <a className="link" href="javascript:;"><i className="fa fa-link" aria-hidden="true"></i> yosoro!</a>
                                </div>
                                <div className="card card2">
                                    <img className="avatar" src="https://avatars2.githubusercontent.com/u/18373361" />
                                    <h4>梨子</h4>
                                    <p className="right">こんなに好きなことは内緒なの</p>
                                    <a className="link" href="https://rikako.moe"><i className="fa fa-link" aria-hidden="true"></i> rikako.moe</a>
                                </div>
                                <div className="mem icon">
                                    Member
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide no-margin">
                            <div className="cover c7 c7-1">
                                <div className="card card1">
                                    <img className="avatar left" src="https://upload.wikimedia.org/wikipedia/en/f/f4/Baidu.svg" />
                                    <h4>手机百度</h4>
                                    <p className="left">整洁干净的手机百度首页！</p>
                                    <a className="link" href="https://www.baiddu.org"><i className="fa fa-link" aria-hidden="true"></i> baiddu.org</a>
                                </div>
                                <div className="card card2">
                                    <img className="avatar right" src="https://nanjoyoshino.moe/img/n.jpg" />
                                    <h4>Twitter 机器人</h4>
                                    <p className="right">用专门的网站来同步你的推文</p>
                                    <span className="link">
                                        <a href="https://nanjoyoshino.moe"><i className="fa fa-link" aria-hidden="true"></i> Nanjo</a> {" "}
                                        <a href="https://soramaru.moe/"><i className="fa fa-link" aria-hidden="true"></i> Tokui</a>
                                    </span>
                                </div>
                                <div className="card card3">
                                    <img className="avatar left" src="http://www.gravatar.com/avatar/02e74f10e0327ad868d138f2b4fdd6f0?s=64&d=identicon" />
                                    <h4>Minawiki</h4>
                                    <p className="left">有强大评论功能的维基系统</p>
                                    <a className="link" href="http://wiki.cool2645.cc"><i className="fa fa-link" aria-hidden="true"></i> Demo</a>
                                </div>
                                <div className="card card4">
                                    <img className="avatar right" src="https://raw.githubusercontent.com/cool2645/neu-ipgw_linux/master/ipgw.png" />
                                    <h4>NEU-IPGW</h4>
                                    <p className="right">东北大学(沈阳) IP 网关客户端</p>
                                    <span className="link">
                                        <a href="https://github.com/cool2645/neu-ipgw"><i className="fa fa-link" aria-hidden="true"></i> PC</a> {" "}
                                        <a href="https://github.com/cool2645/neu-ipgw_linux"><i className="fa fa-link" aria-hidden="true"></i> Linux</a>
                                    </span>
                                </div>
                                <div className="mem icon">
                                    Works
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide no-margin">
                            <div className="cover c7 c7-2">
                                <div className="card card1">
                                    <img className="avatar right" src="https://gogs.io/img/favicon.ico" />
                                    <h4>Git</h4>
                                    <p className="right">允许私有的 Git 代码托管</p>
                                    <a className="link" href="https://git.cool2645.com"><i className="fa fa-link" aria-hidden="true"></i> git.</a>
                                </div>
                                <div className="card card2">
                                    <img className="avatar left" src="http://www.free-icons-download.net/images/cloud-logo-icon-22859.png" />
                                    <h4>贴吧云签到</h4>
                                    <p className="left">百度贴吧云签到服务</p>
                                    <span className="link">
                                        <a href="http://kl.cool2645.com"><i className="fa fa-link" aria-hidden="true"></i> 酷乐</a> {" "}
                                        <a href="http://ky.cool2645.com"><i className="fa fa-link" aria-hidden="true"></i> 酷优</a>
                                    </span>
                                </div>
                                <div className="card card3">
                                    <img className="avatar right" src="https://cdn4.iconfinder.com/data/icons/simple-soft/512/open_mail-128.png" />
                                    <h4>邮件</h4>
                                    <p className="right">2645 工作室域名邮箱</p>
                                    <a className="link" href="https://mail.cool2645.com"><i className="fa fa-link" aria-hidden="true"></i> mail.</a>
                                </div>
                                <div className="card card4">
                                    <img className="avatar left" src="https://prometheus.atlas-sys.com/download/attachments/116130109/update02.png" />
                                    <h4>自动更新</h4>
                                    <p className="left">2645 软件自动更新服务</p>
                                    <a className="link" href="http://update.cool2645.com"><i className="fa fa-link" aria-hidden="true"></i> update.</a>
                                </div>
                                <div className="mem icon">
                                    Services
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide no-margin">
                            <div className={this.state.c8ClassName}>
                                <h4>{this.state.text}</h4>
                                <h3><a href="javascript:;" onClick={this.handleLike}><i className="fa fa-heart" aria-hidden="true"></i> {this.state.like}</a></h3>
                                <ul>
                                    <li><a href="https://blog.cool2645.com"><i className="fa fa-rss-square" aria-hidden="true"></i></a></li>
                                    <li><a href="mailto:wangkule@cool2645.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                                    <li><a href="https://github.com/cool2645"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                                    <li><a href="https://gitlab.com/2645"><i className="fa fa-gitlab" aria-hidden="true"></i></a></li>
                                    <li><a href="https://weibo.com/u/5873622510"><i className="fa fa-weibo" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default MobApp