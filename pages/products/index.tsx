import { useCallback, useEffect, useState } from "react";
import { GetStaticProps } from "next/types";
import styled from "styled-components";

import Grid from '@mui/material/Grid';

import { server } from "@/config"
import { IProduct } from "@/products/models";
import SearchBar from "@/products/components/SearchBar";
import ProductCard from "@/products/components/ProductCard";

const NoResults = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: black;
`;

interface IProductsPage {
    products: IProduct[];
}

const ProductsPage = ({ products }: IProductsPage) => {
    const [value, setValue] = useState<string | undefined>();
    const [data, setData] = useState<IProduct[]>(products);

    const fetchProducts = useCallback(async (value: string) => {
        setValue(value);

        if (value.length > 1) {
            const res = await fetch(`/api/products?search=${value}`);
            const data = await res.json();
            
            setData(data);
        }

    }, []);

    useEffect(() => {
        if (!value) {
            setData(products);
        }
    }, [products, value])
    
    return (
        <section>
            <SearchBar value={value} onChange={({ target }) => fetchProducts(target.value.toLowerCase())}/>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 3, sm: 6, md: 12 }}>
                {data.length 
                    ? data.map((product, index) => 
                        <Grid item xs={3} sm={2} md={2} key={index}>
                            <ProductCard key={product.id} product={product} />
                        </Grid>) 
                    : <NoResults><div>No hay resultados</div></NoResults>}
                
            </Grid>
        </section>

    );
}

export default ProductsPage;

export const getStaticProps: GetStaticProps<{ products: IProduct[] }> = async () => {
    const res = await fetch(`${server}/api/products`);
    const products = await res.json();

    return {
        revalidate: 60,
        props: { products }
    }
}