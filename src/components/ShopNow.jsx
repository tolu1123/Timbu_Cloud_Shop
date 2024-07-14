import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import etherealBloom from '../../public/images/ethereal-bloom.jpeg';
import noirEclipse from '../../public/images/noir-eclipse.jpeg';
import amberSerenity from '../../public/images/amber-serenity.jpeg';
import RadiantDelight from '../../public/images/radiant-delight.jpeg';


import products from './product.js';
import ShopNowProducts from './shopNowProducts.jsx';
import { useData } from './fetchProduct.js';

export default function ShopNow() {

    const [noOfPerfumes, setNoOfPerfumes] = useState(0);
    const [perfumes, setPerfumes] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(4);
    useEffect(() => {
        const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=9a805f7be6d245f68c03472d1b1ee477&reverse_sort=false&page=${currentPage}&size=${productsPerPage}&Appid=OMZZNZNC52V1QWF&Apikey=452bd165ec724ba88d42d34a339db37720240712230002233105`;

        let ignore = false;
        fetch(url)
            .then(response => response.json())
            .then(json => {
            if (!ignore) {
                setNoOfPerfumes(json.total);
                setPerfumes(json.items);
            }
            })
            .catch(error => {
                // throw new Error()
                console.log(error);

            })
            
        
        return () => {
            ignore = true;
        }
        
    }, [currentPage, productsPerPage]);
    
    const totalPageNo = Math.ceil(noOfPerfumes / productsPerPage);

    function updatePage(pageNo) {
        // This sets the current page to the page number clicked
        setCurrentPage(pageNo);
    }
    function prevPage() {
        if(currentPage > 1) {
            setCurrentPage(currentPage => currentPage - 1);
        }
    }
    
    function nextPage() {
        if(currentPage < totalPageNo) {
            setCurrentPage(currentPage => currentPage + 1);
        }
    }

    // Create an array of pagination buttons
    let paginationButtons = [];
    for (let i = 1; i <= totalPageNo; i++) {
        paginationButtons.push(
            <button
                key={i}
                className={`px-4 py-2 mx-1 border border-solid rounded ${currentPage === i ? 'bg-dullPink text-white' : 'bg-white text-dullPink border-dullPink'}`}
                onClick={() =>  updatePage(i)}
            >
                {i}
            </button>
        );
    }
    let prevBtn = <button
    className={`px-4 py-2 mx-1 border border-solid rounded ${currentPage > 1 ? 'bg-dullPink text-white' : 'bg-white text-dullPink border-dullPink'}`}
    onClick={() => prevPage()}
    >
        <i class="fa-regular fa-chevron-left"></i>
    </button>
    let nextBtn = <button
    className={`px-4 py-2 mx-1 border border-solid rounded ${currentPage + 1 === totalPageNo ? 'bg-dullPink text-white' : 'bg-white text-dullPink border-dullPink'}`}
    onClick={() => nextPage()}
    >
        <i class="fa-regular fa-chevron-right"></i>
    </button>



    let data = perfumes.map(product => (
                <ShopNowProducts key={product.unique_id} product={product}/>
            )
        )


    return (
        <div id='shopnow' className="shop-now px-5 mt-20 mb-10 lg:px-24">
            <div className="shop-now-header mb-10">
                <h3 className="w-full text-center sm:text-left text-dullPink text-3xl roboto-slab-semibold">
                    Shop Now
                </h3>
            </div>

            {/* Div for the product cards */}
            <div className="products flex flex-col items-center justify-center gap-6 sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-9">
                {data}

    
            </div>
            {/* Pagination controls*/}
            <div className="pagination flex justify-end mt-5">
                <div className="">
                    {prevBtn}
                    {paginationButtons}
                    {nextBtn}
                </div>
            </div>
        </div>
    )
}