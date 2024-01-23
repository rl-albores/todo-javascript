import './styles.css'

import { Todo, TodoList } from './class'
import { crearTodoHtml } from './js/componentes'

export const todoList = new TodoList()

// const tarea = new Todo('Aprender Js')

// todoList.nuevoTodo(tarea)

// console.log(todoList)

// crearTodoHtml(tarea)

// localStorage.setItem('mi-key', 'abc123')
// sessionStorage.setItem('mi-key', 'abc1234')

// setTimeout(() => {
//   localStorage.removeItem('mi-key')
// }, 1500)

// todoList.todos.forEach((todo) => {
//   crearTodoHtml(todo)
// })

todoList.todos.forEach(crearTodoHtml)

// const newTodo = new Todo('Holis again')
// todoList.nuevoTodo(newTodo)
// todoList.todos[0].imprimirClase()

// newTodo.imprimirClase()

console.log('todos ', todoList.todos)
