<template>
  <div class="input-container">
    <label>
      <span class="input-label">{{ label }}</span>
      <input type="text"
             :name="name"
             :value="value"
             :placeholder="placeholder"
             @input="onInput"
             @change="onChange" />
    </label>
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
      required: false,
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    onChange(event) {
      this.$emit('change', event.target.value);
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main";

.input-container {
  input {
    display: block;
    width: 100%;
    padding: 0.3rem 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
    color: $textColor;
    background-color: $white;
    background-clip: padding-box;
    border: 1px solid $borderColor;
    border-radius: 0.25rem;
    &::placeholder {
      color: $placeholderColor;
    }
    &:focus {
      outline: 1px solid $borderColorDark;
    }
  }
  .input-label {
    display: block;
    font-size: $labelTextSize;
    margin-bottom: 10px;
  }
}
</style>