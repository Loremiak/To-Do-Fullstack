import axios from 'axios';
import { Task } from '../interface/task';

const BASE_URL = 'http://localhost:3001/';
const ERROR_EXCEPTION = 'Wystąpił błąd:';

export const getAllTask = async (): Promise<Task[]> => {
	try {
		const { data } = await axios.get<Task[]>(`${BASE_URL}tasks`);
		return data;
	} catch (error) {
		console.error(ERROR_EXCEPTION, error);
		return [];
	}
};

export const addNewTask = async (content: string): Promise<Task | undefined> => {
	try {
		const newTask = {
			content,
			done: false,
		};

		const response = await axios.post<Task>(`${BASE_URL}tasks`, newTask);

		const addedTask: Task = response.data;
		return addedTask;
	} catch (error) {
		console.error(ERROR_EXCEPTION, error);
	}
};

export const removeTask = async (taskId: string): Promise<void> => {
	try {
		await axios.delete(`${BASE_URL}tasks/${taskId}`);
	} catch (error) {
		console.error('Wystąpił błąd przy usuwaniu taska o id:', taskId);
	}
};

export const updateTaskDoneStatus = async (taskId: number, done: boolean) => {
	try {
		const updatedTask = {
			done,
		};

		await axios.patch<Task, Task>(`${BASE_URL}tasks/${taskId}`, updatedTask);
	} catch (error) {
		console.error(`Wystąpił błąd podczas aktualizacji zadania o id ${taskId}:`, error);
	}
};
