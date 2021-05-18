<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Books msg="Welcome to Bookstore App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Books from '@/components/Books.vue'

export default {
  name: 'Home',
  components: {
    Books
  }
}
</script>
