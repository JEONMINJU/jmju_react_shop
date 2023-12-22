import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

// #region (.env.local 로컬 파일에 추가)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// #endregion 

// #region (firebase에서 함수 호출)
// firebase에서 제공하는 initializeApp함수 사용하여 초기화
const app = initializeApp(firebaseConfig);
// getAuth()하면 firebase에서 설정된 값이 포함된 auth를 리턴해 주는것 같다
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// #endregion

// #region login (비동기 함수 async추가)
export async function login() {
	return signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
		console.log(user)

		return user; // 로그인한 사용자 있다면 결과 리턴
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
// #endregion

// #region logout
export async function logout() {
	console.log("logout !!!!!!!!!!!!")
	// signOut 호출 시 auth 전달 필요
	return signOut(auth).then(() => null);
}
// #endregion

// #region 사용자 로그인 상태 변경 감지
export function onUserStateChange(callback) {
	// 상태관찰 함수
	onAuthStateChanged(auth, (user) => {
		callback(user);
	})
}
// #endregion