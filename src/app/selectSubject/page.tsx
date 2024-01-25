'use client';

import React, { useState } from 'react';
import * as styles from './selectSubject.css';
import SubjectCard from './_component/SubjectCard';
import Image from 'next/image';
import backButton from '@/assets/back.svg';
import Button from './_component/Button';
import { useRouter } from 'next/navigation';

export type Subject = {
	title: string;
	selected: boolean;
};

export default function SelectSubject() {
	const [subjects, setSubjects] = useState<Subject[]>([
		{
			title: '국어',
			selected: false,
		},
		{
			title: '수학',
			selected: false,
		},
		{
			title: '영어',
			selected: false,
		},
		{
			title: '한국사',
			selected: false,
		},
		{
			title: '사탐',
			selected: false,
		},
		{
			title: '과탐',
			selected: false,
		},
	]);
	const [isSelected, setIsSelected] = useState(false);
	const navigate = useRouter();
	const handleBackBtnClick = () => {
		navigate.back();
	};
	const handleOnClick = (i: number) => {
		const newState = subjects.map((subject, index) => {
			if (index === i) {
				return { ...subject, selected: !subject.selected };
			}
			return { ...subject, selected: false };
		});
		setSubjects(newState);
		setIsSelected(newState.some((subject) => subject.selected));
	};
	return (
		<div className={styles.container}>
			<div className={styles.headerWrapper}>
				<div className={styles.backBtnWrapper} onClick={handleBackBtnClick}>
					<Image src={backButton} alt='back' />
				</div>
				<h1 className={styles.title}>어떤 과목을 공부하고 계신가요?</h1>
				<div className={styles.backBtnWrapper} />
			</div>
			<div className={styles.progressBar}>
				<div className={styles.progress} />
			</div>
			<div className={styles.cardWrapper}>
				{subjects.map((subject, i) => (
					<SubjectCard
						subject={subject}
						key={i}
						onClick={() => handleOnClick(i)}
					/>
				))}
			</div>
			<Button isSelected={isSelected} />
		</div>
	);
}
