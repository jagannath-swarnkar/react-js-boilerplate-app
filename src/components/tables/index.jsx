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
import moment from 'moment';


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });


/**
 * @description component to show analytics data in table for each category
 * @author jagannath
 * @date 13/04/2021
 * @param eventType: String - evnet type - pageView|videoPlay|clicks|... 
 * @param categoryTitle: String - categoryTitle - Page Views
 * @memberof AnalyticsPage
 */
const CustomizedTables = (props) => {
  const classes = useStyles();
  const [theme] = useTheme()
  const {tableData = [], columns=[], totalCount=0} = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    props.handlePageChange?.(newPage*10, rowsPerPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    props.handlePageChange?.(0, event.target.value)
    setPage(0);
  };

  const renderComponent = (data, value, index) => {
    if(data.index || data.type === "index"){
      return page*10 + index+1 
    }
    if (typeof value === "undefined"){
        return "N/A"
    }

    if(data.type === "date"){
        return moment(value).format('dddd, DD MMM, yyyy, hh:mm A')
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
                {tableData.map((row, rowIndex) => {
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
            count={totalCount}
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


export default CustomizedTables;