import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import imgA from '../images/index_head.jpeg'
import '../style/Home.css'
import Box from '../Component/Box/Box'
import Paper from '../Component/Paper/Paper'
import Container from '@material-ui/core/Container'
import Footer from '../Component/Footer/Footer'

const useStyles = makeStyles((theme) => ({



    root: {
        textAlign: 'center',
        backgroundColor: 'rgb(31, 55, 94,1)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        display: 'block',
        zIndex: '2',
        color: '#FFF',
    },
    content: {
        marginTop: '25%',
        fontSize: '7vw',
        fontFamily: 'Kaushan Script, cursive',

    },
    footer: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        height: '200px',


    }




}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <h4>About</h4>
                <h1 className={classes.content}>BaekChanYoung</h1>
            </Container>
            <Container>
                <Footer className={classes.footer} />
            </Container>

        </div>

    )
}

export default Home
