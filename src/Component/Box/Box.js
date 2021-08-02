import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Img from '../Img/Img'
import List from '../List/List'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '800px',
        flexGrow: '1',
        background: 'white',
        background: 'linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.1))',
        zIndex: '1'
    },

}));
function Box() {
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.root}>
                <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Img/>
                </Grid>
                <Grid item xs={6}>
                    <List />
                </Grid>
                </Grid>


            </div>
        </Container>
    )
}

export default Box
