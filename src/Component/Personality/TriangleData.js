import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: '1px solid black',
        marginTop: '10%',
       
    },
}));


function TriangleData() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>긍정적</h1>
            <p> 
                나에게 시련이 왔을 때 긍정적으로 생각하여 해결하려하는 성향이 있다.
                나는 긍정적인 마음으로 볼 때 부정적으로 문제를 바라봤을 때 보다 마음의 여유가 생기고
                해결할 수 있는 힘이 생긴다. 가끔은 결심이 행동으로 이어지지 않아 문제가 될 때도 있지만
                오히려 그것이 한 번 더 재고할 수 있는 시간을 주어 더 나은 결과를 가져 올 때가 많다.
                

                


                
            </p>
        </div>
    )
}

export default TriangleData
