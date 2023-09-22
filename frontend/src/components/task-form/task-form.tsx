import { useState } from 'react';

interface TaskFormProps {
	onAddTask: (content: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
	const [newTask, setNewTask] = useState<string>('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(event.target.value.trim());
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
			<input type='text' placeholder='nazwa zadania' onChange={handleInputChange} value={newTask} />
			<button type='submit'>Dodaj zadanie</button>
		</form>
	);
};
