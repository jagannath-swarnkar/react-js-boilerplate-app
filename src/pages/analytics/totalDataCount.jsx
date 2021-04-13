import React, { useEffect, useState } from 'react'
import useTheme from '../../hooks/useTheme'
import { getTotalAnalyticsApi } from '../../services/analytics';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import PageviewIcon from '@material-ui/icons/Pageview';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

/**
 * @description Component to show tatal analytics count in top cards
 * @author jagannath
 * @date 13/04/2021
 * @memberof AnalyticsPage
 */
const TotalDataCount = (props) => {
    const [theme] = useTheme();
    const [data, setData] = useState({});

    useEffect(()=>{
        getTotalAnalyticsApi()
            .then(res=>{
                if(res && res.data && res.data.data){
                    setData(res.data.data)
                }
            }).catch(error=>{
                console.error(error);
            })
    },[])

    const cardStyle = {
        backgroundColor: theme.card.bgColor,
        color: theme.textColor,
        boxShadow: theme.card.boxShadow
    }

    
    return (
        <div className="col-12 header_cards p-0 row">
            {Object.keys(data).map((item,index)=>{
                let event = analyticStaticData?.(item)
                return (
                    <div 
                        onClick={()=>props.changeCategory?.(event.eventType)}
                        key={index} 
                        style={{
                            minWidth: "170px",
                            margin: "0px 20px",
                            cursor: "pointer"
                        }}>
                        
                        <div 
                            style={cardStyle} 
                            className="card__item info-box rounded col-12 d-flex flex-column">
                            <b className="col-12 mb-2 p-0 mt-1">{event.title}</b>
                            {event.eventType === props.eventType ? <CheckCircleIcon className="tab-selected"/>:<></>}
                            <div className="col-12 row justify-content-between align-items-center p-0 m-auto">
                                <div className=" p-0">
                                    {event.icon}
                                </div>
                                <h3 className="m-auto">{data[item]}</h3>
                            </div>
                        
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const analyticStaticData = (item) => {
    switch(item){
        case "clickCount":
            return {
                title: "Clicks",
                eventType: "click",
                icon: <AssessmentIcon style={iconStyle} fontSize="large" />
            }
        case "downloadCount":
            return {
                title: "Sticker Downloads",
                eventType: "download",
                icon: <SystemUpdateAltIcon style={iconStyle} fontSize="large" />
            }
        case "hoverCount":
            return {
                title: "Hover Count",
                eventType: "hover",
                icon: <TouchAppIcon style={iconStyle} fontSize="large" />
            }
        case "pageViewCount":
            return {
                title: "Page Views",
                eventType: "pageView",
                icon: <PageviewIcon style={iconStyle} fontSize="large" />
            }
        case "videoPlayCount":
            return {
                title: "Video Play",
                eventType: "videoPlay",
                icon: <PlayCircleOutlineIcon style={iconStyle} fontSize="large" />
            }
        
        default:
            return {}
    }
}
const iconStyle = {
    background: "red",
    color: "white",
    height: "60px",
    width: "60px",
    padding: "10px",
    borderRadius: "6px",
    boxShadow: "0px 2px 7px 2px #ff000082",
}
export default TotalDataCount;
