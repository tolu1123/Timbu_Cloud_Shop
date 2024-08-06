import React, {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";


import { CartContext } from "./CartContext";
import ThrillData from "./ThrillData";
import product from "./product";

export default function ThrillSection() {

    const { cartContent, setCartContent } = useContext(CartContext);
    const [currentPage, setCurrentPage] = useState(3);
    const [productsPerPage, setProductsPerPage] = useState(4);
    const [perfumes, setPerfumes] = useState([])
    const selectedProducts = product.slice(4, 8);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `/data/perfumes.json`;

        fetch(url, {
            cache: 'no-cache',
        })
            .then(response => response.json())
            .then(json => {
                let data = json.slice(8, 12)
                setPerfumes(data);
            })
            .catch(error => {
                // throw new Error()
                console.log(error);

            })
            
        
        return () => {
            setIsLoading(true);
        }
        
    }, []);

    const data = perfumes.map((product, index) => (
        <ThrillData key={product.id} product={product} updateIsLoading={(state) => setIsLoading(state)} index={index} isLoading={isLoading} />
    ))

    return (
        <div id="aboutus" className="flex flex-col lg:flex-row justify-center items-center px-5 mt-10 mb-10 gap-10 lg:px-24">
            <div className="thrill-header mb-5">
                <h3 className="w-full roboto-slab-semibold text-center text-dullPink text-5xl mb-10">Thrill. Bliss. Zen</h3>
                <p className="w-full text-naturalPink text-center text-base lg:text-lg roboto-slab-regular md:p-5">
                    Need pleasure on the go? We transformed our tantalizing, high-performance perfume into a delightful treat! It feels just like those classic, stimulating sensations.
                </p>
            </div>

            <div className="w-full thrill-gallery flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 px-6 sm:px-20 lg:px-0">
                {data}
            </div>
        </div>
    )
}