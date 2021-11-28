import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  
    const [categories, setcategories] = useState(['One Punch']);
   
    return (
        <>
            <h2>Get a Gifs</h2>
            <AddCategory setcategories={setcategories} />
            <hr/>
            <ol>
            {
                categories.map(item => (
                    <GifGrid 
                    key={item}
                    category={item}
                    ></GifGrid>
                ))
            }
            </ol>
        </>
    )
}
