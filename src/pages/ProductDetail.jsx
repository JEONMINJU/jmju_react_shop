import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import styled from 'styled-components';

export default function ProductDetail() {
  const {
    state : {product: {id, image, title, description, category, price, options}}
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    // 클릭시 장바구니 추가되도록
  }

  return (
    <>
      <ProductDetailSection>
        {/* 상단 카테고리 */}
        <span className='mx-4 mt-4 text-gray-700'>{category}</span>
        {/* 상품상세 */}
        <div className='flex flex-col md:flex-row p-4 justify-between'>
          <figure className='w-1/2 border rounded-lg'>
            <img className='w-full px-4 basis-7/12' src={image} alt={title} />
          </figure>

          <div className='flex flex-col ml-10 w-1/2'>
            {/* 상품명 */}
            <strong className='text-2xl font-bold pb-4'>{title}</strong>
            {/* 상품가격 */}
            <span className='border-b border-gray-400 pb-2 text-sm'><em className='font-bold text-lg'>{price}</em>원</span>
            {/* 상품설명 */}
            <span className='mt-1 text-sm'>{description}</span>

            <div className='flex items-center mt-3 mb-10'>
              <span className='text-brand font-bold'>옵션:</span>
              <select
                className='p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none'
                onChange={handleSelect} value={selected}>
                {options && options.map((option,index) => (<option key={index}>{option}</option>))}
              </select>
            </div>

            {/* wish, cart */}
            <Button text="add cart" onClick={handleClick} />
          </div>
        </div>
      </ProductDetailSection>
    </>
  );
}

const ProductDetailSection = styled.section`
  max-width: 1920px;
  margin: 40px auto;
`
