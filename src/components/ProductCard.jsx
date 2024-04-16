import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductCard({
	product,
	product: { id, image, title, description, category, price }
}) {
	const navigate = useNavigate();

	return (
		/* 상품리스트 */
		<ProductList onClick={() => {navigate(`/products/${id}`, {state:{product}})}} 
			className='border rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-100'>
			{/* 이미지 */}
			<figure className='product__img'>
				<img src={image} alt={title} />
			</figure>
			{/* 정보 */}
			<div className='flex flex-col flex-start p-4 px-4 min-h-40 bg-gray-50'>
				<strong className='text-sm'>{category}</strong>
				<span className='text-base truncate'>{title}</span>
				<span className='text-xs mt-1'>{description}</span>
				<span className='mt-4 font-semibold text-sm'><em className='text-lg'>{price}</em>원</span>
				{/* {category && <p className='text-sm mt-2 text-gray-600'>{category}</p>} */}
			</div>
		</ProductList>
	);
}

const ProductList = styled.li`
	.product {
		&__img {
			position: relative;
			overflow: hidden;
			padding-top: 100%;

			&:before {
				content: '';
				display: block;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: #f1f5f9;
			}

			img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
`