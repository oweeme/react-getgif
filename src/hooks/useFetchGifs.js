import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setStates] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category)
        .then(img=>{
            setStates({
                data: img,
                loading: false
            });
        })
        
    },[category])

    return state;
} 