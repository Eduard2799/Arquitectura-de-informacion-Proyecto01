<script>
  export default {
    async asyncData({ $content, params }) {
      const pelicula = await $content('peliculas', params.slug).fetch()
      const director = await $content('directores').where({ id: pelicula.directorId }).only(['name']).fetch()
      const productora = await $content('productoras').where({ id: pelicula.productoraId }).only(['name']).fetch()
      return { pelicula, director, productora }
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
       <h4>{{pelicula.title}}</h4>
	   by <NuxtLink :to="'/directores/'+pelicula.directorId">{{director[0].name}}</NuxtLink><br>
	   Year: {{pelicula.year}}; Duration: {{pelicula.duration}}; 
	   Language: {{pelicula.language}};<br>
	   published by <NuxtLink :to="'/productoras/'+pelicula.productoraId">{{productora[0].name}}</NuxtLink><br><br>
	   <b>Description</b><br>
	    <nuxt-content :document="pelicula" />
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>