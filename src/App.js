import './App.scss';
import Game from './Game';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">

      <header className="App-header">
        <div className='login-modal'>
          <Button variant="primary" onClick={handleShow}>
            Login
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='inputs'>
                <label>Username</label>
                <input type='text' />
              </div>
              <div className='inputs'>
                <label>Password</label>
                <input type='password' />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <hr />
        <Game />
      </header >
    </div >
  );
}

export default App;
