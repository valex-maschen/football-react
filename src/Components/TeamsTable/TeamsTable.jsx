import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Routes } from '../Navbar/Navbar';
import Utils from '../../utils/Utils';


const useStyles = makeStyles({
    container: {
    display: 'flex',
    justifyContent: 'center',
    },
    table: {
    width: '80%',
    },
  });

const TeamsTable = ({ rows, coloums }) => {

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
              <TableCell align="left">
              <svg>
              <use xlinkHref={row.teamFlag}>
              </use>
              </svg>
              </TableCell>
              <TableCell align="left">
   
              <NavLink to={Utils.generateUri(Routes.MATCH, { id: row.id })} exact> {row.teamCountry} </NavLink>
              
              </TableCell>
              <TableCell align="left">{row.teamFoundDate}</TableCell>
              <TableCell align="left">{row.teamColor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default TeamsTable;