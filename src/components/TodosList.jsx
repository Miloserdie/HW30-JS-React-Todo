import Todo from './Todo';
import './TodosList.scss'

function TodosList(props) {
	const todos = props.todos;
	const setTodos = props.setTodos;

	return (
		<ul className='todos-list'>
			{todos.map((todo) => {
				return (
					<Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id}></Todo>
				)
			})}
		</ul>
	)
} 

export default TodosList;