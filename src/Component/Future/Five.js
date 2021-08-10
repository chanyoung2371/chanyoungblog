import React from 'react'
import Box from '../Future/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '../Future/List'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({

    root: {
      
    },
    font: {
        marginBottom:'5%',
    }
  

}));

function Five() {
    const classes = useStyles();
    return (
        <div className= {classes.root}>
            <Container>
                <h1 className={classes.font}align='center'>5년 후 내 모습: 회사원</h1>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Box />
                    </Grid>
                    <Grid item xs={5}>
                        <h4 align='center'>어떻게 살고 있을까?</h4>
                        <List/>
                     </Grid>                                                             
            </Grid>
            </Container>
        </div>
    )
}

export default Five
