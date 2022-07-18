import { useState } from 'react';
import './Todo.scss'

function Todo(props){
	const task = props.todo.task; 
	const id = props.todo.id;
	const [status, setStatus] = useState(props.todo.status);
	const todos = props.todos;
	const setTodos = props.setTodos;

	function deleteTask(e) {
		const newTodos = [];
		
		todos.map((todo) => {
			if(todo.id !== e.target.closest('li').dataset.id){
				newTodos.push(todo);
			}
		});

		setTodos(newTodos);
	} 

	function changeStatus(e) {
		setStatus(status === 'in-progress' ? 'done' : 'in-progress');
	}

	return (
		<li className={`todos-item ${status}`} data-id={id}>
			<p className={`todos-item-text ${status}`}>{task}</p>
			<div className="buttons">
			<button onClick={changeStatus} className={`btn ${status}`}>Change Status</button>
			<button onClick={deleteTask} className={`btn ${status}`}>Delete</button>
			</div>
		</li>
	)
}

export default Todo;