<template>
  <div class="column">
    <h1>are you new?</h1>
    <form v-on:submit.prevent="register">
      <p>username </p>
      <input class="narrow" v-model="username" placeholder="username">
      <p>make account</p>
      <input class="wide" v-model="name" placeholder="name"><br/>
      <input class="wide" v-model="email" placeholder="email"><br/>
      <input class="wide" type="password" v-model="password" placeholder="password"><br/>
      <button class="alternate" type="submit">Sign Up</button>
    </form>
    <p class="error">{{registerError}}</p>
  </div>
</template>

<script>
 export default {
   name: 'WelcomePage',
   data () {
     return {
       username: '',
       email: '',
       password: '',
       name: '',
     }
   },
   computed: {
     registerError: function() {
       return this.$store.getters.registerError;
     },
   },
   methods: {
     register: function() {
       this.$store.dispatch('register',{
	 username: this.username,
         email: this.email,
         password: this.password,
	 name: this.name,
       });
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 img {
     width: 100px;
 }
 h1 {
     margin-bottom: 0px;
     font-family: 'Advent Pro', sans-serif;
 }
 h2 {
     margin-top: 0px;
     font-size: 1.2em;
     font-weight: normal;
     margin-bottom: 50px;
 }
 .narrow {
     width: 170px;
 }
 .wide {
     width: 370px;
 }
</style>
