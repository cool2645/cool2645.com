import React from 'react';
import ReactDOM from 'react-dom';
import {setCookie,getCookie} from "./common"

class PCApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.state = {
            like: 0,
            visit: 0,
            text: "如果你喜欢，就请给个赞吧！",
            c5ClassName: "cover c5"
        };
        $.ajax({
            type: "GET",
            url: "/like.php",
            success: function (msg) {
                let dataObj = eval("(" + msg + ")");
                if (dataObj.code == 200) {
                    this.setState({
                        like: parseInt(dataObj.data.like),
                        visit: parseInt(dataObj.data.visit)
                    })
                }
            }.bind(this),
        });
    }

    handleLike() {
        if (getCookie('like'))
            this.setState({
                text: "你的鼓励我们已经收到啦！",
                c5ClassName: "cover c5 white"
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
                                text: "谢谢你的鼓励，我们会做的更好！",
                                c5ClassName: "cover c5 white"
                            });
                            setCookie('like', 1);
                        } else {
                            this.setState({
                                text: "你的鼓励我们已经收到啦！",
                                c5ClassName: "cover c5 white"
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

export default PCApp;