import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['Robot']);

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Category 4']);
    //     setCategories(cats => [...cats, 'Category 4']);
    // }

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />


            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid
                            key= { category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
