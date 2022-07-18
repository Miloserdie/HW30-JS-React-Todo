import { useState } from "react";
import './AddTask.scss'

function AddTask(props) {
	const [inputValue, setInputValue] = useState('')
	const todos = props.todos;
	const setTodos = props.setTodos;
	
	function changeValue(e) {
		setInputValue(e.target.value);
	}

	function createTask(e) {
		e.preventDefault()

		const newTodos = {
			id: Math.random().toString(36).substring(2, 9),
			task: inputValue,
			status: 'in-progress'
		}

		setTodos([...todos, newTodos]);

		setInputValue('');
	}
	
	return(
		<>
			<form className="task-form" action="">
				<input onChange={changeValue} className="task-input" type="text" value={inputValue}/>
				<button onClick={createTask} className="task-btn btn">Add Task</button>
			</form>
		</>
	)
}

export default AddTask;