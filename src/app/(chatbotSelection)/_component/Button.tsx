import React from 'react';
import * as styles from './styles/button.css';
import { useRouter } from 'next/navigation';

type ButtonProps = {
	isSelected: boolean;
	message: string;
	step: number;
};

export default function Button({ isSelected, message, step }: ButtonProps) {
	const navigate = useRouter();
	const handleOnClick = () => {
		if (step === 1) {
			navigate.push('/selectExam');
		}
		if (step === 2) {
			navigate.push('/uploadFile');
		}
	};
	return (
		<button
			className={styles.button({
				selected: isSelected,
			})}
			onClick={handleOnClick}
			disabled={!isSelected}
		>
			{message}
		</button>
	);
}