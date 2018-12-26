import Home from "../component/home";
import Login from "../component/login";
import Result from "../component/result";


export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/result',
    component: Result
  }
]
