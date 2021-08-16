import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import One from '../Component/Personality/One';
import OneData from '../Component/Personality/OneData'
import Square from '../Component/Personality/Square';
import SquareData from '../Component/Personality/SquareData'
import Triangle from '../Component/Personality/Triangle';
import TriangleData from '../Component/Personality/TriangleData'
import Footer from '../Component/Footer/Footer';
import '../App.css'



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3%',
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
                <h1 align='center'>당신은 어떤 사람인가요?</h1>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>  
                            <One/>                          
                        </Grid>
                        <Grid itex xs={8}>
                            <OneData/>
                        </Grid>
                        <Grid itex xs={8}>
                            <SquareData/>
                        </Grid>
                        <Grid item xs={4}>
                            <Square/>
                            </Grid>
                        <Grid item xs={4}>
                            <Triangle/>
                        </Grid>
                        <Grid itex xs={8}>
                            <Container>
                            <TriangleData/>
                            </Container>
                        </Grid>
                     
                    </Grid>
                </div>
                <Footer />
            </Container>

        </div >


    );
}

export default Personality;
