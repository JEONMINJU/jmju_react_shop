import React from "react";
import { Link } from "react-router-dom";
// import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "./context/AuthContext";

export default function Navbar() {
	const { user, login, logout } = useAuthContext();
	// authcontext 로 이동
	// // 로그인한 사용자의 정보, 상태 필요
	// const [ user, setUser ] = useState();

	// // 첫 로드시
	// useEffect(() => {
	// 	onUserStateChange(user => {
	// 		// 사용자 상태 변경될때마다 전달받은 상태값 user >>> setUser 셋팅
	// 		setUser(user);
	// 	})
	// }, []); // 빈배열을 넣어주지 않았을때 계속 리랜더링 되었음,,

	// // 로그인 onClick 함수에 바로 참조값 넣어주기 
	// const handleLogin = () => {
	// 	login().then(setUser);
	// } 

	// // 로그아웃
	// const handleLogout = () => {
	// 	console.log("logout!!!!!")
	// 	logout().then(setUser);
	// }

	return (
		<header className="flex justify-between border-b border-gray-300 p-2">
			<Link to='/' className="flex items-center text-4xl text-brand">
				{/* 아이콘 추가 필요 */}
				<h1>Minju Shop</h1>
			</Link>

			<nav className="flex items-center gap-4">
				<Link to='/products'>Products</Link>
				
				{user && <Link to='/carts'>Carts</Link>}

				{/* user가 있고 isAdmin true일때만 노출 버튼*/}
				{user && user.isAdmin && (<Link to='/products/new' className="">Product registration</Link>)}

				{/* user객체 정보 전달받는 컴포넌트 */}
				{user && <User user={user}/>}

				{/* 로그인한 사용자 없다면 login 버튼 노출 */}
				{!user && <Button type="button" text={'Login'} onClick={login}/>}
				{/* login 버튼 미노출 */}
				{user && <Button type="button" text={'Logout'} onClick={logout}/>}
			</nav>
		</header>
	)
}