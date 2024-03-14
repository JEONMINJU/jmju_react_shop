import React from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const ICON_THEME = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1';

export default function CartItem({
	product,
	product: {id, image, title, option, quantity, price},
	uid,
}) {
	const handleMinus = () => {
		if(quantity < 2) return;
		addOrUpdateToCart(uid, {...product, quantity: quantity - 1 });
	}
	const handlePlus = () => {
		addOrUpdateToCart(uid, {...product, quantity: quantity + 1 });
	}
	const handleDelete = () => removeFromCart(uid, id);
	
	return (
		<li className='flex justify-between my-2 items-center'>
			<img className='w-24 md:w-48 rounded-lg' src={image} alt={title} />
			<div className='flex-1 flex justify-between ml-4'>
				{/* basis flex 항목 초기크기 설정 */}
				<div className='basis-3/5'>
					<span className='text-lg'>{title}</span>
					<strong className='text-xl font-bold text-brand'>{option}</strong>
					<p>{price}</p>
				</div>

				{/* 수량 컨트롤 */}
				<div className='text-2xl flex items-center'>
					<AiOutlineMinusSquare className={ICON_THEME} onClick={handleMinus}/>
					<span>{quantity}</span>
					<AiOutlinePlusSquare className={ICON_THEME} onClick={handlePlus}/>
					<RiDeleteBin5Fill className={ICON_THEME} onClick={handleDelete} />
				</div>
			</div>
		</li>
	)
}
