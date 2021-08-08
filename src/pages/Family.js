import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Img from '../Component/Img/Img'




const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:'5%',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid black '
    },
}));


function Family() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.item}>
                    <Img/>      
                </div>

            </Container>
        </div>
    )
}

export default Family
