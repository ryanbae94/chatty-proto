'use client';
import React from 'react';
import * as styles from './header.css';
import Image from 'next/image';
import logo from '@/assets/chatty.svg';
import profile from '@/assets/profile.svg';
import { useRouter } from 'next/navigation';

export default function Header() {
	const navigate = useRouter();
	const handleOnClick = () => {
		navigate.push('/selectSubject');
	};
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image src={logo} alt='logo' />
			</div>
			<div className={styles.wrapper}>
				<Image src={profile} alt='profile' />
				<button className={styles.startButton} onClick={handleOnClick}>
					무료로 시작
				</button>
			</div>
		</header>
	);
}
