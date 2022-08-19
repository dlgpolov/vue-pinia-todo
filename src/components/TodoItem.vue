<template>
  <div
    class="title"
    @click="store.changeIsFinishedTodo(todo.id)"
    :class="{ finished: todo.isFinished }"
  >
    {{ todo.title }}
  </div>
  <div>
    <button class="btn" @click="store.removeTodo(todo.id)">Удалить</button>
  </div>
</template>

<script setup>
import { useTodoStore } from "@/store/todo";

defineProps({ todo: Object });

const store = useTodoStore();
</script>
