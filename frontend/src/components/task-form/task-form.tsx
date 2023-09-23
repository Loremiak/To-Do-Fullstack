import { useState } from 'react';
import './task-form.css';

interface TaskFormProps {
	onAddTask: (content: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
	const [newTask, setNewTask] = useState<string>('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (newTask) {
			onAddTask(newTask);
			setNewTask('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='input-form'
				type='text'
				placeholder='nazwa zadania'
				onChange={handleInputChange}
				value={newTask}
			/>
			<button className='button-form' type='submit'>
				Dodaj zadanie
			</button>
		</form>
	);
};
