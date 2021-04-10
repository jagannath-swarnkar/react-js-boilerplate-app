import { 
    Button,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle, 
    Slide 
} from '@material-ui/core';
import React from 'react';
import TextInput from '../formControl/textInput';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

/** inital state for the local react state */
const initialState = {
    title: '',
    alt: '',
    width:'',
    height: '',
    open: false,
    src: null,
    croppedImageUrl: '',
    crop: {
       unit: '%',
       height: '60',
       width: '56',
       x: 25,
       y: 10
     },
    loading: false,
    image: '',
    action: {
        title: false,
        alt: false,
        width: true,
        height: true
    }
}
/**
 * @description this is an Imgage cropper dialog
 * it crops the image and upload to cloudinary
 * @author Jagannath
 * @method openDialog call this method to open dialog
 * @date 2020-11-16
 * @class ImageCropperDialog
 * @returns String: it returns uploaded image url 
 */
class ImageCropperDialog extends React.Component  {
    constructor(props) {
        super(props)
        this.state = initialState;
    }

    /**
     * @description method to trigger the dialog with file input
     * it is triggering from parent component by accessing this method 
     * from this (child) component
     * @author Jagannath
     * @date 2020-11-16
     * @param e file input event
     */
    openDialog = (e, config={
        width: null, // number
        height: null, // number
        title: false, // boolean,
        alt: false, // boolean,
        crop: {} // object
    }) => {
        // console.log(config)
        this.onSelectFile(e);
        this.setState({width: config.width});
        this.setState({height: config.height});
        if(config.title || config.alt){
            const action = {...this.state.action};
            action['title'] = config.title;
            action['alt'] = config.alt;
            this.setState({action})
        }
        if(config.crop){
            this.setState({crop: config.crop})
        }
        this.setState({open:true})
    }

    /**
     * @description getting cropped/uncropped base64 encoded image data and 
     * uploading to cloudinary
     * @author Jagannath
     * @date 2020-11-16
     * @param file base64 string
     */
    uploadImage = async(file, folder="") => {
        const data = new FormData();
        data.append('file', file)
        data.append('upload_preset', `testImage`)
        data.append('folder','glanceAdmin')
        if(this.state.title) data.append('public_id', this.state.title)
        const res = await fetch("https://api.cloudinary.com/v1_1/deu6tf1vv/image/upload",
            {
                method: 'POST',
                body: data,
            }
        );
        const result = await res.json()
        return result;
    }
    
