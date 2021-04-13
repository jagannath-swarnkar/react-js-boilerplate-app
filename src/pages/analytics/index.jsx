import React, { useEffect, useState } from 'react'
import DateRangePicker from '../../components/datepicker/dateRangePicker'
import Layout from '../../components/Layout'
import SelectDropdown from '../../components/select/select'
import { viewAnalyticsData } from '../../fixtures/viewAnalyticsData'
import useTheme from '../../hooks/useTheme'
import ChartData from './charts/ChartData'
import TableData from './tableData'
import TotalDataCount from './totalDataCount'

const AnalyticsPage = () => {
    const [theme] = useTheme();
    const [tab, setTab] = useState("pageView")
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({id: 1, label:"Page Views", value: "pageView"});
    const [tableData, setTableData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [date, setDate] = useState({startDate: Date.now(), endDate: null})

    const cardStyle = {
        backgroundColor: theme.card.bgColor,
        color: theme.textColor,
        boxShadow: theme.card.boxShadow
    }

    useEffect(()=>{
        setCategories([
            {id: 1, label:"Page Views", value: "pageView"},
            {id: 2, label:"Clicks", value: "click"},
            {id: 3, label:"Hover", value: "hover"},
            {id: 4, label:"Sticker Downloads", value: "download"},
            {id: 5, label:"Video Play", value: "videoPlay"},
        ])
    },[])

    const handleSelectCategory = (data) => {
        setTab(data?.value || null)
        setSelectedCategory(data || null);
    }

    // Api call here a/c to category select
    useEffect(()=>{
        handleSetStateData()
    }, [tab])

    const handleSetStateData = () => {
        switch (tab){
            case "pageView":
                setTableData(viewAnalyticsData);
                setColumns([
                    {id: "timestamp", label:"Viewed On",align:"left", type: 'date'},
                    {id: "city", label:"City",align:"left"},
                    {id: "state", label:"State",align:"left"},
                    {id: "country", label:"Country",align:"left"},
                ])
                break;
            default:
                setTableData([])
                setColumns([])
                break;
        }
    }
    const handleDateChange = (value) => {
        setDate(value)
    }

    const changeCategory = (eventType) => {
        console.log('eventType', eventType)
        categories.find((item)=>{
            console.log('item', item)
            if(item.value === eventType){
                console.log('item.value', item.value)
                handleSelectCategory(item)
            }
        })
    }

    return (
        <Layout>
            <div className="col-12 container py-3">
                <TotalDataCount 
                    changeCategory={changeCategory}
                    eventType={tab}
                />
                <div style={cardStyle} className="card col-12 p-0 mt-3 pt-3 analytics__body">
                    <div className="col-12 analytics__body__header d-flex justify-content-end">
                        <SelectDropdown
                            isClearable
                            isSearchable
                            className="col-xs-6 col-md-4 col-lg-3 p-0 text-start"
                            value={selectedCategory}
                            styles={{zIndex: 1001}}
                            placeholder="select..."
                            onChange={(e)=>handleSelectCategory(e)}
                            options={categories}
                        />
                    </div>
                    <hr/>
                    <ChartData 
                        eventType={tab}
                        categoryTitle={selectedCategory?.label}
                    />
                </div>

                <div style={cardStyle} className="card col-12 p-0 mt-3 pt-3 analytics__body">
                    <div className="col-12 analytics__body__header d-flex justify-content-end">
                        <div className="pr-3 picker ml-auto">
                            <DateRangePicker 
                                value={null}
                                placeholder="MM/DD/YYYY"
                                handleDateChange={handleDateChange}
                            />
                        </div>
                        <SelectDropdown
                            isClearable
                            isSearchable
                            className="col-xs-6 col-md-4 col-lg-3 p-0 text-start"
                            value={selectedCategory}
                            styles={{zIndex: 1001}}
                            placeholder="select..."
                            onChange={(e)=>handleSelectCategory(e)}
                            options={categories}
                        />
                    </div>
                    <hr/>
                    <div className="col-12 table_data py-3">
                        <TableData
                            date={date}
                            eventType={tab}
                        />
                    </div>
                </div>



            </div>
        </Layout>
    )
}

// const categoryName = (item) => {
//     switch(item){
//         case "click":
//             return "Click Count";
//         case "download":
//             return "Sticker Downloads";
//         case "hover":
//             return "Hover Count";
//         case "pageView":
//             return "Page Views";
//         case "videoPlay":
//             return "Video Play";
//         default:
//             return ""
//     }
// }

export default AnalyticsPage
