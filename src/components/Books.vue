<template>
    <div>
        <h1>Welcome {{account.user.firstName}}! to our bookstore</h1>
        <p>
            <router-link to="/login" class = "bg-primary">Logout</router-link>
        </p>
        <h3>Make your selection</h3>
        
        <ul v-if="books.items">
            <li v-for="book in books.items.items" :key="book.id">
               <router-link :to="{ path: 'books/' + book.id }">{{ book.volumeInfo ? book.volumeInfo.title : "" }}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            books: state => state.books.all
        })
    },
    created () {
        this.getAllBooks();
    },
    methods: {
        ...mapActions('books', {
            getAllBooks: 'getAll'
        })
    }
};
</script>
<style>
a {
  color: @link-color;
  text-decoration: none;

  &:hover {
    color: @link-hover-color;
    text-decoration: underline;
  }
}
</style>