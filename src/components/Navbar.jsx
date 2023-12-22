import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="flex justify-between border-b border-gray-300 p-2">
			<Link to='/' className="flex items-center text-4xl text-brand">
				{/* 아이콘 추가 필요 */}
				<h1>Minju Shop</h1>
			</Link>

			<nav className="flex items-center gap-4">
				<Link to='/products'>Products</Link>
				<Link to='/carts'>Carts</Link>
				<Link to='/products/new' className="text-2xl">Products</Link>

				{/* login */}
				<button type='button'>Login</button>
			</nav>
		</header>
	)
}