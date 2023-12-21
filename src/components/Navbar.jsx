import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header>
			<Link to='/'>
				{/* 아이콘 추가 필요 */}
				<h1>Minju Shop</h1>
			</Link>

			<nav>
				<Link to='/products'>Products</Link>
				<Link to='/carts'>Carts</Link>
				<Link to='/products/new'>Products</Link>

				{/* login */}
				<button type='button'>Login</button>
			</nav>
		</header>
	)
}