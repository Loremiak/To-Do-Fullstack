import { Task } from '../../interface/task';
import './task-list.css';

interface TaskListProps {
	tasks: Task[];
	onDeleteTask: (id: number) => void;
	onToggleTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleTask }) => {
	return (
		<ul>
			{tasks.map(({ id, content, done }) => {
				return (
					<li key={id}>
						<span className={done ? 'completed' : ''}>{content}</span>
						<button onClick={() => onDeleteTask(id)}>Usuń</button>
						<input checked={done} type='checkbox' onChange={() => onToggleTask(id)} />
					</li>
				);
			})}
		</ul>
	);
};
