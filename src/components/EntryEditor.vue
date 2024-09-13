<script lang="ts" setup>
import EmojiField from '@/components/EmojiField.vue';
import ArrowCircleRight from '@/assets/icons/arrow-circle-right.svg';

import { ref, computed, onMounted } from 'vue';
import type { Ref } from 'vue';
import Entry from '@/types/Entry';
import type Emoji from '../types/Emoji';

import { inject } from 'vue';
import { userInjectionKey } from '../keyInjections';

const injectUser = inject(userInjectionKey);

// --------------------- DATA ---------------------
const body = ref('');
// const emoji: Ref<Emoji | null> = ref(null);
// OU (pas besoin de faire l'import dans ce cas)
const emoji = ref<Emoji | null>(null);
//variable will not change dynamicly so no need ref
const maxChars = 280;

// --------------------- TEMPLATE REFS ---------------------
const textArea = ref<HTMLTextAreaElement | null>(null);

onMounted(() => textArea.value?.focus());

// --------------------- COMPUTED ---------------------
// => explicit type can help to know what the computed should return
const charCount = computed<number>(() => body.value.length);

// --------------------- EVENT ---------------------
// defineEmits(["@create"]);
// OU pour donner un type à un event
const emit = defineEmits<{
  change: [id: number]; // nom + payload
  create: [entry: Entry];
}>();
// https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits

// --------------------- METHODS ---------------------
const handletextInput = (e: Event) => {
  const textArea = e.target as HTMLTextAreaElement;
  if (textArea.value.length < maxChars) {
    body.value = textArea.value;
  } else {
    body.value = textArea.value.substring(0, maxChars);
  }
};

const handleSubmit = () => {
  // je n'ai pas acces à $emit, donc mettre defineEmits dans une const emit que je peux appeler ensuite
  emit('create', {
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
    id: Math.random(),
    userId: 1,
  });
  body.value = '';
  emoji.value = null;
};
</script>
<template>
  <!-- si je veux appeler le emit dans le html <form class="entry-form" @submit.prevent="$emit('create', {...})"> -->
  <form class="entry-form" @submit.prevent="handleSubmit">
    <!-- value au lieu de v-model, pour récupérer l'event la value de l'input lors de l'event keyup -->
    <textarea
      ref="textArea"
      :value="body"
      :placeholder="`New Journal Entry for ${injectUser?.username || 'anonymous'}`"
      @keyup="handletextInput"
    />

    <EmojiField v-model="emoji" />

    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>

      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
