<template>
    <div>
        <h1>{{account.user.firstName}}!</h1>
         <p>
            <router-link to="/login" class = "bg-primary">Logout</router-link>
        </p>
         <div class="bg-info">
         <p>Book Description: {{book.volumeInfo.description}}</p>
         <p>Title: {{book.volumeInfo.description}}</p>
         </div>

        <h3>Complete details of the book</h3>
        <pre> {{ book | jsonPretty}}</pre>

    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            id: state => state.id,
            book: state => state.book.aBook
        }),
    },
    created () {
        this.getBookById(this.$route.params.id);
    },
    methods: {
        ...mapActions('book', {
            getBookById: 'getById'
        })
    }
};
</script>