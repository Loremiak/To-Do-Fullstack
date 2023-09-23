import { Task } from '../../interface/task';
import './task-list.css';

interface TaskListProps {
	tasks: Task[];
	onDeleteTask: (id: number) => void;
	onToggleTask: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleTask }) => {
	return (
		<ul className='task-list'>
			{tasks.map(({ id, content, done }) => {
				return (
					<li className='list' key={id}>
						<span className={done ? 'completed' : ''}>{content}</span>
						<div className='input-button-container'>
							<input className='input-task-list' checked={done} type='checkbox' onChange={() => onToggleTask(id)} />
							<button className='button-task-list' onClick={() => onDeleteTask(id)}>
								Usuń
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
