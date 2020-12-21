//Esto es un Custom Hook

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs( category )
            .then( img => {

                // setTimeout( ()=>{
                    // console.log(img);
                    setState({
                        data: img,
                        loading: false
                    });
                // }, 3000);
            });
    }, [ category ])

    return state; // {data:[], loading:true};
}
