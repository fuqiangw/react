// import { createStore, applyMiddleware, compose} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';

// import saga from './saga';

// import reducer from './reducer';

// const sagaMiddleware = createSagaMiddleware();


// const store = createStore(
//     reducer,
//     applyMiddleware(sagaMiddleware, createLogger())
// );


// sagaMiddleware.run(saga)


// 原始方式  store创建

// import registerServiceWorker from './registerServiceWorker';
// import { createStore } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';



import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	compose(
		applyMiddleware(sagaMiddleware, createLogger()),
		window && (window.devToolsExtension ? window.devToolsExtension() : undefined),
	)
);

sagaMiddleware.run(saga);
window.store = store;

export default store