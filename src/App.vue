<template>
  <h1 class="">DOLGOPOLOV TODO</h1>
  <div class="container">
    <div class="wrapper">
      <AddTodo />
      <TodoList v-if="store.todoList.length" />
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/store/todo";
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";

const store = useTodoStore();
</script>

<style>
body {
  height: 100vh;
  background: linear-gradient(
      45deg,
      rgba(0, 252, 255, 1) 0%,
      rgba(253, 45, 227, 1) 100%
    )
    no-repeat;
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}
.container {
  background-color: #fff;
  width: 360px;
  border-radius: 30px;
}
input {
  width: 100%;
  margin: 5px 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.363);
  font-size: 15px;
}
input:focus-visible {
  outline: none;
}
.wrapper {
  margin: 20px;
  padding: 20px 0;
}
.btn {
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.363);
  cursor: pointer;
  height: 30px;
  user-select: none;
}
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  font-size: 15px;
}
.addTodo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  cursor: pointer;
  max-width: 220px;
}
.finished {
  text-decoration: line-through;
}
h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
}
</style>
