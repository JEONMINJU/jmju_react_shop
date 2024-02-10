import React from 'react'

export default function List({title, division, text}) {
	return (
		<li className='flex items-center h-6 mt-[6px] text-gray-400'>
			<span>{title}</span>
			{division && <span className='m-2'>:</span>}
			<p>{text}</p>
		</li>
	)
}
