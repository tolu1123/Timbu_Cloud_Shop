import React, {useState,useEffect, useContext} from "react";
import ReactDom from 'react-dom/client';

// Importing styles
import '../styles/Toppicks.css';

// Importing the TopPicksData component
import TopPicksData from './TopPicksData';


export default function Toppicks() {

    const [perfumes, setPerfumes] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `/data/perfumes.json`;

        fetch(url, {
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(json => {
                let data = json.slice(4, 8)
                setPerfumes(data);

            })
            .catch(error => console.log(error));
            
        
        return () => {
            setIsLoading(true);
        }
        
    }, []);


    
    const data = perfumes.map((product, index) => (
        <TopPicksData key={product.id} isLoading={isLoading} updateIsLoading={(state) => setIsLoading(state)} product={product} index={index} />
    ))

    return (
        <div className="top-picks w-full pt-10 pb-10 roboto-slab-semibold lg:px-24">

            <h3 className="w-full text-center text-dullPink text-3xl px-5">Top picks for ultimate Satisfaction</h3>

            {/* This is the div that contains the first four popular picks */}
            <div className="flex flex-row flex-nowrap overflow-auto gap-5  md:grid md:grid-cols-3 lg:grid-cols-4 mt-8 py-3 px-5 lg:px-0">

                {data}
        
            </div>
        </div>
    )
}