<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";

import { reactive, provide, onMounted } from "vue";
import { userInjectionKey } from "./keyInjections";

import User from "./types/User";
import Entry from "./types/Entry";

// --------------------- PROVIDE & INJECT -----------------------
// to make the variable accessible to all children of the component
const user: User = reactive({
  id: 1,
  username: "gigi",
  settings: [],
});

provide(userInjectionKey, user);

// --------------------- DATAS -----------------------

const cards = reactive<Entry[]>([]);

// --------------------- FUNCTION ---------------------
const handleCreateEntry = (entry: Entry) => {
  cards.unshift(entry);
  console.log(entry);
};
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />

    <EntryEditor @create="handleCreateEntry" />

    <ul>
      <li v-for="card in cards" :key="card.id">
        <EntryCard :entry="card" />
      </li>
    </ul>
  </main>
</template>
