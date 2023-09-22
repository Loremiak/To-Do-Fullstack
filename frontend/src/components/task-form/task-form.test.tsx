import { fireEvent, render, screen } from '@testing-library/react';
import { TaskForm } from './task-form';

describe('TaskForm Component', () => {
	it('should add a new task when submitted', () => {
		const onAddTask = jest.fn();
		render(<TaskForm onAddTask={onAddTask} />);

		const inputElement = screen.getByPlaceholderText('nazwa zadania');
		const addButtonElement = screen.getByText('Dodaj zadanie');

		fireEvent.change(inputElement, { target: { value: 'Zrobić zakupy' } });
		fireEvent.click(addButtonElement);

		expect(onAddTask).toBeCalledTimes(1);
		expect(onAddTask).toBeCalledWith('Zrobić zakupy');
	});
});
