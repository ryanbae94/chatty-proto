import React from 'react';
import { Subject } from '../page';
import * as styles from './styles/subjectCard.css';
type SubjectCardProps = {
	subject: Subject;
	onClick: () => void;
};

export default function SubjectCard({ subject, onClick }: SubjectCardProps) {
	return (
		<>
			<div
				className={styles.container({ selected: subject.selected })}
				onClick={onClick}
			>
				{subject.title}
			</div>
		</>
	);
}
