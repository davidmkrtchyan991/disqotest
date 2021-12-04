<template>
  <div class="main">
    <Input label="Notepad Title" value="" placeholder="My Notepad Title..."/>

    <Input placeholder="Enter note title..."/>
    <Textarea placeholder="Enter note..."/>
    <Button type="success" value="Add" />
    <Button value="Add" />
  </div>
</template>

<script>
import Input from './partials/Input.vue'
import Textarea from './partials/Textarea.vue'
import Button from './partials/Button.vue'

export default {
  name: 'Main',
  components: {
    Input,
    Textarea,
    Button,
  }
}
</script>

<style scoped lang="scss">

</style>
