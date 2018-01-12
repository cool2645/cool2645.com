import React from 'react';
import ReactDOM from 'react-dom';

class PCApp extends React.Component {
    render() {
        return (
            <div className="hide-mob no-margin">
                <div className="cover c1">
                    <div className="headline">
                        <h1>2645 Studio</h1>
                        <h2>Will code for food!</h2>
                    </div>
                    <div className="next"><i className="fa fa-angle-double-down" aria-hidden="true"></i></div>
                </div>

                <div className="parallax p1">
                    <div className="caption" id="p1BlackBoard">
                        <p>没错，你现在看到的就是 2645 工作室的简介。嗯……这就算是正式的简介了嘛？。</p>
                        <p>2645 工作室是一个不著名的软件 IT 工作室，主要出品无特定方向的各种东西。嘛，算算到现在也有 5 年历史了呢。</p>
                    </div>
                    <div className="mask"></div>
                </div>

                <div className="cover c2">
                    <div className="card card1">
                        <img className="avatar" src="https://avatars0.githubusercontent.com/u/18445295" />
                            <div className="avatar avatarBoard">
                                <div>
                                    <ul>
                                        <li><a href="https://github.com/zhouziqunzzq"><i className="fa fa-github-alt" aria-hidden="true"></i> zhouziqunzzq</a></li>
                                        <li><a href="https://gitlab.com/zhouziqunzzq"><i className="fa fa-gitlab" aria-hidden="true"></i> zhouziqunzzq</a></li>
                                        <li><a href="https://twitter.com/Bittersweet1314"><i className="fa fa-twitter" aria-hidden="true"></i> Bittersweet1314</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h4>Bittersweet</h4>
                            <p>μ'sic forever~</p>
                            <a className="link" href="javascript:;"><i className="fa fa-link" aria-hidden="true"></i> yosoro!</a>
                    </div>
                    <div className="card card2">
                        <img className="avatar" src="https://avatars2.githubusercontent.com/u/18373361" />
                            <div className="avatar avatarBoard">
                                <div>
                                    <ul>
                                        <li><a href="https://github.com/rikakomoe"><i className="fa fa-github-alt" aria-hidden="true"></i> rikakomoe</a></li>
                                        <li><a href="https://gitlab.com/rikakomoe"><i className="fa fa-gitlab" aria-hidden="true"></i> rikakomoe</a></li>
                                        <li><a href="https://twitter.com/rikakomoe"><i className="fa fa-twitter" aria-hidden="true"></i> rikakomoe</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h4>梨子</h4>
                            <p>こんなに好きなことは内緒なの</p>
                            <a className="link" href="https://rikako.moe"><i className="fa fa-link" aria-hidden="true"></i> rikako.moe</a>
                    </div>
                    <div className="mem icon">
                        Member
                    </div>
                </div>

                <div className="parallax p2">
                    <div className="caption" id="p2BlackBoard">
                        <p>2645 工作室成立之初是创作音频演绎和 Photoshop 后期作品的。</p>
                        <p>后来开始开发 Windows 程序，再后来逐渐转向网页端应用。</p>
                    </div>
                    <div className="mask"></div>
                </div>

                <div className="cover c3">
                    <div className="work icon">
                        Works of us and our members
                    </div>
                    <div className="ov">
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                    </div>
                </div>

                <div className="parallax p3">
                    <div className="caption" id="p3BlackBoard">
                        <p>我们的域名除了 cool2645.com，还有 cool2645.cc，cool2645.pub。</p>
                        <p><del>以前还用过 cool2645.live，但是因为不能备案就不用了QAQ</del></p>
                    </div>
                    <div className="mask"></div>
                </div>

                <div className="cover c4">
                    <div className="work icon">
                        Services hold by us
                    </div>
                    <div className="ov">
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                        <div className="card">
                        </div>
                    </div>
                </div>

                <div className="parallax p4">
                    <div className="caption" id="p4BlackBoard">
                        <p>最后一屏写点什么好呢pwp，应该说我们还是挺努力的吧(,·w&lt;)</p>
                        <p>Made with ❤ by 2012~2018 2645 Studio.</p>
                    </div>
                    <div className="mask"></div>
                </div>

                <div className="cover c5">
                    <h4>如果你喜欢，就请给个赞吧！</h4>
                    <h3><a href="javascript:;"><i className="fa fa-heart" aria-hidden="true"></i> 264526</a></h3>
                    <ul>
                        <li><a href="mailto:wangkule@cool2645.com"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/cool2645"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="https://gitlab.com/2645"><i className="fa fa-gitlab" aria-hidden="true"></i></a></li>
                        <li><a href="https://weibo.com/u/5873622510"><i className="fa fa-weibo" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PCApp;