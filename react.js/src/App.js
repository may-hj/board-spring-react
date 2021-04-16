import './App.css';
import ArticleDetail from './board/component/ArticleDetail'
import ArticleList from './board/component/ArticleList'
import ArticleUpdate from './board/component/ArticleUpdate'
import ArticleWrite from './board/component/ArticleWrite'
import Login from './user/component/Login'
import Signup from './user/component/Signup'
import UserDetail from './user/component/UserDetail'

function App() {
  return (
    <div className="App">
      <Route exact path='/board/article-detail' component={ArticleDetail}></Route>
      <Route exact path='/board/article-list' component={ArticleList}></Route>
      <Route exact path='/board/article-update' component={ArticleUpdate}></Route>
      <Route exact path='/board/article-write' component={ArticleWrite}></Route>
      <Route exact path='/user/login' component={Login}></Route>
      <Route exact path='/user/signup' component={Signup}></Route>
      <Route exact path='/user/user-detail' component={UserDetail}></Route>
    </div>
  );
}

export default App;
