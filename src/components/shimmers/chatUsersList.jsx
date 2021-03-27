import React from 'react'
import Shimmer from './shimmer'

const ChatUsersListShimmer = () => {
    return (
        <React.Fragment>
            <div className="chat__cont__shimmer container-fluid">
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
                <div className="chat_shimmer_tile d-flex px-3">
                    <Shimmer className="shimmer__ prof" variant="circle" width="60px" height="60px" />   
                    <div className="mx-3">
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(80vw - 60px)" height="10px" />
                        <Shimmer className="shimmer__ line" variant="rect" width="calc(70vw - 60px)" height="10px" />
                    </div>
                </div>
            </div>
            <style jsx="true">{`
                .chat__cont__shimmer{

                }
                .chat_shimmer_tile{
                    background-color: rgb(28, 35, 50);
                    border-radius: 6px;
                    padding: 13px 0px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    transition: scale 1s ease 0s;
                    flex: 1 1 0%;
                    height: 88px;
                }
                .shimmer__{
                    background-color: #2f3b54;
                }
                .shimmer__.prof{
                    min-width: 60px;
                }
                .shimmer__.line{
                    margin: 4px 0 10px 0;
                    border-radius: 6px;
                }
            `}</style>
        </React.Fragment>
    )
}

export default ChatUsersListShimmer
