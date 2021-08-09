import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
            width: '100%',
            border: '1px solid black',
            marginTop: '10%',
           
            
        
    },
}));

function OneData() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>호기심</h1>
            <p> 어릴 때부터 호기심이 많았던 나는 궁금한 것이 있으면 잠을 못 이루는 경우도 많았고,
                기필코 찾아내고야 하는 성향도 강하여 다른 일을 하지 못하고 오로지 궁금증을 해결하려 하여 
                일을 그르친 적도 있었다. 하지만 호기심으로 쌓은 지식으로 인하여 친구를 사귀거나 새로운 사람들을 만날 때 
                이야기를 자연스럽게 할 수 있었고, 검색하는 습관이 쌓여 현재 전공을 공부할 때 이점이 굉장히 많다.
                호기심이 많은 것은 나에게 굉장히 긍정적인 성격이라 생각한다.
                
            </p>
        </div>
    )
}

export default OneData
