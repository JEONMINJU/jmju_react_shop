import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
	// useQuery 사용하여 제품정보 가져오기
	const {
    isLoading,
    error,
    data: products,
  } = useQuery({ queryKey: ['products'], queryFn: getProducts }); //v5부터는 쿼리 관련 함수 호출 시 "Object" 형식만 허용
	return (
		<>
			<ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
				{isLoading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{products 
					&& products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</ul>
		</>
	)
}