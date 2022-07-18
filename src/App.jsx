import { useState } from 'react';
import './App.css';
import TodosList from './components/TodosList';
import AddTask from './components/AddTask';

function App() {
	const [todos, setTodos] = useState([
		{id: 'y8mt86d', task: 'Eat', status: 'in-progress'},
		{id: 'cs06t6t', task: 'Sleep', status: 'in-progress'},
		{id: '236qdzo', task: 'Sit', status: 'in-progress'},
		{id: '85r2vdz', task: 'Relax', status: 'in-progress'}
	])

	return (
		<>
			<AddTask todos={todos} setTodos={setTodos}></AddTask>
			<TodosList todos={todos} setTodos={setTodos}></TodosList>
		</>
	)
}

export default App;