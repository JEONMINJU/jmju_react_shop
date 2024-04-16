import React from 'react';
import { getCart } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';

const shipping = 3000;

const notYet = () => {
  alert('Working on it...🥲')
};

export default function MyCart() {
  const { uid } = useAuthContext();
	// 여기서도 쿼리 obj형태 아니라서 에러
  const { isLoading, data: products } = useQuery({queryKey:['carts'], queryFn: () => getCart(uid)});

  if(isLoading) return <p>Loading...</p>

  const hasProducts = products && products.length > 0;
  const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0);

  return <section className='mt-4 pr-20 pl-20'>
    <header className='p-4 border-b border-stone-300'>
      <h2 className='text-3xl font-bold'>장바구니</h2>
    </header>
    {!hasProducts && <span>장바구니에 등록된 상품이 없습니다.</span>}
    {hasProducts && <>
      <div className='flex justify-between items-start mt-4'>
        <div className='w-full mr-10'>
          <ul>
            {products && products.map((product) => (<CartItem key={product.id} product={product} uid={uid} />))}
          </ul>
          <div className='flex justify-between items-center'>
            <PriceCard text="상품금액" price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text="배송비" price={shipping} />
            <FaEquals/>
            <PriceCard text="결제 예정 금액" price={totalPrice + shipping} />
          </div>
        </div>

        <div>
          <div className='border border-stone-300 rounded-sm flex w-80'>
            <div className='flex flex-col'>
              <strong className='p-4 text-2xl font-bold'>전체합계</strong>

              <ul className='flex flex-col p-4 border-y'>
                <li className='flex justify-between w-72'>
                  <span>상품금액</span>
                  <span><em className='font-bold'>{totalPrice}</em>원</span>
                </li>
                <li className='flex justify-between w-72 mt-2'>
                  <span>배송비</span>
                  <span><em className='font-bold'>{shipping}</em>원</span>
                </li>
              </ul>

              <div className='flex flex-col p-4'>
                <span>결제 예정 금액</span>
                <span className='text-right font-bold text-brand text-xl md:text-2xl'><em>{totalPrice}</em>원</span>
              </div>
            </div>
          </div>

          <button type='button' onClick={notYet} className='bg-brand mt-4 w-full text-white p-4'>구매하기</button>
        </div>
      </div>
    </>}
  </section>;
}
