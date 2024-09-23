// POUR AVOIR UNE DIRECTIVE GLOBAL APPLICABLE DANS PLUSIEURS COMPONENT

export const vClickOutside = {
  mounted(el, binding) {
    el.__clickOutsideTextArea__ = (event) => {
      // contains => si event target est un child de el
      if (event.target !== el || !el.contains(event.target)) {
        // c'est la fonction passer à v-click-outside, et je lui passe el en argument
        binding.value(el);
      }
    };
    document.body.addEventListener('click', el.__clickOutsideTextArea__);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.__clickOutsideTextArea__);
  },
};
