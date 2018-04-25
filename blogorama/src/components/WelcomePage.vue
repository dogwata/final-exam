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
       <el-form ref="form" :model="form">
        <h2>Entries</h2>
        <el-form-item>
        <el-input type="textarea" autosize placeholder="Enter blog post here" v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" v-on:click="addEntries">Submit</el-button>
         <el-button type="info" v-on:click="generate">Generate</el-button>
         <el-button type="default" v-on:click="clear">Clear</el-button>
         </el-form-item>
</el-form>
      
       <el-table :data="" empty-text="No Data" stripe style="width: 100%" :default-sort="{prop: 'votes', order: 'descending'}">
       <el-table-column width=30>
       <template slot-scope="scope">
       <el-button icon="el-icon-delete" label="Entries" type="text" v-on:click="deleteEntries(scope.row.id)"></el-button>
       </template>
</el-table-column>
      <el-table-column prop="timestamp" sortable label="Date" width="100"></el-table-column>
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
