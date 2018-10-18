import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import Head from "./component/Head"
import ContentTable from "./component/ContentTable"
ReactDOM.render(
    <div>
        <Head />
        <ContentTable/>
    </div>,
     
   
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
