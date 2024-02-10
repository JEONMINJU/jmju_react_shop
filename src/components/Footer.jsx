import React from 'react'
import styled from 'styled-components'
import List from './ui/List'

/* styled components 사용 */
export default function Footer() {
	return (
		<FooterSection>
			<ul className='footer__info'>
				<List title="상호명" division text="jmj.u" />
				<List title="사업장 주소" division text="서울특별시 관악구 봉천동" />
				<List title="대표 전화" division text="010.2331.2732" />
				<List title="이메일" division text="junielle.jeon@gmail.com" />
				<List title="" text="Copyright © 2024 ㈜ jmj.u all rights reserved." />
			</ul>
			
			<div className='footer__quick'>
				<div className='footer__quick__menu'>
					<strong>NOTICE</strong>
					<span>공지사항</span>
					<span>이용약관</span>
					<span>개인정보처리방침</span>
				</div>

				<div className='footer__quick__menu'>
					<strong>SUPPORT</strong>
					<span>고객센터</span>
					<span>FAQ</span>
					<span>반품문의</span>
				</div>
			</div>
		</FooterSection>
	)
}

const FooterSection = styled.section`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 60px 30px;
	background: black;

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;

		.footer {
			&__quick {
				margin-top: 40px;
				margin-right: 0;
			}
		}
  }

	.footer {
		&__quick {
			display: flex;
			justify-content: space-between;
			min-width: 250px;
			margin-right: 30px;

			&__menu {
				display: flex;
				flex-direction: column;
				color: #999;
				font-size: 13px;
				cursor: pointer;
			
				strong {
					margin-bottom: 20px;
					font-size: 14px;
					font-weight: bold;
					color: white;
				}

				span {
					margin-bottom: 14px;
				}
			}
		}
	}
`