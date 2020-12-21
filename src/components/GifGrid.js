import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState( [] );

    const { data:images, loading } = useFetchGifs( category ); //version con cutom hooks

    // //Cuando se carga el componenente por primera vez, lanza la peticion para obtener los gifs y los coloca en las imagenes
    // useEffect(() => {
    //     getGifs( category )
    //         .then( setImages );
    // }, [ category ])


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map( ( img ) => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                        ))
                    }
            </div>
        </>
        )
}
