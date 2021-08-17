import React from 'react'
import Box from '../Component/Future/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '../Component/Future/List'
import Tab from '../Component/Future/Tab'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: '2%',
    },
    font: {
        marginBottom:'5%',
    }
    
  

}));

function Future() {
    const classes = useStyles();
    return (
        <div className= {classes.root}>
            <Container>
             <Tab/>
            </Container>
        </div>
    )
}

export default Future
