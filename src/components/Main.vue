<template>
  <div class="main">
    <div class="notepad-container">
      <p class="notepad-title">Notepad Application</p>
      <div class="notepad-content">
        <div class="editor">
          <div class="editor-notepad-title">
            <Input label="Notepad Title"
                   value=""
                   placeholder="My Notepad Title..."
                   :errorMessage="notepadTitleError"
                   v-model="notepadTitle"/>
          </div>
          <div class="editor-notes-container" v-if="notepadTitleSaved">
            <p class="editor-notes-title">My Notes</p>
            <div class="editor-notes-content">
              <div class="editor-notes-inputs-container">
                <Input placeholder="Enter note title..." v-model="newNote.title" :error-message="newNoteError.title"/>
                <Textarea placeholder="Enter note..." v-model="newNote.text" :error-message="newNoteError.text"/>
                <Button type="success" value="Add" class="note-add-button" @click="addNotes()"/>
              </div>
              <div class="editor-notes-button-container"></div>
            </div>
            <div class="editor-notes-content" v-for="(note, idx) in notes" :key="idx">
              <div class="editor-notes-inputs-container">
                <Input placeholder="Enter note title..." :value="note.title"/>
                <Textarea placeholder="Enter note..." :value="note.text"/>
              </div>
              <div class="editor-notes-button-container">
                <Button type="danger" value="Delete" @click="removeNotes(idx)"/>
              </div>
            </div>
          </div>

        </div>
        <div class="settings">
          <Button type="primary" value="View Stats" @click="viewStats"/>
          <Button type="info" value="Save" @click="saveNotepadTitle"/>
          <Button type="danger" value="Delete" @click="removeNotepad"/>
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
      notepadTitle: '',
      newNote: {
        title: '',
        text: '',
      },
      notes: [],
      notepadTitleSaved: false,
      notepadTitleError: '',
      newNoteError: {
        title: '',
        text: '',
      }
    }
  },
  methods: {
    validate() {
      if (!this.newNote.title) {
        this.newNoteError.title = "Title can't be empty";
        return false;
      }
      if (this.newNote.title > 255) {
        this.newNoteError.title = "Title can't be more 255";
        return false;
      }
      if (!this.newNote.text) {
        this.newNoteError.text = "Text can't be empty";
        return false;
      }
      if (this.newNote.title > 1000) {
        this.newNoteError.text = "Text can't be more 255";
        return false;
      }
      this.newNoteError = {
        title: '',
        text: '',
      };
      return true;
    },
    validateNotepad() {
      if (!this.notepadTitle) {
        this.notepadTitleError = "Can't be empty";
        return false;
      }
      if (this.notepadTitle.length > 255) {
        this.notepadTitleError = "Can't be more 255";
        return false;
      }
      this.notepadTitleError = "";
      return true;
    },
    saveNotepadTitle() {
      if (!this.validateNotepad()) {
        return;
      }
      const parsed = JSON.stringify(this.notepadTitle);
      localStorage.setItem('notepad', parsed);
      this.notepadTitleSaved = true;
    },
    removeNotepad() {
      localStorage.removeItem('notepad');
      localStorage.removeItem('notes');
      this.notepadTitle = '';
      this.notes = [];
      this.notepadTitleSaved = false;
    },
    addNotes() {
      if (!this.notepadTitle || !this.validate(this.newNote)) {
        return;
      }
      this.notes.push(this.newNote);
      this.newNote = {
        title: '',
        text: '',
      };
      this.saveNotes();
    },
    removeNotes(x) {
      this.notes.splice(x, 1);
      this.saveNotes();
    },
    saveNotes() {
      const parsed = JSON.stringify(this.notes);
      localStorage.setItem('notes', parsed);
    },
    closeModal() {
      this.isModalVisible = false;
    },
    viewStats() {
      this.isModalVisible = true;
    }
  },
  mounted() {
    if (localStorage.getItem('notepad')) {
      try {
        this.notepadTitle = JSON.parse(localStorage.getItem('notepad'));
        this.notepadTitleSaved = true;
      } catch(e) {
        localStorage.removeItem('notepad');
      }
    }
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      } catch(e) {
        localStorage.removeItem('notes');
      }
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
