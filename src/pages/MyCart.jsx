import React from 'react';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';

const shipping = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();
	// 여기서도 쿼리 obj형태 아니라서 에러
  const { isLoading, data: products } = useQuery({queryKey:['carts'], queryFn: () => getCart(uid)});

  if(isLoading) return <p>Loading...</p>

  const hasProducts = products && products.length > 0;
  const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);

  return <section>
    {!hasProducts && <span>장바구니에 등록된 상품이 없습니다.</span>}
    {hasProducts && <>
      <ul>
        {products && products.map((product) => (<CartItem key={product.id} product={product} uid={uid} />))}
      </ul>
      <div className='flex justify-between items-center'>
          <PriceCard text="상품 총액" price={totalPrice} />
          <BsFillPlusCircleFill className='shrink-0' />
          <PriceCard text="배송비" price={shipping} />
          <FaEquals/>
          <PriceCard text="총가격" price={totalPrice + shipping} />
        </div>
    </>}
  </section>;
}
