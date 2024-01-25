import React from 'react';
import * as styles from './styles/button.css';
import { useRouter } from 'next/navigation';

type ButtonProps = {
	isSelected: boolean;
};

export default function Button({ isSelected }: ButtonProps) {
	const navigate = useRouter();
	const handleOnClick = () => {
		isSelected ? navigate.push('/') : alert('과목을 선택해주세용');
	};
	return (
		<>
			<button
				className={styles.button({
					selected: isSelected,
				})}
				onClick={handleOnClick}
				disabled={!isSelected}
			>
				선택 했어요!
			</button>
		</>
	);
}
