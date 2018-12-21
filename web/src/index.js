import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './index.css';
import App from './router/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './index.less';
// import 'antd/dist/antd.css';
// React-Redux 时, 首先创建一个Provider 组件 , 作为最顶层的组件,将所有react组件包裹起来,
// 从而使所有的React组件都变成Provider组件的的后代, 再将建立好的Store作为属性传递给Provider 组件
// 通过Provider 组件建立起Store 和React组件之间的联系

ReactDOM.render(
	<LocaleProvider locale={zhCN}>
		<Provider store={store}>
			<App />
		</Provider>
	</LocaleProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
