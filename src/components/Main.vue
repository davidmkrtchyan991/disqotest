<template>
  <div class="main">
    <div class="notepad-container">
      <p class="notepad-title">Notepad Application</p>
      <div class="notepad-content">
        <div class="editor">
          <div class="editor-notepad-title">
            <Input label="Notepad Title" value="" placeholder="My Notepad Title..."/>
          </div>
          <div class="editor-notes-container">
            <p class="editor-notes-title">My Notes</p>
            <div class="editor-notes-content">
              <div class="editor-notes-inputs-container">
                <Input placeholder="Enter note title..."/>
                <Textarea placeholder="Enter note..."/>
                <Button type="success" value="Add" class="note-add-button"/>
              </div>
              <div class="editor-notes-button-container"></div>
            </div>

            <div class="editor-notes-content">
              <div class="editor-notes-inputs-container">
                <Input placeholder="Enter note title..." value="Sample note 1"/>
                <Textarea placeholder="Enter note..." value="Sample text 1"/>
              </div>
              <div class="editor-notes-button-container">
                <Button type="danger" value="Delete"/>
              </div>
            </div>

            <div class="editor-notes-content">
              <div class="editor-notes-inputs-container">
                <Input placeholder="Enter note title..." value="Sample note 2"/>
                <Textarea placeholder="Enter note..." value="Sample text 2"/>
              </div>
              <div class="editor-notes-button-container">
                <Button type="danger" value="Delete"/>
              </div>
            </div>

          </div>

        </div>
        <div class="settings">
          <Button type="primary" value="View Stats" @click="viewStats"/>
          <Button type="info" value="Save"/>
          <Button type="danger" value="Delete"/>
        </div>
      </div>
    </div>
    <Modal v-if="isModalVisible"
        @close="closeModal" />
  </div>
</template>

<script>
import Input from './partials/Input.vue'
import Textarea from './partials/Textarea.vue'
import Button from './partials/Button.vue'
import Modal from './Modal.vue'

export default {
  name: 'Main',
  components: {
    Input,
    Textarea,
    Button,
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
    viewStats() {
      this.isModalVisible = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/main";

.notepad-container {
  max-width: 1024px;
  margin: 0 auto;

  .notepad-title {
    font-size: $titleTextSize;
    margin: 20px;
  }

  .notepad-content {
    border: 1px solid $borderColor;
    border-radius: 0.5rem;
    background-color: $white;
    padding: 30px 25px;
    display: flex;
    @include breakpoint(xs) {
      flex-direction: column-reverse;
      margin: 15px;
    }

    .editor {
      flex: 1;

      .editor-notepad-title {
        max-width: 50%;
        @include breakpoint(xs) {
          max-width: 100%;
        }
      }

      .editor-notes-title {
        font-size: $headerTextSize;
        margin: 30px 0 10px;
      }

      .editor-notes-content {
        display: flex;
        @include breakpoint(xs) {
          flex-direction: column;
          margin-bottom: 20px;
        }

        .editor-notes-inputs-container {
          flex: 1;
          margin-bottom: 20px;
          @include breakpoint(xs) {
            width: 100%;
          }
        }

        .editor-notes-button-container {
          flex: 0 0 100px;
          margin-top: 8px;
          margin-left: 20px;
          @include breakpoint(xs) {
            flex: 0;
            margin-left: 0;
            margin-top: 0;
          }
        }

        .note-add-button {
          margin-top: 15px;
        }
      }
    }

    .settings {
      display: flex;
      flex: 0 0 300px;
      flex-direction: row;
      justify-content: space-around;
      @include breakpoint(xs) {
        flex: 0 0 60px;
        justify-content: space-around;
      }
    }
  }
}
</style>
