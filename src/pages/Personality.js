import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import One from '../Component/Personality/One';
import Square from '../Component/Personality/Square';
import Triangle from '../Component/Personality/Triangle';
import Footer from '../Component/Footer/Footer';
import '../App.css'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5%',
        textAlign: 'center',
        
    },
    item: {
        textAlign: 'left',
    },
  


}));

function Personality() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.item}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <One />
                    </Grid>
                    <Grid item xs={12}>
                        <Triangle />
                    </Grid>
                    <Grid item xs={12}>
                    <Square />
                    </Grid>
                </Grid>
                </div>
                <Footer/>              
        
                 
                </Container>

            </div >


    );
}

export default Personality;
