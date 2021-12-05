<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog">
        <div class="chart-container">
          <LineChart name="Number of Gists" />
          <Button value="Load More" />
        </div>
        <div class="chart-container">
          <LineChart name="Number of Files" />
          <Button value="Load More" />
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
import LineChart from "./partials/LineChart";

export default {
  name: 'Modal',
  components: {
    Button,
    LineChart,
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
    padding: 20px;
    border-radius: 0.5rem;
    @include breakpoint(xs) {
      max-width: 90%;
    }
    .chart-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
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