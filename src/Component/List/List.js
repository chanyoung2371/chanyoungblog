import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Block } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({

    root: {
        marginTop: '10%',  
    },
    ul: {

    },
    li: {
        marginBottom: '10%',
        padding: '5%',
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
                    이름: 백찬영
                </li>
                <li className={classes.li}>
                    이메일:chanyoung2371@naver.com
                </li>
                <li className={classes.li}>
                    전화번호: 010-4793-2371
                </li>
                <li className={classes.li}>
                    좌우명: 나는 발전하는 사람이다.
                </li>
               
           </ul>
        </div>
    )
}

export default List
