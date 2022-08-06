import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { updateTodos } from "../../store/actions";
import './AddTask.scss'

function AddTask() {
	const [inputValue, setInputValue] = useState('');
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	
	function changeValue(e) {
		setInputValue(e.target.value);
	}

	function createTask(e) {
		e.preventDefault()

		const newTask = {
			id: Math.random().toString(36).substring(2, 9),
			task: inputValue,
			status: false
		}

		todos.push(newTask);

		dispatch(updateTodos([...todos]))

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