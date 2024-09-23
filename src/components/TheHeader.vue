<script setup lang="ts">
import FileNotesIcon from '@/assets/icons/file-notes.svg';

interface Directive extends HTMLElement {
  __ColorsInterval__: ReturnType<typeof setInterval>;
}

// -------------------------- CUSTOM DIRECTIVE --------------------------
// should only be used when the desired functionality can only be achieved via direct DOM manipulation.
// name of directive will match v-purple on the bind element which is the params (el)
const vItalic = (el) => {
  el.style.fontStyle = 'italic';
  console.log(el);
};

// DIRECTIVE WITH PARAMS
const vColors = (el: HTMLElement, bindings: any) => {
  const colors = bindings.value;

  // DIRECTIVE AVEC ARGUMENT ':slow'
  // argument peut etre recuperer dans la prop: 'binding.arg'
  const speeds: any = {
    slow: 2000,
    normal: 1000,
    fast: 500,
  };
  const speedName = bindings.arg || 'normal';
  const speed = speeds[speedName];
  //------------------------------------
  // DIRECTIVE AVEC MODIFIER '.underline'
  // le modifier est une propriété de l'objet bindings.modifiers qui aura pour valeur true
  // le modifier est une fonctionnalité spécifique >< de l'argument qui est un array d'options
  if (bindings.modifiers.underline) {
    el.style.textDecoration = 'underline';
  }
  if (bindings.modifiers.italic) {
    el.style.fontStyle = 'italic';
  }
  //------------------------------------

  let i = 0;
  setInterval(() => {
    el.style.color = colors[i];
    i++;
    if (i === colors.length) i = 0;
  }, speed);
};

// DIRECTIVE AVEC HOOKS
// si le component a une condition avec un if, on veut que l'event listerner ou le set interval ne continue pas
// si il est supprimé du DOM
const vColorsBis = {
  mounted(el: Directive, bindings: any) {
    console.log(bindings);
    const colors = bindings.value;
    const speeds: any = {
      slow: 2000,
      normal: 1000,
      fast: 500,
    };
    const speedName = bindings.arg || 'normal';
    const speed = speeds[speedName];
    if (bindings.modifiers.underline) {
      el.style.textDecoration = 'underline';
    }
    if (bindings.modifiers.italic) {
      el.style.fontStyle = 'italic';
    }
    let i = 0;
    // Pour clear interval, je mets le setInterval dans une nouvelle prop de "el"
    // underscore est la convention de nommage d'une nouvelle prop d'un element DOM
    el.__ColorsInterval__ = setInterval(() => {
      el.style.color = colors[i];
      i++;
      if (i === colors.length) i = 0;
    }, speed);
  },
  // si l'élément est retiré avec un if, stop l'interval avec unmounted
  unmounted(el: Directive) {
    clearInterval(el.__ColorsInterval__);
  },
};
</script>
<template>
  <h1
    class="text-6xl flex items-center"
    v-colors:slow.underline="['blue', 'green', 'yellow']">
    <FileNotesIcon
      width="80"
      class="mr-5" />
    My Journal
  </h1>
  <span v-italic> by Gg web dev </span>
  <h2
    class="text-6xl flex items-center"
    v-colors-bis:fast.italic="['blue', 'green', 'yellow']">
    Store stories
  </h2>
</template>
