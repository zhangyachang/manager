import Home from "../component/home";
import Login from "../component/login";
import Result from "../component/result";
import TaskList from "../component/common/list";
import Test from "../component/test";


export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    /* 登录页面 */
    path: '/login',
    component: Login,
    title: '登录'
  },
  {
    path: '/result',
    component: Result,
    title: '结果'
  },
  {
    path: '/list',
    component: TaskList
  },
  {
    path: '/test',
    component: Test
  }
]
