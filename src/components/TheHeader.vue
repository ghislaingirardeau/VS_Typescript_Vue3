<script setup lang="ts">
import FileNotesIcon from '@/assets/icons/file-notes.svg';

// -------------------------- CUSTOM DIRECTIVE --------------------------
// should only be used when the desired functionality can only be achieved via direct DOM manipulation.
// name of directive will match v-purple on the bind element which is the params (el)
const vItalic = (el) => {
  console.log(el);
  el.style.fontStyle = 'italic';
};

// DIRECTIVE WITH PARAMS
const vColors = (el: HTMLElement, bindings: any) => {
  const colors = bindings.value;
  let i = 0;
  setInterval(() => {
    el.style.color = colors[i];
    i++;
    if (i === colors.length) i = 0;
  }, 1000);
};
</script>
<template>
  <h1
    class="text-6xl flex items-center"
    v-italic
    v-colors="['blue', 'green', 'yellow']">
    <FileNotesIcon
      width="80"
      class="mr-5" />
    My Journal
  </h1>
</template>
