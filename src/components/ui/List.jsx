import React from 'react'

export default function List({title, division, text}) {
	return (
		<li className='flex items-center h-6 mb-[6px] text-gray-400 text-sm'>
			<span>{title}</span>
			{division && <span className='m-2'>:</span>}
			<p>{text}</p>
		</li>
	)
}
