import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
});

function createData(name, relationship, age,) {
  return { name, relationship, age,};
}

const rows = [
  createData( '부', '아산','사업가' ),
  createData( '동생' ,'평택','사원'),
  createData('본인','아산','학생'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">관계</TableCell>
            <TableCell align="left">사는 곳</TableCell>
            <TableCell align="left">직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.relationship}</TableCell>
              <TableCell align="left">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