    /**
     * @description method to read input file data for cropper
     * @author Jagannath
     * @date 2020-11-16
     * @param e file input event
     */
    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener('load', () =>
            this.setState({ src: reader.result })
          );
          reader.readAsDataURL(e.target.files[0]);
        }
      };


    /**
     * @description method to closing dialog on submit/ cancel the cropper dialog
     * @author Jagannath
     * @date 2020-11-16
     * @param res
     */
    handleClose = async (res) => {
        if(res){            
            const image = await this.uploadImage(
                this.state.croppedImageUrl 
                ? this.state.croppedImageUrl 
                : this.state.src
            );
            await this.props.getImage(image.secure_url);
            this.setState(initialState);
        }else{
            this.setState(initialState);
        }
    }

    /**
     * @description method trigger while changing cropper size
     * updting state with cropped ratios
     * @author Jagannath
     * @date 2020-11-16
     * @param crop cropped size & ratios
     * @param percentCrop percentCrop
     */
    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({ crop , height: crop.height, width: crop.width});
        // console.log(crop)
      };


    /**
     * @description set image for cropper once image load
     * from the base64 string (from input file event)
     * @author Jagannath
     * @date 2020-11-16
     * @param image loaded image string
     */
    onImageLoaded = image => {
        this.imageRef = image
      };

    /**
     * @description method trigger while cropper stop
     * @author Jagannath
     * @date 2020-11-16
     * @param crop cropped ratio & sizes
     */
    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    /**
     * @description method to update cropped base64 string to state
     * @author Jagannath
     * @date 2020-11-16
     * @param crop cropped ratio and size
     */
    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
          const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            crop,
            'newFile.jpeg'
          );
          this.setState({ croppedImageUrl });
        //   console.log(croppedImageUrl)
        }
      }
    
      /**
       * @description method to convert src with cropped size and rato
       * it convert it into base64 string or blob url
       * @author Jagannath
       * @date 2020-11-16
       * @param image cropper image refrence
       * @param crop cropped ratio and size
       * @param fileName file name
       * @return base64 string
       */
      getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );

        /** As Base64 string --------- */
        return canvas.toDataURL('image/jpeg');
    

        /** as blob----------- */
        // return new Promise((resolve, reject) => {
        //   canvas.toBlob(blob => {
        //     if (!blob) {
        //       //reject(new Error('Canvas is empty'));
        //       console.error('Canvas is empty');
        //       return;
        //     }
        //     blob.name = fileName;
        //     window.URL.revokeObjectURL(this.fileUrl);
        //     this.fileUrl = window.URL.createObjectURL(blob);
        //     resolve(this.fileUrl);
        //   }, 'image/jpeg');
        // });
      }

    render () {
        const {
            open,
            src, crop,
            height,
            width
        } = this.state;
        const {
            alt, title
        } = this.state.action;
        return (
            <React.Fragment>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    fullWidth
                    onClose={()=>this.handleClose(0)}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle 
                        id="alert-dialog-slide-title" 
                        className="text-center header_color bold white">
                        <span className="bold h3">
                            {'Image Cropper'}
                        </span>
                    </DialogTitle>
                    <DialogContent>
                        <div className="col-12 row">
                            <div className="col-6 pb-3">
                                <label className="input-label col-md-12 text-small bold p-0 m-0">Width:</label>
                                <TextInput 
                                    placeholder="Image Width" 
                                    type="number"
                                    disabled
                                    value={width || ''}
                                    onClick={(e)=>{this.setState({width: e.target.value})}}
                                    className="form-control col-md-12" />
                            </div>
                            <div className="col-6 pb-2">
                                <label className="input-label col-md-12 text-small bold p-0 m-0">Height:</label>
                                <TextInput 
                                    placeholder="Image Height" 
                                    type="number"
                                    disabled
                                    value={height || ''}
                                    onClick={(e)=>{this.setState({height: e.target.value})}}
                                    className="form-control col-md-12" />
                            </div>
                            {
                                title ? 
                                <div className="col-md-12 row py-2">
                                    <label className="input-label col-md-3 text-small bold">Image Title:</label>
                                    <TextInput 
                                        placeholder="Image Title" 
                                        onClick={(e)=>{this.setState({title: e.target.value})}}
                                        className="form-control col-md-8" />
                                </div>
                                :<></>
                            }
                            {
                                alt ? 
                                <div className="col-md-12 row py-2">
                                    <label className="input-label col-md-3 text-small bold">Alt Title:</label>
                                    <TextInput 
                                        placeholder="Image Alt title" 
                                        onClick={(e)=>{this.setState({alt: e.target.value})}}
                                        className="form-control col-md-8" />
                                </div>
                                :<></>
                            }
                        </div>
                    </DialogContent>

                    <DialogContent className="cropper">
                        {src && (
                            <ReactCrop
                                src={src}
                                crop={crop}
                                ruleOfThirds
                                onImageLoaded={this.onImageLoaded}
                                onComplete={this.onCropComplete}
                                onChange={this.onCropChange}
                            />
                        )}
                    </DialogContent>
                    <DialogActions className="d-flex justify-content-center">
                        <Button
                            onClick={()=>this.handleClose()} 
                            className="cancel-btn white dialog-btn">
                            Cancel
                        </Button>
                        <Button onClick={()=>this.handleClose(1)} className="white header_color dialog-btn">
                            { 'Submit'}
                        </Button>
                    </DialogActions>
                    {
                        this.state.image?
                        <img src={this.state.image} alt="uploaded image" width="200px" height="200px" />
                        : <></>
                    }
                </Dialog>
            </React.Fragment>
        )
    }
}

export default ImageCropperDialog;
