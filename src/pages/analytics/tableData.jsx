import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TablePagination } from '@material-ui/core';
import useTheme from '../../hooks/useTheme';


// const rows = glanceData

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

export default function CustomizedTables(props) {
  const classes = useStyles();
  const [theme] = useTheme()
  const {tableData = [], columns=[]} = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
// console.log(columns, tableData)

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderComponent = (data, value, index) => {
    // console.log('data', data)
    if(data.index){
      return index+1
    }
    if (typeof value === "undefined"){
        return "N/A"
    }

    if(data.id === 'completed'){
        return String(value)
    }
    if(data.component){
      switch (typeof data.component){
          case "function":
            return data.component?.(value)
        default:
            return data.component
      }
    }
    return value
      
  }

  return (
    <React.Fragment>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            {tableData?.length ?<></>:<caption className="larger text-center">No Data Found!</caption>}
            <TableHead>
                <TableRow>
                {columns.map((column, index) => (
                    <TableCell
                    style={{
                      backgroundColor: theme.headerColor,
                      color: "#fff",
                      minWidth: column.minWidth,
                      zIndex: 0
                    }}
                    key={index}
                    align={column.align}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code || rowIndex}>
                    {columns.map((column, index) => {
                        const value = row[column.id];
                        return (
                          <TableCell 
                            key={index}
                            style={{color: theme.textColor}}
                            align={column.align || "left"}>
                            <>{renderComponent(column, value, rowIndex)}</>
                          </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        {tableData?.length ?
          <TablePagination
            rowsPerPageOptions={[10, 20, 100]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            style={{color: theme.textColor}}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            placeholder="No Data Found!"
        />:<></>}
        
    </React.Fragment>
  );
}
