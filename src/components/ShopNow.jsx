import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';


import ShopNowProducts from './shopNowProducts.jsx';

export default function ShopNow() {

    const [noOfPerfumes, setNoOfPerfumes] = useState(0);
    const [perfumes, setPerfumes] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `/data/perfumes.json`;

        fetch(url, {
            cache: 'no-cache',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('An error occured');
                }
               return response.json()
            })
            .then(json => {
                setNoOfPerfumes(json.length);
                setPerfumes(json);
                
            })
            .catch(error => {
                // throw new Error()
                console.log(error);
            })
            
        
        return () => {
            setIsLoading(true);
        }
        
    }, [currentPage, productsPerPage]);
    
    const totalPageNo = Math.ceil(noOfPerfumes / productsPerPage);

    console.log(totalPageNo);

    function updatePage(pageNo) {
        // Set the isLoading state back to true
        setIsLoading(true);
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
    className={`px-4 py-2 mx-1 border border-solid rounded ${currentPage !== totalPageNo ? 'bg-dullPink text-white' : 'bg-white text-dullPink border-dullPink'}`}
    onClick={() => nextPage()}
    >
        <i class="fa-regular fa-chevron-right"></i>
    </button>


    const startIndex = (currentPage - 1) * 4;
    const endIndex = startIndex + 4;
    let requiredData;
    if(endIndex >= noOfPerfumes) {
        requiredData = perfumes.slice(startIndex);
    }else {
        requiredData = perfumes.slice(startIndex, endIndex);
    }
    let data = requiredData.map((product, index) => (
                <ShopNowProducts key={product.unique_id} product={product} index={index} isLoading={isLoading} updateIsLoading={(state) => setIsLoading(state)}/>
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