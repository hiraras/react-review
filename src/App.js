import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Home, Hook, Context, Redux, Test } from './views';

// React Immutable 特性:数据的每次变化不会改变旧数据，而是当改变数据的操作结束后，生成新数据代替旧数据
// 保证了如果因为操作失败不会陷入"新数据得不到，旧数据回不去"的情景。

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul className={'navigation'}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/hook/1?id=Iffe'>Hook</Link></li>
          <li><Link to='/context'>Context</Link></li>
          <li><Link to='/redux'>Redux</Link></li>
          <li><Link to='/test'>Test</Link></li>
        </ul>
        <div className={'route-ctn'}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hook/:id" component={Hook} />
            <Route path="/context" component={Context} />
            <Route path="/redux" component={Redux} />
            <Route path="/test" component={Test} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
