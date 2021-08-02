import Card from '../Component/Card/Card'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import '../App.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    item: {
        marginTop: '5%',
        width:'100%',
        display: 'flex',
        padding: '3px',
    },
 

}));

function Personality() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="card-wrap">
                <div className={classes.item}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>

            </div>



        </div>
    );
}

export default Personality;
