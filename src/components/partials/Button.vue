<template>
  <div class="button-container">
    <button @click="onClick" type="button" :class="type">{{value}}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary'
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', event.target.value);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main";

.button-container {
  button {
    display: block;
    padding: 0.43rem 0.8rem;
    font-size: $buttonTextSize;
    line-height: 1.5;
    border-radius: 0.25rem;
    cursor: pointer;
    &.primary {
      background-color: $white;
      color: $textColor;
      border: 1px solid $borderColorDark;
      font-weight: 500;
    }
    &.success {
      background-color: $green;
      color: $white;
      border: 1px solid $green;
    }
    &.info {
      background-color: $blue;
      color: $white;
      border: 1px solid $blue;
    }
    &.danger {
      background-color: $red;
      color: $white;
      border: 1px solid $red;
    }
  }
}
</style>