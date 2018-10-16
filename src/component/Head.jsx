import React from "react";
import { Button, Icon } from "antd";
import banner from "../../public/images/head-banner.png"
import '../css/head.css'
class Head extends React.Component {
    render() {
        return (
            <header className="react-head clearfix">
                <div className="wrap clearfix">
                    <div className="title">
                        <a href="#">
                            <img src={banner} alt="react" />
                        </a>
                    </div>
                    <div className="panel clearfix">
                        <span>
                            <Button type="primary" className="sign-up-button">注册</Button>
                            <Button type="primary" className="login-button"><Icon type="user" theme="outlined" />登录</Button>
                        </span>
                        <ul className="icon clearfix">
                            <li>
                                <Icon type="search" theme="outlined"  />
                            </li>
                            <li>
                                <Icon type="bars" theme="outlined"  />
                            </li>
                        </ul>
                    </div>
                </div>


            </header>
        )
    }
}

export default Head