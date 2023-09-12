import './App.scss';
import Game from './Game';
import Login from './Login';
import { logout } from "./actions/LoginAction";

import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
function App() {
  const loggedIn = useSelector(state => state.login.loggedIn);

  const dispatch = useDispatch();

  const handleLogout = (username) => {
    const action = logout();
    dispatch(action);
  }
  return (
    <div className="App">

      <header className="App-header">
        <div className='login-modal'>
          {!loggedIn ?
            <Login />
            :
            <Button onClick={handleLogout} >Logout</Button>
          }
        </div>
        <hr />
        {loggedIn &&
          <Game />
        }
      </header >
    </div >
  );
}

export default App;
