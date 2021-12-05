<template>
  <div class="textarea-container">
    <label>
      <span class="textarea-label">{{ label }}</span>
      <textarea :name="name"
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
  name: 'Textarea',
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

.textarea-container {
  textarea {
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
    resize: none;
    height: 100px;
    &::placeholder {
      color: $placeholderColor;
    }
    &:focus {
      outline: 1px solid $borderColorDark;
    }
  }
  .textarea-label {
    display: block;
    font-size: $labelTextSize;
    margin-bottom: 10px;
  }
}
</style>