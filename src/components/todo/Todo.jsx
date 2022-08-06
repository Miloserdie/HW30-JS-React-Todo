import './Todo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodos } from '../../store/actions';

function Todo(props){
	const todo = props.todo;
	const task = props.todo.task; 
	const id = props.todo.id;
	const status = props.todo.status ? 'done' : 'in-progress';
	const todos = useSelector((state) => state.todos)
	const dispatch = useDispatch();

	function deleteTask() {
		const newTodos = todos.filter((todo) => {
			return todo.id !== id;
		})

		dispatch(updateTodos(newTodos))
	} 

	function changeStatus() {
		todo.status = !todo.status

		dispatch(updateTodos([...todos]))
	}

	return (
		<li className={`todos-item ${status}`}>
			<p className={`todos-item-text ${status}`}>{task}</p>
			<div className="buttons">
				<button onClick={changeStatus} className={`btn ${status}`}>Change Status</button>
				<button onClick={deleteTask} className={`btn ${status}`}>Delete</button>
			</div>
		</li>
	)
}

export default Todo;