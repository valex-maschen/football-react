import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';
import Utils from '../../utils/Utils';
import { Routes } from '../Navbar/Navbar';

const useStyles = makeStyles({
    container: {
    display: 'flex',
    justifyContent: 'center',
    },
    table: {
    width: '60%',
    },
  });

const MainTable = ({ rows, coloums }) => {

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
            <TableRow key={row.name}>
              <TableCell align="left">
              <NavLink to={Utils.generateUri(Routes.TEAM, { id: row.id })} exact>
              {row.competitionName}
              </NavLink> 
                
                
                </TableCell>
              <TableCell align="left">{row.areaName}</TableCell>
              <TableCell align="left">{row.startDate}</TableCell>
              <TableCell align="left">{row.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}







export default MainTable;