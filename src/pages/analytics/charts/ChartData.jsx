import React, { useEffect, useState } from 'react'
import ColumnChart from '../../../components/charts/ColumnChart'
import { startLoader, stopLoader } from '../../../lib/global';
import { getGraphDataApi } from '../../../services/analytics';

/**
 * @description component to show chart for each category
 * @author jagannath
 * @date 13/04/2021
 * @param eventType: String - evnet type - pageView|videoPlay|clicks|... 
 * @param categoryTitle: String - categoryTitle - Page Views
 * @memberof AnalyticsPage
 */
const ChartData = (props) => {
    console.log('props', props)
    const {eventType, categoryTitle} = props;
    const [series, setSeries] = useState([])

    const [options, setOptions] = useState({
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'],
        },
        yaxis: {
          title: {
            text: categoryTitle + " Count"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: (val) => {
                
              return `${val}`
            }
          }
        }
      })

    useEffect(()=>{
        startLoader()
        const query = {
            eventType,
            filterBy: "week"
        }
        getGraphDataApi(query)
            .then((res)=>{
                if(res && res.data && res.data.data){
                    setSeries(res.data.data?.series)
                    setOptions(prev=>({
                        ...prev,
                        xaxis: {
                            ...prev.xaxis,
                            categories: res.data.data?.categories
                        },
                        yaxis: {
                            ...prev.yaxis,
                            title: {
                                text: categoryTitle + " Count"
                            }
                        }
                    }))
                }
                stopLoader()
            }).catch(error=>{
                console.error('error', error);
                stopLoader()
            })
    },[eventType])

    return (
        <div>
            <ColumnChart options={options} series={series} />
        </div>
    )
}

export default ChartData
