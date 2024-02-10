import React from 'react';
import Products from '../components/Products';
import Banner from '../components/Banner';
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Banner/>
      <HomeSection>
        <Products/>
      </HomeSection>
    </>
  )
}

const HomeSection = styled.section`
  max-width: 1920px;
  padding: 20px;
`


