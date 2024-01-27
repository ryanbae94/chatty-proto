'use client';
import { useRouter } from 'next/navigation';
import * as styles from './layout.css';
import Image from 'next/image';

type SelectionLayoutProps = {
	children: React.ReactNode;
	title: string;
	progress?: number;
};

export default function SelectionLayout({
	children,
	title,
	progress,
}: SelectionLayoutProps) {
	const navigate = useRouter();
	const handleBackBtnClick = () => {
		navigate.back();
	};
	return (
		<div className={styles.container}>
			<div className={styles.headerWrapper}>
				<div className={styles.backBtnWrapper} onClick={handleBackBtnClick}>
					<Image src='/images/back.svg' alt='back' width={52} height={52} />
				</div>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.backBtnWrapper} />
			</div>
			<div className={styles.progressBar}>
				<div className={styles.progress} />
			</div>
			{children}
		</div>
	);
}