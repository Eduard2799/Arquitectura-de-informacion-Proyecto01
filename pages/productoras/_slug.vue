<script>
  export default {
    async asyncData({ $content, params }) {
      const productora = await $content('productoras', params.slug).fetch()
      const peliculas = await $content('peliculas').where({ productoraId: params.slug }).fetch()
      return { productora, peliculas }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+productora.image">
     </div>
     <div class="six columns">
       <h4>{{productora.name}}</h4>
	   Country: {{productora.country}}; Founded: {{productora.founded}}<br>
	   Genere: {{productora.genere}}<br><br>
	   <b>History</b><br>
	    <nuxt-content :document="productora" />
	 </div>
	 <div class="three columns"></div>
	   <h5>peliculas</h5>
	   <ul>
	     <li v-for="pelicula of peliculas" :key="pelicula.slug">
	       <NuxtLink :to="{ name: 'peliculas-slug', params: { slug: pelicula.slug } }">{{pelicula.title}}</NuxtLink>
	     </li>
	   </ul>
   </div>
   <FooterView />
 </div>
</template>