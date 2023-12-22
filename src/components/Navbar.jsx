import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login, logout } from "../api/firebase";

export default function Navbar() {
	// 로그인한 사용자의 정보, 상태 필요
	const [ user, setUser ] = useState();
	const handleLogin = () => {
		login().then(setUser);
	} 

	const handleLogout = () => {
		console.log("logout!!!!!")
		logout().then(setUser);
	}

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

				{/* 로그인한 사용자 없다면 login 버튼 노출 */}
				{!user && <button type="button" onClick={handleLogin}>Login</button>}
				{/* login 버튼 미노출 */}
				{user && <button type="button" onClick={handleLogout}>Logout</button>}
			</nav>
		</header>
	)
}