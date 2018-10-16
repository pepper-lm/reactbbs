import React from "react";
import { Button, Icon, Modal, Form, Input } from "antd";
import banner from "../../public/images/head-banner.png"
import '../css/head.css';
const FormItem = Form.Item;
class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,//注册显示
            loginVisible: false //登录模态框
        }

    }

    handleSignUp = () => {
        this.setState({
            visible: true
        })
    }
    handleLogin = () => {
        this.setState({
            loginVisible: true
        })
    }
    handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log("inter");
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        const signFootLayout = (
            <div className="footContent clearfix">
                <Button type="primary" htmlType="submit" onClick={(e) => this.handleSignUpSubmit(e)} className="push-left">创建新账号</Button>
                <Button className="push-left">登录</Button>
                <p className="push-left text-box" style={{ clear: "both" }}>注册即表示你同意<a href="#">隐私策略</a>和<a href="#">服务条款</a></p>
            </div>
        );
        const loginFootLayout = (
            <div className="footContent clearfix">

                <Button  type="primary" className="push-left" htmlType="submit"><Icon type="unlock" theme="outlined" />登录</Button>
                <Button  className="push-left">创建新账号</Button>

            </div>
        )
        const signModal = {
            visible: this.state.visible,
            title: "创建新账户",
            footer: { ...signFootLayout },
            onCancel: () => {
                this.setState({
                    visible: false
                })
            },
            width: 710,
            height: 498
        };

        const loginModal = {
            visible: this.state.loginVisible,
            title: "登录",
            footer: { ...loginFootLayout },
            onCancel: () => {
                this.setState({
                    loginVisible: false
                })
            },
            width: 710,
            height: 498
        }

        const formItemLayout = {
            labelCol: {
                span: 2
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

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
                            <Button type="primary" className="sign-up-button" onClick={() => this.handleSignUp()}>注册</Button>
                            <Button type="primary" className="login-button" onClick={() => this.handleLogin()}><Icon type="user" theme="outlined" />登录</Button>

                        </span>
                        <ul className="icon clearfix">
                            <li>
                                <Icon type="search" theme="outlined" />
                            </li>
                            <li>
                                <Icon type="bars" theme="outlined" />
                            </li>
                        </ul>
                    </div>
                </div>
                {/** 注册的模态框*/}
                <Modal {...signModal}>
                    <Form >
                        <FormItem
                            label="邮箱"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('email')(
                                <Input style={{ width: "230px", height: "28px", borderWidth: 1, padding: 4 }} />
                            )}
                            <span className="extra-text">永不公开暂时</span>
                        </FormItem>
                        <FormItem
                            label="用户名"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('name'
                            )(
                                <Input style={{ width: "230px", height: "28px", borderWidth: 1, padding: 4 }} />
                            )}
                            <span className="extra-text">独一无二，没有空格，简短</span>
                        </FormItem>
                        <FormItem
                            label="昵称"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('nickname')(
                                <Input style={{ width: "230px", height: "28px", borderWidth: 1, padding: 4 }} />
                            )}
                            <span className="extra-text">你的全名(可选)</span>
                        </FormItem>
                        <FormItem
                            label="密码"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('password')(
                                <Input style={{ width: "230px", height: "28px", borderWidth: 1, padding: 4 }} />
                            )}
                            <span className="extra-text">至少10个字母</span>
                        </FormItem>

                    </Form>
                </Modal>
                {/** 登录的模态框*/}
                <Modal {...loginModal}>
                    <Form >
                        <FormItem
                            label="用户"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('emailUser')(
                                <Input style={{ width: "230px", height: "28px", borderWidth: 1, padding: 4 }} placeholder="用户名或者电子邮箱" />
                            )}

                        </FormItem>
                        <FormItem
                            label="密码"
                            {...formItemLayout}
                        >
                            {getFieldDecorator('password')(
                                <Input style={{ width: "230px", height: "28px", borderWidth: 1, padding: 4 }} />
                            )}
                            <span className="extra-text">我忘记了密码</span>
                        </FormItem>

                    </Form>
                </Modal>
            </header>
        )
    }
}

export default Form.create()(Head);