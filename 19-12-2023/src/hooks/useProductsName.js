import React, { useEffect, useState } from 'react';

const useProductsName = (url, field) => {
    const [products, setProduts] = useState([]);
    const [titles, setTitles] = useState([])
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setProduts(data.products))
    }, [url])

    useEffect(() => {
        console.log(products[1])
        const titles = products.map((product) => product[field]);
        setTitles(titles);
    }, [products]);
    // console.log(titles)
    return titles;
}

export default useProductsName;