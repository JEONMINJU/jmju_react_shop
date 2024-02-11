import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
// 어드민 api
import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

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
const database = getDatabase(app);
// #endregion

// #region login (비동기 함수 async추가)
export function login() {
	signInWithPopup(auth, provider).catch(console.error);
}
// #endregion

// #region logout
export function logout() {
	// signOut 호출 시 auth 전달 필요
	// return signOut(auth).then(() => null);
	signOut(auth).catch(console.error);
}

// export function logout() {
// 	signOut(auth);
// }
// #endregion

// #region 사용자 로그인 상태 변경 감지
export function onUserStateChange(callback) {
	// 상태관찰 함수
	onAuthStateChanged(auth, async (user) => {
		// 1. 사용자가 있는 경우에 adminUser함수 호출(로그인한 경우)
		const updatedUser = user ? await adminUser(user) : null;

		callback(updatedUser);
	});
}
// #endregion

// #region 사용자 로그인 상태 변경 감지
// adminUser 함수에 사용자"user" 전달받기
async function adminUser(user) {
	// 2. 사용자가 어드민 권한을 가지고 있는지 확인
	// 3. {...user, isAdmin: true/false}
	return get(ref(database, 'admins')).then((snapshot) => {
		if(snapshot.exists()) {
			const admins = snapshot.val();
			
			// 받아온 admins 배열안에 사용자uid 체크
			const isAdmin = admins.includes(user.uid);

			console.log(admins);
			console.log(isAdmin);

			// 사용자 정보 풀고 isAdmin정보 전달
			return {...user, isAdmin};		
		}
		// 어드민 사용자 아닐시
		return user;
	})
}
// #endregion

// #region 새로운 제품 추가
export default function addNewProduct(product, image) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(','),
  });
}
// #endregion

// #region 제품 보여주기
export async function getProducts() {
	return get(ref(database, 'products')).then(snapshot => {
		if(snapshot.exists()) { // exists()함수:파일 존재여부 체크
			// snapshot형태 객체 형태이기 때문에 Object.values()사용. value값들만 배열로 반환
			return Object.values(snapshot.val());
		}
		return [];
	});
}
// #endregion

// #region 장바구니 정보 가져오기
export async function getCart(userId) {
	return get(ref(database, `carts/${userId}`))
		.then((snapshot) => {
			const items = snapshot.val() || {};
			console.log(items, "DDD")
			return Object.values(items);
		});
}

// 특정 사용자의 상품 추가
export async function addOrUpdateToCart(userId, product) {
	return set(ref(database, `carts/${userId}/${product.id}`), product)
}

export async function removeFromCart(userId, productId) {
	return remove(ref(database, `carts/${userId}/${productId}`));
}
// #endregion