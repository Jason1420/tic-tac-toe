import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import './Login.scss'
import { useSelector, useDispatch } from "react-redux";
import { login, usernameInput, passwordInput, loginFail } from "./actions/LoginAction";
import axios from 'axios'



const Login = () => {

    /*------------Declare state of modal--------*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /*------------Declare for REDUX--------*/
    const username = useSelector(state => state.login.username);
    const password = useSelector(state => state.login.password);
    const loggedIn = useSelector(state => state.login.loggedIn);

    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            const url = `http://localhost:8888/login?username=${username}&password=${password}`;
            const res = await axios.post(url)
            const action = login();
            console.log(res);
            dispatch(action);
        } catch (error) {
            alert('Wrong username or password!!')
            const action = loginFail();
            dispatch(action);
            handleClose();
        }

        handleClose();
    }
    const handleOnChangeUsername = (username) => {
        const action = usernameInput(username);
        dispatch(action);
    }
    const handleOnChangePassword = (password) => {
        const action = passwordInput(password);
        dispatch(action);
    }

    /*------------Render---------*/
    return (
        <div>
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
                        <input type='text' value={username} placeholder='Enter username'
                            onChange={(event) => handleOnChangeUsername(event.target.value)} />
                    </div>
                    <div className='inputs'>
                        <label>Password</label>
                        <input type='password' value={password} placeholder='Enter password'
                            onChange={(event) => handleOnChangePassword(event.target.value)} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}
export default Login;