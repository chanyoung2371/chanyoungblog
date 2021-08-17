import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import One from '../Component/Personality/One';
import OneData from '../Component/Personality/OneData'
import Square from '../Component/Personality/Square';
import SquareData from '../Component/Personality/SquareData'
import Triangle from '../Component/Personality/Triangle';
import TriangleData from '../Component/Personality/TriangleData'
import Footer from '../Component/Footer/Footer'
import '../App.css'



const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3%',
        textAlign: 'center',

    },
    item: {
        textAlign: 'left',
    },
    mobile: {
        display: 'none',
    },
    datamobile: {
        marginLeft: '18%',
    },
 

}));

function Personality() {
    const [color, setColor] = useState('black')
    const classes = useStyles();
    const isMobile = useMediaQuery("(max-width:600px)");
    return (
        <div className={classes.root}>
            <Container>
                <h1> 나의 성격</h1>
                <div className={classes.item}>
                    <Grid container spacing={3}>
                        <Grid className={isMobile ? classes.mobile : classes.grid} item xs={4}>
                            <One />
                        </Grid>
                        <Grid className={isMobile ? classes.datamobile: classes.data} item xs={8}>
                            <OneData />
                        </Grid>
                        <Grid className={isMobile ? classes.datamobile: classes.data} item xs={8}>
                            <SquareData />
                        </Grid>
                        <Grid className={isMobile ? classes.mobile : classes.grid} item xs={4}>
                            <Square />
                        </Grid>
                        <Grid className={isMobile ? classes.mobile : classes.grid} item xs={4}>
                            <Triangle />
                        </Grid>
                        <Grid className={isMobile ? classes.datamobile: classes.data} item xs={8}>
                            <TriangleData />
                        </Grid>



                    </Grid>
                </div>
                <Footer />
            </Container>

        </div >


    );
}

export default Personality;
