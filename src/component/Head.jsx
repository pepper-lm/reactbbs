import React from "react";
import {Button,Icon} from "antd";
import banner from "../../public/images/head-banner.png"
class Head extends React.Component{
    render(){
        return(
            <header>
                <div>
                    <img src={banner} alt="react"/>
                </div>
                <div>
                    <span>
                        <Button type="primary">注册</Button>
                        <Button><Icon type="user" theme="outlined" />登录</Button>
                    </span>
                     <ul>
                        <li>
                        <Icon type="search" theme="outlined" />
                        </li>
                        <li>
                        <Icon type="bars" theme="outlined" />
                        </li>
                     </ul>
                </div>
            
            </header>
        )
    }
}

export  default Head