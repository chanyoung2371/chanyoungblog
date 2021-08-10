import React from 'react'
import TenBox from '../Future/TenBox'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TenList from '../Future/TenList'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({

    root: {
      
    },
    font: {
        marginBottom:'5%',
    }
  

}));

function Ten() {
    const classes = useStyles();
    return (
        <div className= {classes.root}>
            <Container>
                <h1 className={classes.font}align='center'>10년 후 내 모습: 사장님</h1>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                    <h4 align='center'>어떻게 살고 있을까?</h4>
                        <TenList/>      
                    </Grid>
                    <Grid item xs={5}>
                    <TenBox />
                     </Grid>                                                             
            </Grid>
            </Container>
        </div>
    )
}

export default Ten
