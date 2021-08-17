import React from 'react'
import Box from '../Future/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '../Future/List'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    root: {
        display:'flex'
    },
    mobile:{
        display: 'block',
    },
    font: {
        marginBottom: '5%',
    },
    box:{
        width: '400px',
    },
    list:{
        width: '400px',
    },
    listmobile:{
      marginTop:'25%'  
    }

}));

function Five() {
    const classes = useStyles();
    const isMobile = useMediaQuery("(max-width:799px)");
    const Mobile = useMediaQuery("(max-width:820px)");
    return (
        <div>
            <h1 className={classes.font} align='center'>5년 후 내 모습: 회사원</h1>
            <Container className={isMobile ? classes.mobile: classes.root}>
                
                <div className={classes.box}>
                    <Box />
                </div>
                <div className={Mobile ? classes.listmobile : classes.list}>
                    <h4 align='center'>어떻게 살고 있을까?</h4>
                    <List />
                </div>
            </Container>
        </div>
    )
}

export default Five
