import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Axios from'axios';
import {useDispatch} from 'react-redux';
import { signupUser} from '../_actions/user_action';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';



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

function Signuppage(props) {
    const dispatch = useDispatch()
    const [ID, setID] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Passwordcheck, setPasswordcheck] = useState("")
    const onIDHandler = (event) => {
        setID(event.currentTarget.value) //글씨 칠 수 있게 
    }
    const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onPasswordcheckHandler = (event) =>{
        setPasswordcheck(event.currentTarget.value)
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault(); //리프레쉬 방지 .
        if(Password !== Passwordcheck){
            return alert('비밀번호가 같지 않습니다.')
        }
        let body={
            id: ID,
            password: Password,
            name:Name
        }   
        dispatch(signupUser(body))
        //Axios.post('/api/user.login') //Axios 를 사용하여 post메소드 이용하여 서버에 보내기
        .then(response => {
        if(response.payload.success){
            props.history.push("/login")
        }else{
            alert("Faild to sign up")
        }
        })
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <label>ID</label>
                <input type="id" value={ID} onChange={onIDHandler} />

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Passwordcheck</label>
                <input type="password" value={Passwordcheck} onChange={onPasswordcheckHandler} />
                <button className={classes.button}>
                    Sign UP!
                </button>

            </form>



        </div>

    )
}

export default Signuppage
