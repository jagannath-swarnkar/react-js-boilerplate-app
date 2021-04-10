import React, { useEffect, useState } from 'react'
import DateRangePicker from '../../components/datepicker/dateRangePicker'
import Layout from '../../components/Layout'
import SelectDropdown from '../../components/select/select'
import { viewAnalyticsData } from '../../fixtures/viewAnalyticsData'
import useTheme from '../../hooks/useTheme'
import CustomizedTables from './tableData'

const AnalyticsPage = () => {
    const [theme] = useTheme();
    const [tab, setTab] = useState("Views")
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
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
            {id: 1, label:"Views", value: "Views"},
            {id: 2, label:"Likes", value: "Likes"},
            {id: 3, label:"Clicks", value: "Clicks"},
            {id: 4, label:"Visits", value: "Visits"},
            {id: 5, label:"Comments", value: "Comments"},
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
            case "Views":
                setTableData(viewAnalyticsData);
                setColumns([
                    // {label: "SL No.", index: true},
                    {id: "id", label:"User Id",align:"left"},
                    {id: "createdAt", label:"Viewed On",align:"left", type: 'date'},
                    {id: "viewedBy", label:"Viewed By",align:"left"},
                    {id: "city", label:"city",align:"left"},
                    {id: "country", label:"country",align:"left"},
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

    return (
        <Layout>
            <div className="col-12 container py-3">
                {/* <div className="col-12 header_cards p-0 row">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div style={cardStyle} className="card__item info-box"></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div style={cardStyle} className="card__item info-box"></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div style={cardStyle} className="card__item info-box"></div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div style={cardStyle} className="card__item info-box"></div>
                    </div>
                </div> */}

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
                        <CustomizedTables
                            columns={columns}
                            tableData={tableData} />
                    </div>
                </div>



            </div>
        </Layout>
    )
}

export default AnalyticsPage
