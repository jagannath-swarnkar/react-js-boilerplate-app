import { IconButton } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import React, {useState} from 'react';

import {Image, Transformation} from 'cloudinary-react';

const ImageUploadComponent = () => {
    const [inputImage, setInputImage] = useState('');
    const [publicId, setPublicId] = useState('')
    const [folder, setFolder] = useState('freely/images')
    const [previewImage, setPreviewImage] = useState('')

    
    const fileInputHandler = (e) => {
        const file = e.target.files[0];
        console.log('file', file)
        const name = file.name.split('.')
        name.splice(-1)
        name.join('.')
        console.log('name', name)

        setPublicId(name[0])
        previewFile(file)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setPreviewImage(reader.result)
        }
    }

    const fileSubmitHandler = (e) => {
        e.preventDefault()
        if(!previewImage) return;
        uploadImage(previewImage)
    }

    const uploadImage = async(base64EncodedImage) => {
        console.log('base64EncodedImage', base64EncodedImage)
        const data = new FormData();
        data.append('file', base64EncodedImage);
        data.append('upload_preset', 'lxkkre');
        data.append("folder",folder)

        // data.append('api_key','123862278314529');
        // data.append('api_secret', 'C3higoIzQc7wWWRfN6nHzN6u6lI');
        // data.append('cloud_name', 'jagannath');

        data.append('public_id', publicId)
        const res = await fetch("https://api.cloudinary.com/v1_1/jagannath/image/upload",
            {
                method: 'POST',
                body: data,
            }
        );
        const result = await res.json();
        setPublicId(result.public_id)
        console.log('result', result)

    }

    return (
        <React.Fragment>
            <div className="col-auto">
                <input 
                    accept="image/*" 
                    className="d-none" 
                    onChange={fileInputHandler} 
                    id="icon-button-file" 
                    // value={}
                    type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
            </div>

            {
                previewImage && 
                <div className="col-12">
                    <div className="col-md-12">
                        <img 
                            src={previewImage} 
                            className="avatar-view mr-3"
                            alt="Preview" 
                            width="300px" 
                            height="300px"/>
                        {/* <img 
                            src={previewImage} 
                            // onError={(e)=>{e.target.src={previewImage}}}
                            className="avatar-view image ml-3"
                            alt="Preview" 
                            width="300px" 
                            height="300px"/> */}
                        
                    </div>
                    <button onClick={fileSubmitHandler} className="btn btn-success my-3 img_submit">
                        Submit
                    </button>

                    <div className="col-12 row">
                        <div className="col-md-4">
                            <Image
                                publicId={publicId}
                                version="1607764098" 
                                cloud_name="jagannath" 
                                className="avatar-view mr-3">
                                    <Transformation 
                                        height="100" 
                                        width="100" 
                                        crop="scale" 
                                        // effect="sepia" 
                                        radius="20" />
                            </Image>
                            <p className="text-muted col-12">scale</p>
                        </div>
                        <div className="col-md-4">
                            <Image
                                publicId={publicId}
                                version="1607764098" 
                                cloud_name="jagannath" 
                                className="avatar-view mr-3">
                                    <Transformation 
                                        height="100" 
                                        width="100" 
                                        crop="crop" 
                                        // effect="sepia" 
                                        radius="20" />
                            </Image>
                            <p className="text-muted col-12">crop</p>
                        </div>
                        <div className="col-md-4">
                            <Image
                                publicId={publicId}
                                version="1607764098" 
                                cloud_name="jagannath" 
                                className="avatar-view mr-3">
                                    <Transformation 
                                        height="100" 
                                        width="100" 
                                        crop="fill" 
                                        // effect="sepia" 
                                        radius="20" />
                            </Image>
                            <p className="text-muted col-12">fill</p>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}



export default ImageUploadComponent;