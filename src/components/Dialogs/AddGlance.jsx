import React, { useState } from 'react'
import Input from '../input'
import Button from '../buttons'

const initialState = {
    imageUrl: "",
    headerText: "",
    ctaLink: ""
}


const AddGlance = (props) => {
    const [state, setState] = useState(initialState)

    const handleSetState = (value, field) => {
        setState(prev=>({
            ...prev,
            [field]: value
        }))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(!state.imageUrl || !state.headerText) return;

        // call api here to store data
        console.log(state);
        props?.onClose();
    }

    return (
        <React.Fragment>
            <div className="col-12 p-0 pb-3">
                <div className="col-12 dialog_header p-3 header_color text-center text-white">
                    <div className="h3 m-auto">
                        Add New
                    </div>
                </div>
                <hr className="mt-0"/>
                <div className="col-12 dialog_body">
                    <form 
                        onSubmit={handleFormSubmit}
                        className="col-12">
                        <div className="form-group row">
                            <label htmlFor="imageUrl" className="col-md-3 col-xs-12 col-form-label important">
                                Image Url:
                            </label>
                            <div className="col-md-9 col-xs-12">
                                <Input 
                                    className="form-control"
                                    id="imageUrl"
                                    value={state.imageUrl}
                                    placeholder="image url..."
                                    onChange={(e)=>handleSetState(e.target.value, 'imageUrl')}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="headerText" className="col-md-3 col-xs-12 col-form-label important">
                                Header Text:
                            </label>
                            <div className="col-md-9 col-xs-12">
                                <Input 
                                    className="form-control"
                                    id="headerText"
                                    value={state.headerText}
                                    placeholder="header text..."
                                    onChange={(e)=>handleSetState(e.target.value, "headerText")}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="ctaLink" className="col-md-3 col-xs-12 col-form-label important">
                                CTA Link:
                            </label>
                            <div className="col-md-9 col-xs-12">
                                <Input 
                                    className="form-control"
                                    id="ctaLink"
                                    value={state.ctaLink}
                                    placeholder="click to action link..."
                                    onChange={(e)=>handleSetState(e.target.value, "ctaLink")}
                                    />
                            </div>
                        </div>
                        <div className="col-12 text-center mt-3">
                            <Button
                                type="submit"
                                disabled={!state.imageUrl || !state.headerText}
                                className="col-xs-6 col-sm-5 col-md-5 mt-3"
                                id="add-glance-btn"
                                >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddGlance
