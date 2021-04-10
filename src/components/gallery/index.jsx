import React, { useEffect, useState } from 'react'
import Gallery from 'react-grid-gallery';
import { useSelector } from 'react-redux';
import { start_page_loader, stop_page_loader } from '../../lib/global';
import { getGalleryImages } from '../../services/service';
import CustomDataLoader from '../loader/PageLoader';
import PaginationIndicator from '../pagination/paginationIndicator';

const GalleryComponent = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const mobileView = useSelector(state=>state.store.isMobile)

    /*eslint-disable */
    useEffect(()=>{
        getData()
    },[])

    useEffect(() => {
       getData(page)
    },[page])
    /*eslint-enable */

    const getData = (pageCount) => {
        getGalleryImages(pageCount).then((res)=>{
            if(res && res.data){
                // console.log('res.data', res.data)
                const result = res.data.map((item)=>({
                    src: item.urls.regular,
                    thumbnail: item.urls.thumb,
                    thumbnailWidth: 320,
                    thumbnailHeight: 212
            }))
                if(page){
                    setData(prev=>[...prev, ...result])
                }
                if(page === 1){
                    setPage(p=>p+1)
                }
                if(!mobileView){
                    if(page < 5){
                        setPage(p=>p+1)
                    }
                }
                stop_page_loader()
            }
        }).catch(error=>{
            stop_page_loader()
            console.error(error)
        })
    }
    return (
        <div id="gallery_comp" className="gallery_comp">
            <PaginationIndicator
                id="home-body"
                pageEventHandler={()=>{
                    // console.log('pageEventHandler')
                    if(page > 1){
                        start_page_loader()
                        setPage(p=>p+1)
                    }
                }}
            />
            <Gallery 
                images={data}
            ></Gallery>
            <br/>
            <CustomDataLoader />
        </div>
    )
}

export default GalleryComponent
