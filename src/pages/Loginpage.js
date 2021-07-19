import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Axios from'axios';
import {useDispatch} from 'react-redux';
import { loginUser} from '../_actions/user_action';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'

    },
    button: {
        marginTop: '10%',
        backgroundColor: '#fff'

    },
    
    form: {
        display: 'flex',
        flexDirection: 'column'
    }

}));

function Loginpage(props) {
    const dispatch = useDispatch()
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value) //글씨 칠 수 있게 
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault(); //리프레쉬 방지 .
        console.log('Email',Email)
        console.log('Password', Password)
        let body={
            email: Email,
            password: Password
        }
        console.log('Email',Email)
        console.log('Password', Password)
        dispatch(loginUser(body))
        //Axios.post('/api/user.login') //Axios 를 사용하여 post메소드 이용하여 서버에 보내기
        .then(response => {
            if(response.payload.loginSuccess){
                props.history.push('/')
            }else{
                alert('Error')
            }
        })
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <label>ID</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <button className={classes.button}>
                    Login
                </button>

            </form>



        </div>

    )
}

export default Loginpage
