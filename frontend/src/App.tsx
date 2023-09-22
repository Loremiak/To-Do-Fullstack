import React, { useEffect, useState } from 'react';
import './App.css';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Task } from './interface/task';
import { addNewTask, getAllTask, removeTask, updateTaskDoneStatus } from './services/api';

const App: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		getAllTask().then(data => {
			setTasks(data);
		});
	}, []);

	const handleAddTask = async (content: string) => {
		const newTask = await addNewTask(content);
		if (newTask) {
			setTasks([...tasks, newTask]);
		}
	};

	const handleDeleteTask = (id: number) => {
		const idAsString = id.toString();
		removeTask(idAsString).then(() => {
			setTasks(tasks.filter(task => task.id !== id));
		});
	};

	const handleToggleTask = (id: number) => {
		const updatedTask = tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task));
		setTasks(updatedTask);
		updateTaskDoneStatus(id, !tasks.find(task => task.id === id)?.done);
	};

	return (
		<div className='App'>
			<h1>Lista zadań</h1>
			<TaskForm onAddTask={handleAddTask} />
			<TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
		</div>
	);
};

export default App;
