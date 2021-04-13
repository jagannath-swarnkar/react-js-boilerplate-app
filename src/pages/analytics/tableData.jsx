import React, { useEffect, useState } from 'react';
import CustomizedTables from '../../components/tables';
import { startLoader, stopLoader } from '../../lib/global';
import { getAnalyticDataApi } from '../../services/analytics';



/**
 * @description component to show analytics data in table for each category
 * @author jagannath
 * @date 13/04/2021
 * @param eventType: String - evnet type - pageView|videoPlay|clicks|... 
 * @param categoryTitle: String - categoryTitle - Page Views
 * @memberof AnalyticsPage
 */
const TableData = (props) => {
  const {eventType="pageView", date={}} = props;
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [columns, setColumns] = useState([]);

  useEffect(()=>{
    getTableAnalyticsData();
    handleSetColumns()
  },[eventType])

  useEffect(()=>{
    console.log('---->', date)
    if(date.start || date.end){
      getTableAnalyticsData(0,10, date.start, date.end)
    }
  },[date])

  const getTableAnalyticsData = (
    skip=0, 
    limit=10,
    startDate,
    endDate
    ) => {
    startLoader()
    const query = {
      eventType,
      limit,
      skip,
      startDate,
      endDate
    }
    getAnalyticDataApi(query)
    .then(res=>{
      if(res && res.data && res.data.data){
        console.log('res.data.data', res.data.data)
        setData(res.data.data?.data)
        setTotalCount(res.data.data?.totalCount)
      }else{
        setData([])
        setTotalCount(0)
      }
      stopLoader()
    }).catch(error=>{
      console.error(error);
      stopLoader()
    })
  }

  const handleSetColumns = () => {
    switch (eventType){
      case "pageView":
          setColumns([
              {id: "userId", label: "SL No.", type: "index"},
              {id: "timestamp", label:"Viewed On",align:"left", type: 'date'},
              {id: "city", label:"City",align:"left"},
              {id: "state", label:"State",align:"left"},
              {id: "country", label:"Country",align:"left"},
              {id: "userId", label: "userId", align: "left"},
          ])
          break;
      case "click":
        setColumns([
            {id: "timestamp", label:"Clicked On",align:"left", type: 'date'},
            {id: "city", label:"City",align:"left"},
            {id: "state", label:"State",align:"left"},
            {id: "country", label:"Country",align:"left"},
            {id: "userId", label: "userId", align: "left"},
          ])
        break;
      case "hover":
        setColumns([
            {id: "timestamp", label:"Hovered On",align:"left", type: 'date'},
            {id: "city", label:"City",align:"left"},
            {id: "state", label:"State",align:"left"},
            {id: "country", label:"Country",align:"left"},
            {id: "userId", label: "userId", align: "left"},
          ])
        break;
      case "download":
        setColumns([
            {id: "timestamp", label:"Downloaded On",align:"left", type: 'date'},
            {id: "city", label:"City",align:"left"},
            {id: "state", label:"State",align:"left"},
            {id: "country", label:"Country",align:"left"},
            {id: "userId", label: "userId", align: "left"},
          ])
        break;
      case "videoPlay":
        setColumns([
            {id: "timestamp", label:"Played On",align:"left", type: 'date'},
            {id: "city", label:"City",align:"left"},
            {id: "state", label:"State",align:"left"},
            {id: "country", label:"Country",align:"left"},
            {id: "userId", label: "userId", align: "left"},
          ])
        break;
      default:
          setData([])
          setColumns([])
          break;
    }
  }

  return (
    <React.Fragment>
        <CustomizedTables 
          tableData={data}
          columns={columns}
          totalCount={totalCount}
          handlePageChange={getTableAnalyticsData}
        ></CustomizedTables>
    </React.Fragment>
  );
}


export default TableData;