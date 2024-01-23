// Referencias HTML

import { todoList } from '../index'
import { Todo } from '../class'

const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const btnBorrarTodo = document.querySelector('.clear-completed')
const ulFilter = document.querySelector('.filters')
const anchorFiltros = document.querySelectorAll('.filtro')

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
                <li class="${todo.completado ? 'completed' : ''}" data-id="${
    todo.id
  }">
                    <div class="view">
                        <input class="toggle" type="checkbox" ${
                          todo.completado ? 'checked' : ''
                        }>
                        <label>${todo.tarea}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
                </li>`

  const div = document.createElement('div')

  div.innerHTML = htmlTodo

  divTodoList.append(div.firstElementChild)

  return div.firstElementChild
}

//Eventos

txtInput.addEventListener('keyup', (event) => {
  //   console.log(event)
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    // console.log(txtInput.value)
    const nuevoTodo = new Todo(txtInput.value)
    todoList.nuevoTodo(nuevoTodo)
    crearTodoHtml(nuevoTodo)
    txtInput.value = ''
    // console.log(todoList)
  }
})

divTodoList.addEventListener('click', (event) => {
  const nombreElemento = event.target.localName
  const todoElemento = event.target.parentElement.parentElement
  const todoId = todoElemento.getAttribute('data-id')

  if (nombreElemento.includes('input')) {
    todoList.marcarCompletado(todoId)
    todoElemento.classList.toggle('completed')
  } else if (nombreElemento.includes('button')) {
    todoList.eliminarTodo(todoId)
    divTodoList.removeChild(todoElemento)
  }
})

btnBorrarTodo.addEventListener('click', () => {
  todoList.eliminarCompletados()
  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const elemento = divTodoList.children[i]
    // console.log(elemento)
    if (elemento.classList.contains('completed')) {
      divTodoList.removeChild(elemento)
    }
  }
})

ulFilter.addEventListener('click', (event) => {
  //   console.log(event.target.text)
  const filtro = event.target.text
  if (!filtro) return

  anchorFiltros.forEach((elem) => elem.classList.remove('selected'))
  //   console.log(event.target)
  event.target.classList.add('selected')

  for (const elemento of divTodoList.children) {
    // console.log(elemento)
    elemento.classList.remove('hidden')
    const completado = elemento.classList.contains('completed')

    switch (filtro) {
      case 'Pendientes':
        if (completado) {
          elemento.classList.add('hidden')
        }
        break
      case 'Completados':
        if (!completado) {
          elemento.classList.add('hidden')
        }
        break
    }
  }
})
