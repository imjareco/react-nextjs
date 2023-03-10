import { useMemo } from "react";
import Image from "next/image";
import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { IProduct } from "@/products/models";

const WrapperPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: -webkit-center;
    padding: 8px;
    border: solid 1px rgb(25, 118, 210, 0.5);
`;

const CustomBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin: 0 16px;
`;

const BoxImage = styled(Image)`
    width: 100%;
`;

const CustomButton = styled(Button)`
    width: 100%;
`;

interface IProductCard {
    product: IProduct;
}

const ProductCard = ({ product: { image, name, price, discount } }: IProductCard) => {
    const discountPercentage = useMemo(() => 
        discount ? Math.floor(price * discount / 100) : null, 
    [discount, price]); 

    return (
        <WrapperPaper elevation={2}>
            <BoxImage
                src={image}
                alt="wear"
                width={150}
                height={150}
                priority
            />

            <div style={{height: "150px"}}>
                <CustomBox style={{ display: "block"}}>
                    <strong>{name}</strong>
                </CustomBox>

                <CustomBox>
                    <div {...(discountPercentage && { style: { textDecoration: "line-through", color: "red" }})}>{`${price} €`}</div>
                    {!!discountPercentage && (<div>{`${price - discountPercentage} € (-${discountPercentage} %)`}</div>)}
                </CustomBox>
            </div>

            <CustomBox>
                <small>Mas colores</small>
            </CustomBox>

            <CustomButton variant="contained">Añadir</CustomButton>
        </WrapperPaper>
    )
}

export default ProductCard;