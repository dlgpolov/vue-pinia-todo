<template>
  <div v-if="store.todoList.length">
    <div>
      <div class="todo" v-for="todo in store.getNotFinishedTodos">
        <TodoItem :todo="todo" />
      </div>
      <div class="todo" v-for="todo in store.getFinishedTodos">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
  <div v-else>
    <span>Сперва дабавьте задачу</span>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/store/todo";
import TodoItem from "./TodoItem.vue";

const store = useTodoStore();
</script>
