import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ImageCropperDialog from '../../components/Dialogs/imageCropperDialog'
import Layout from '../../components/Layout'
import useTheme from '../../hooks/useTheme'
import { open_dialog, showToast } from '../../lib/global'
import { addNewGlanceApi, getGlanceApi } from '../../services/glance.service'
import TableData from './tableData'

const GlancePage = () => {
    const [theme] = useTheme()
    const cropperDialogRef = React.useRef();
    const [tableData, setTableData] = useState([]);
    const [totalCount, setTotalCount] = useState(0)

    useEffect(()=>{
        getGlanceData()
    },[])
    const cardStyle = {
        backgroundColor: theme.card.bgColor,
        color: theme.textColor,
        boxShadow: theme.card.boxShadow
    }

    /**
     * @description this method triggers after uploading the image
     * and received image url, it updates image url to localstorage and state
     * @author Jagannath
     * @date 2020-11-16
     * @param profilePic image url
     */
    const getProfilePic = (url) => {
        // setTableData(prev=>[{url: profilePic}, ...prev]);
        const payload = {imageUrl: url}
        addNewGlanceApi(payload).then(res=>{
            if(res && res.data){
                showToast(res.data.message, 'success');
                getGlanceData()
            }
        }).catch(error=>{
            console.error(error)
            showToast(error?.response?.data?.message || "Failed to add data", 'error')
        })
    }


    /**
     * @description this method is triggering to open image cropper
     * or image uploading dialog to change profilePic
     * @author Jagannath
     * @date 2020-11-16
     * @param e selected file event
     */
     const changeDP = (e) => {
        const config = {
            fieldTitle: "Header Text",
            crop: {
                // aspect: 9/10,
                unit: '%',
                width: 100,
                height: 100,
                // x: 25,
                // y: 10
            }
        }
        if (e) {
            return cropperDialogRef.current.openDialog(e, config)
        }
        return;
    }

    const handleAddNew = () => {
        open_dialog("ADD_GLANCE", {
            handleSubmit: handleRefresh
        },'top')
    }

    const handleRefresh = () => {
        getGlanceData()
    }

    const getGlanceData = () => {
        const list = {
            limit: 20,
            skip: 0
        }
        getGlanceApi(list).then((res)=>{
            if(res?.data?.data){
                setTableData(res?.data?.data?.data);
                setTotalCount(res?.data?.data?.totalCount)
            }
            console.log(res?.data?.data)
        }).catch(error=>{
            console.error('error', error)
        })
    }
    return (
        <Layout>
            <div className="col-12 container pt-3 h-100">
                <div style={cardStyle} className="card">
                    <div className="col-12 form-header py-2 pt-3 d-flex justify-content-end">
                        <div>
                            <input
                                accept="image/*"
                                className={"d-none"}
                                id="contained-button-file"
                                onChange={changeDP}
                                // multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button 
                                    variant="contained" 
                                    style={{
                                        backgroundColor: theme.headerBgColor,
                                        color: "white",
                                        fontWeight: 'bold'
                                    }}
                                    component="span">
                                    Upload
                                </Button>
                            </label>
                        </div>
                        <div>
                            <Button 
                                variant="contained" 
                                style={{
                                    backgroundColor: theme.headerBgColor,
                                    color: "white",
                                    fontWeight: 'bold'
                                }}
                                onClick={handleAddNew}
                                className="ml-2"
                                component="span">
                                Add New
                            </Button>
                        </div>
                    </div>
                    <hr/>
                    <div className="col-12 table_data py-3">
                        <TableData 
                            handleRefresh={handleRefresh}
                            tableData={tableData} 
                            totalCount={totalCount} />
                    </div>

                </div>
            </div>
            <ImageCropperDialog
                    ref={cropperDialogRef}
                    getImage={(url) => getProfilePic(url)} />
        </Layout>
    )
}

export default GlancePage
