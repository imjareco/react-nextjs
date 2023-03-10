import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    background-color: #1976d2;
    text-align: center;
    color:  #FFFFFF;
    height: 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Footer = () => {
    return (
        <Wrapper>
            <blockquote>This is a archetype with Next.js 13</blockquote>
        </Wrapper>
    );
}
export default Footer;