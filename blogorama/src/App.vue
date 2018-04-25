<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
 export default {
   name: 'App'
 }
</script>

<style>
 body {
     font-family: 'PT Serif', serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     color: #2c3e50;
     margin-top: 60px;
 }
 
 body {
  background-color: #D3D3D3;
  background: url(https://i.imgur.com/3FPsKzq.jpg);
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no;
  background-size: 100%;
	font-family: 'Catamaran', sans-serif;
  font-size: 16px;
  padding: 20px 100px 0px 100px;
	padding-left: 17%;
	padding-right: 17%;
	margin:0;
}

h1 {
    text-transform: uppercase;
    font-family: 'Catamaran', serif;
	font-size: 3em;
	text-align: center;
	color: #373F27;
	margin-bottom: 0;
}

h2 {
    font-style: bold;
    letter-spacing: 3px;
}

h4 {
    font-style: bold;
    letter-spacing: 3px;
}

h5 {
    text-transform: uppercase;
    font-family: 'Catamaran', serif;
	font-size: 2em;
	text-align: center;
	color: #373F27;
	margin-bottom: 0;
}

p {
    color: #636B46;
}

a:hover {
    color: #85b2a3;
}

#content {
	background-color: white;
	padding-top: 2%;
}

main {
	padding-left: 5%;
	padding-right: 5%;
	padding-bottom: 5%;
}

.quote {
	font-style: bold;
	text-align: center;
	font-size: 1.25em;
}

#front_image_wrap img {
	width: 100%;
}

footer {
	background-color: #000000;
	color: white;
	text-align: center;
	padding: 2%;
}

footer a {
	color: white;
}

.active {
    background-color: #CDA34F;
    color: white;
}

/* FORM */
.info {
	text-align: center;
	font-size: 1.25em;
}

form {
	margin-left: 15%;
	margin-right: 15%;
}

input[type=text], input[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ADD8E6;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    background-color: #003366;
    width: 100%;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #000080;
    color: white;
}

/* List */

ul {
    list-style: none;
}

li {
    text-align: center;
}

#container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: calc(100% - 60px);;
    margin: 30px;
}

body {
    margin: 0;
    font-family: Arial;
}

.box {
  display: flex;
  flex-wrap: wrap;
}

#logo img{
    margin: 0 auto;
    padding: 10px;
    display: block;
}

#images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .el-table .cell {
      word-break: normal;
      text-align: center;
  }

  .el-form {
    background: #EEE;
    padding: 20px;
    padding-left: 40px;
    padding-right: 40px;
    border-radius: 10px;
}

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 70px;
    color: rgb(243, 204, 193);
    line-height: 1;
    cursor: pointer;
    transition: all .3s ease;
  }

footer{
    padding: 20px;
}

</style>
