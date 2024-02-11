import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	// 로그인한 사용자의 정보, 상태 필요
	const [ user, setUser ] = useState();

	// 첫 로드시
	useEffect(() => {
		onUserStateChange(user => {
			// 사용자 상태 변경될때마다 전달받은 상태값 user >>> setUser 셋팅
			setUser(user);
		})
	}, []); // 빈배열을 넣어주지 않았을때 계속 리랜더링 되었음,,

	return <AuthContext.Provider value={{ user, uid: user && user.uid, login, logout }}>
		{children}
	</AuthContext.Provider>
}

export function useAuthContext() {
	return useContext(AuthContext);
}