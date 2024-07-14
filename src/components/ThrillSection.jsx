import React, {useState, useEffect, useContext} from "react";
import ReactDOM from "react-dom/client";

import whisperOfJoy from '../../public/images/whisper-of-joy.jpeg';
import elysianEssence from '../../public/images/elysian-essence.jpeg';
import sublimeSerenity from '../../public/images/sublime-serenity.jpeg';
import divinePleasure from '../../public/images/divine-pleasure.jpeg';

import { CartContext } from "./CartContext";
import ThrillData from "./ThrillData";
import product from "./product";

export default function ThrillSection() {

    const { cartContent, setCartContent } = useContext(CartContext);
    const [currentPage, setCurrentPage] = useState(3);
    const [productsPerPage, setProductsPerPage] = useState(4);
    const [perfumes, setPerfumes] = useState([])
    const selectedProducts = product.slice(4, 8);

    useEffect(() => {
        const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=9a805f7be6d245f68c03472d1b1ee477&reverse_sort=false&page=${currentPage}&size=${productsPerPage}&Appid=OMZZNZNC52V1QWF&Apikey=452bd165ec724ba88d42d34a339db37720240712230002233105`;

        let ignore = false;
        fetch(url)
            .then(response => response.json())
            .then(json => {
            if (!ignore) {
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

    const data = perfumes.map((product) => (
        <ThrillData key={product.id} product={product} />
    ))

    return (
        <div id="aboutus" className="flex flex-col lg:flex-row justify-center items-center px-5 mt-10 mb-10 gap-10 lg:px-24">
            <div className="thrill-header mb-5">
                <h3 className="w-full roboto-slab-semibold text-center text-dullPink text-5xl mb-10">Thrill. Bliss. Zen</h3>
                <p className="w-full text-naturalPink text-center text-base lg:text-lg roboto-slab-regular md:p-5">
                    Need pleasure on the go? We transformed our tantalizing, high-performance perfume into a delightful treat! It feels just like those classic, stimulating sensations.
                </p>
            </div>

            <div className="w-full thrill-gallery flex flex-col gap-10 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 sm:px-20 lg:px-0">
                {data}
            </div>
        </div>
    )
}