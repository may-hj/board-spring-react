import { Route } from 'react-router-dom'

import 'App.css';
import ArticleDetail from 'article/component/ArticleDetail'
import ArticleList from 'article/component/ArticleList'
import ArticleUpdate from 'article/component/ArticleUpdate'
import ArticleWrite from 'article/component/ArticleWrite'
import Login from 'user/component/Login'
import Signup from 'user/component/SignUp'
import UserDetail from 'user/component/UserDetail'
import Home from 'common/component/Home'
import News from 'board/component/News'
import SeoulCCTV from 'article/component/SeoulCCTV'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/article/article-detail' component={ArticleDetail}/>
      <Route exact path='/article/article-list' component={ArticleList}/>
      <Route exact path='/article/article-update' component={ArticleUpdate}/>
      <Route exact path='/article/article-write' component={ArticleWrite}/>
      <Route exact path='/board/news' component={News}/>
      <Route exact path='/user/login' component={Login}/>
      <Route exact path='/user/signup' component={Signup}/>
      <Route exact path='/user/user-detail' component={UserDetail}/>
      <Route exact path='/article/seoul-cctv' component={SeoulCCTV}/>
    </div>
  );
}

export default App;