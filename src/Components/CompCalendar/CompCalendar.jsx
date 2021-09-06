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
    container: {
    display: 'flex',
    justifyContent: 'center',
    },
    table: {
    width: '60%',
    },
  });

const CompCalendar = ( {rows, coloums} ) => {

    const classes = useStyles();

    return(
        <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
                {coloums.map((coloumn) => (
                  <TableCell key={coloumn}>{coloumn}</TableCell>
                ))}
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.homeTeam}</TableCell>
                <TableCell align="left">{row.awayTeam}</TableCell>
                <TableCell align="left">{row.score.homeTeam}:{row.score.awayTeam}</TableCell>
                <TableCell align="left">{row.winner}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default CompCalendar;