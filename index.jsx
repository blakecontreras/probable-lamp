import React from 'react';
import ReactDOM from 'react-dom';
import MyContainer from './client/myContainer.jsx';
import store from './client/app.js'

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar nabar-light navbar-fixed-top bg-faded">
          <ul className="nav navbar-nav">
            <li>
              <h2>JukeBox</h2>
            </li>
          </ul>
        </nav>
        <MyContainer store={store}/>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
