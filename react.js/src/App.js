import { Route } from 'react-router-dom'

import 'App.css';
import { Home } from 'common/index'
import { News, SeoulCCTV } from 'board/index'
import { Login, SignUp, UserDetail } from 'user/index'
import { ArticleDetail, ArticleList, ArticleUpdate, ArticleWrite } from 'article/index'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ Home }/>
      <Route exact path='/board/news' component={ News }/>
      <Route exact path='/article/seoul-cctv' component={ SeoulCCTV }/>
      <Route exact path='/user/login' component={ Login }/>
      <Route exact path='/user/signup' component={ SignUp }/>
      <Route exact path='/user/user-detail' component={ UserDetail }/>
      <Route exact path='/article/article-detail' component={ ArticleDetail }/>
      <Route exact path='/article/article-list' component={ ArticleList }/>
      <Route exact path='/article/article-update' component={ ArticleUpdate }/>
      <Route exact path='/article/article-write' component={ ArticleWrite }/>
    </div>
  );
}

export default App;