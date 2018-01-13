import React from 'react';
import ReactDOM from 'react-dom';
import {setCookie,getCookie} from "./common"
import Swiper from 'swiper'
import logo1 from '../img/cloud-logo-icon-22859.png'

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
                let dataObj = eval("(" + msg + ")");
                if (dataObj.code == 200) {
                    this.setState({
                        like: parseInt(dataObj.data.like)
                    })
                }
            }.bind(this),
        });
    }

    componentDidMount() {

    }

    handleLike() {
        if (getCookie('like'))
            this.setState({
                text: "谢谢你的鼓励！",
                c8ClassName: "cover c8 white"
            });
        else
            $.ajax({
                type: "POST",
                data: "",
                url: "/like.php",
                success: function (msg) {
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
                                text: "谢谢你的鼓励！",
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

        );
    }
}

export default MobApp