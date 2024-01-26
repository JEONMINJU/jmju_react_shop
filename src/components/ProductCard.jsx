import React from 'react';

export default function ProductCard({
	product: { id, image, title, description, category, price }
}) {
	return (
		/* 상품리스트 */
		<li className='border rounded-lg shadow-md overflow-hidden cursor-pointer'>
			{/* 이미지 */}
			<img className='w-full' src={image} alt={title} />
			{/* 정보 */}
			<div className='flex flex-col flex-start mt-4 mb-4 px-4'>
				<strong className='text-sm'>brand name</strong>
				<span className='text-base truncate'>{title}</span>
				<span className='text-xs'>{description}</span>
				<span className='mt-4 font-semibold text-lg'>{price}</span>
				{category && <p className='text-sm mt-2 text-gray-600'>{category}</p>}
			</div>
		</li>
	);
}