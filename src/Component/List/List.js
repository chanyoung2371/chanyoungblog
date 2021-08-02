import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Block } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({

    root: {
        width: '50%',
        float: 'right',
        marginTop: '8%',
      
        
    },
    ul: {

    },
    li: {
        marginBottom: '6%',
        padding: '20px 25px 17px 25px',
        display: 'block',
        position: 'relative',
        backgroundColor: '#ded1c1',
        opacity: '0.8',
        border: '1px solid #9e9999',
        listStyle: 'none'
    },
 
}));


function List() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
              <ul className={classes.ul}>
                <li className={classes.li}>
                    안녕하세요.
                </li>
                <li className={classes.li}>
                    반갑습니다.
                </li>
                <li className={classes.li}>
                    다시 만나요.
                </li>
               
           </ul>
        </div>
    )
}

export default List
