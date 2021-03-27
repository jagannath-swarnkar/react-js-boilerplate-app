import React from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import './counter.css'
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from '../../redux/actionTypes';

export default function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter['counter']);
    
    const counterHandler = (res) => {
        if(res){
            dispatch({
                type: INCREMENT,
                payload: counter + 1
            })
        }else{
            dispatch({
                type: INCREMENT,
                payload: counter - 1
            })
        }
    }
    return (
        <div className="counter pt-5">
            <Button onClick={()=>counterHandler()} className="btn-counter" variant="contained" color="secondary">
                <RemoveIcon />
            </Button>

            <Button className="mx-3 Bold px-5 counter-strip" variant="contained" color="primary">
                {counter}
            </Button>

            <Button onClick={()=>counterHandler(true)} className="btn-counter" variant="contained" color="secondary">
                <AddIcon />
            </Button>
            
        </div>
    )
}
