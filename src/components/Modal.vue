<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog">
        <div class="chart-container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, consequuntur dolore ducimus esse excepturi fuga hic magnam necessitatibus nisi nostrum numquam odio pariatur qui? Ex expedita officia recusandae saepe ut.
        </div>
        <div class="close-button">
          <Button value="Close Stats" @click="close" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from "./partials/Button";

export default {
  name: 'Modal',
  components: {
    Button,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main";

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(123, 123, 123, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px gray;
    overflow-x: auto;
    display: flex;
    max-width: 50%;
    padding: 20px;
    border-radius: 0.5rem;
    @include breakpoint(xs) {
      max-width: 90%;
    }
    .chart-container {
      flex: 1;
    }
  }
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
</style>