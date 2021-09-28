import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import storageUtil from "./utils/storageUtil";
import memoryUtils from "./utils/memoryUtils";


const user = storageUtil.get('user');
memoryUtils.user = user;

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

