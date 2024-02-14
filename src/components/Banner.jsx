import React from 'react'

export default function Banner() {
	return (
		<section className='h-96 relative'>
			{/* tailwind local image use */}
			<div className='w-full h-full bg-cover bg-banner opacity-80 absolute top-0'></div>
			<div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
				<h2 className='text-6xl'>Let's go Backpacking</h2>
				<p className='text-2xl pt-2'>We invite you to the world of backpacking.</p>
			</div>
		</section>
	)
}
