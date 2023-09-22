import { fireEvent, render, screen } from '@testing-library/react';
import { TaskList } from './task-list';

const mockedTask = [
	{
		id: 1,
		content: 'Pranie',
		done: false,
	},
	{
		id: 2,
		content: 'Spacer z psem',
		done: true,
	},
];

describe('TaskList Component', () => {
	it('should render a list of task', () => {
		const onDeleteTask = jest.fn();
		const onToggleTask = jest.fn();

		render(<TaskList tasks={mockedTask} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />);

		const task1 = screen.getByText('Pranie');
		const task2 = screen.getByText('Spacer z psem');

		expect(task1).toBeInTheDocument();
		expect(task2).toBeInTheDocument();
	});

	it('should delete task after "Usuń" button is clicked', () => {
		const onDeleteTask = jest.fn();
		const onToggleTask = jest.fn();

		render(<TaskList tasks={mockedTask} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />);

		const removeButtonsElement = screen.getAllByText('Usuń');

		fireEvent.click(removeButtonsElement[0]);

		expect(onDeleteTask).toHaveBeenCalledTimes(1);
		expect(onDeleteTask).toHaveBeenCalledWith(1);
	});

	it('should mark task as done when checkbox is clicked', () => {
		const onDeleteTask = jest.fn();
		const onToggleTask = jest.fn();

		render(<TaskList tasks={mockedTask} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />);

		const checkboxesElement = screen.getAllByRole('checkbox');

		fireEvent.click(checkboxesElement[0]);

		expect(onToggleTask).toHaveBeenCalledTimes(1);
		expect(onToggleTask).toHaveBeenCalledWith(1);
	});
});
