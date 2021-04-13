import React from 'react'
import ReactApexChart from 'react-apexcharts';

const ColumnChart = (props) => {
    return (
        <div id="chart">
              <ReactApexChart
                options={props.options || []} 
                series={props.series || []} 
                type="bar" 
                height={350} />
        </div>
    )
}

export default ColumnChart
