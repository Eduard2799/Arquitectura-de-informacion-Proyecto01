<script>
  export default {
    async asyncData({ $content, params }) {
      const pelicula = await $content('peliculas', params.slug).fetch()
      // const books = await $content('books').where({ peliculaId: params.slug }).fetch()
      return { pelicula }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+pelicula.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{pelicula.name}}</h4>
	   Nationality: {{pelicula.nationality}}; Launch: {{pelicula.launch_year}}<br>
	   Times: {{pelicula.times}}<br><br>
	   <b>Biography</b><br>
	    <nuxt-content :document="pelicula" />
	 </div>
	 <!-- <div class="three columns"></div>
	   <h5>Books</h5>
	   <ul>
	     <li v-for="book of books" :key="book.slug">
	       <NuxtLink :to="{ name: 'books-slug', params: { slug: book.slug } }">{{book.title}}</NuxtLink>
	     </li>
	   </ul>
   </div> -->
   <FooterView />
 </div>
</template>