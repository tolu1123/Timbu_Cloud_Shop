import React, {useState,useEffect, useContext} from "react";
import ReactDom from 'react-dom/client';

import blissfulWand from '../../public/images/blissful-wand.jpeg';
import delightDuet from '../../public/images/delight-duet.jpeg';
import euphoriaElixir from '../../public/images/euphoria-elixir.jpeg';
import passionPod from '../../public/images/passion-pod.jpeg';

import TopPicksData from "./TopPicksData";
import products from "./product.js";

export default function Toppicks() {

    const [currentPage, setCurrentPage] = useState(2);
    const [productsPerPage, setProductsPerPage] = useState(4);
    const [perfumes, setPerfumes] = useState([])

    useEffect(() => {
        const url = `api/products?organization_id=9a805f7be6d245f68c03472d1b1ee477&reverse_sort=false&page=${currentPage}&size=${productsPerPage}&Appid=OMZZNZNC52V1QWF&Apikey=452bd165ec724ba88d42d34a339db37720240712230002233105`;

        let ignore = false;
        fetch(url,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }})
            .then(response => response.json())
            .then(json => {
            if (!ignore) {
                setPerfumes(json.items);
            }
            })
            .catch(error => console.log(error));
            
        
        return () => {
            ignore = true;
        }
        
    }, [currentPage, productsPerPage]);

    const data = perfumes.map((product) => (
        <TopPicksData key={product.id} product={product} />
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