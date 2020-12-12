
import React from 'react'
import Headers from '../header/headers'
import './Gallery.css';
import ImageUploadComponent from './upload/ImageUploadComponent';

const Gallery = () => {
    const [activeNav, setActiveNav] = React.useState(2);

    

    
    return (
        <>
            <Headers />
            <div className="gallery_header">
                <h3 className="mr-auto p-2 m-3">
                    Cloudinary Demo
                </h3>
                <ul className="upload d-flex">
                    <p className={`nav gallery p-2 m-3 ${activeNav === 1 && 'active'}`}
                        onClick={()=>setActiveNav(1)} >
                        Gallery
                    </p>
                    <p 
                        className={`nav upload p-2 m-3 ${activeNav === 2 && 'active'}`} 
                        onClick={()=>setActiveNav(2)} >
                        Upload
                    </p>
                </ul>
            </div>
            <div className="gallery_body">
                <div className="col-12">
                    {
                        activeNav === 2 ? 
                        <ImageUploadComponent />
                        : <div></div>
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery