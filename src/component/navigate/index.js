import React, { useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from '../../reducer/ui';

export default () => {
    let dispatch = useDispatch()
    const history = useNavigate();
    const location = useLocation();
    const { path } = useSelector((state) => state.ui)
    useEffect(() => {
        if(path !== '' && path != location.pathname) {
            history(path)
            dispatch(setPath(''))
        }
    }, [path])
    
    return <div>{path}</div>
}