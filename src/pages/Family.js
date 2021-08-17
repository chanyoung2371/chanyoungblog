import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Img from '../Component/Img/Img'
import Table from '../Component/Table/Table'




const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:'5%',
        textAlign: 'center',
    },
    h1:{
        marginBottom: '5%',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        
    },
    img:{
        width:'100%',
    }
}));


function Family() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
            <h1 className={classes.h1}> 가족 관계도 </h1>
                <div className={classes.item}>
                    <Img className={classes.img}/>      
                </div>
                <div>
                    <Table/>
                </div>

            </Container>
        </div>
    )
}

export default Family
