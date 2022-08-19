<template>
  <form class="addTodo" @submit.prevent="addTodoHandler">
    <input
      type="text"
      :placeholder="
        store.todoList.length === 0
          ? 'Добавьте свою первую задачу'
          : 'Начните вводить задачу'
      "
      v-model="title"
      maxlength="50"
    />
  </form>
</template>

<script setup>
import { useTodoStore } from "@/store/todo";
import { ref } from "vue";

const store = useTodoStore();

let title = ref("");

const addTodoHandler = () => {
  const newItem = {
    id: Date.now(),
    title: title.value,
    isFinished: false,
  };
  store.addTodo(newItem);
  title.value = "";
};
</script>
