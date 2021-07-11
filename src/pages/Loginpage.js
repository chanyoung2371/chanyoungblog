import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '5px 5px 5px 5px gray',
        marginLeft: '20%',
        marginRight: '20%',
        padding:'10%'
    },
    button: {
        marginTop: '15%',

    },

}));

function Loginpage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <TextField
                label="ID"
                variant="outlined"
                placeholder="아이디를 입력하세요."
                size="small"
            />
            <TextField
                type = "password"
                label="Password"
                variant="outlined"
                placeholder="비밀번호를 입력하세요."
                size="small"
            />
            <Button className={classes.button} variant="contained" color="primary">
                로그인
            </Button>

        </div>

    )
}

export default Loginpage
