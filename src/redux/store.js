/**
reducer就是纯函数，接收state 和 action，然后返回一个新的 state。

看看上面的代码，无论是combineReducers函数也好，还是reducer函数也好，都是接收state和action，
返回更新后的state。区别就是combineReducers函数是处理整棵树，reducer函数是处理树的某一点。

接下来，我们要创建一个store。

前面我们可以使用 action 来描述“发生了什么”，使用action创建函数来返回action。

还可以使用 reducers 来根据 action 更新 state 。

那我们如何提交action？提交的时候，怎么才能触发reducers呢？

store 就是把它们联系到一起的对象。store 有以下职责：

维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 触发reducers方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。
 */
import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';
import thunkMiddleware from 'redux-thunk';

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

export default store;