import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: '1px solid black',
        marginTop: '10%',
       
            
        
    },
}));


function SquareData() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <h1>자기성찰</h1>
            <p>적어도 일주일에 한 번은 자기성찰의 시간을 갖는 것 같다.
                지난 나의 행동을 돌아보며 반성도 하고 고치기 위하여
                많은 계획들을 세우는 노력을 하며 타인이 아닌 나에게 질문을 하고
                나에게서 해답을 찾는다. 자기성찰은 살아가는 것에 있어 꼭 있어야 할 덕목이라 생각한다.
                

                
            </p>
        </div>
    )
}

export default SquareData
