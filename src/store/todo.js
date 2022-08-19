import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => {
      return { 
        todoList: [
        {
          id: 1,
          title: 'Посмотреть резюме',
          isFinished: true,
        },
        {
          id: 2,
          title: 'Посмотреть код',
          isFinished: true,
        },
        {
          id: 3,
          title: 'Позвать на собеседование',
          isFinished: false,
        },
        {
          id: 4,
          title: 'Отправить оффер',
          isFinished: false,
        },
      ],
      }
    },
    getters: {
      getFinishedTodos(state) {
        return state.todoList.filter((f) => { return f.isFinished == true })
      },
      getNotFinishedTodos(state) {
        return state.todoList.filter((f) => { return f.isFinished == false })
      },
    },
    actions: {
      addTodo(el) {
        if (this.todoList.length < 10 && el.title.length > 0) {
          this.todoList.push(el)
          console.log(this.todoList.length)
        }
      },
      removeTodo(id) {
        this.todoList = this.todoList.filter((f) => { return f.id !== id })
      },
      changeIsFinishedTodo(id) {
        this.todoList = this.todoList.map((todo)=>todo.id == id ? {...todo, isFinished: !todo.isFinished} : {...todo} );
      }
    },
  })