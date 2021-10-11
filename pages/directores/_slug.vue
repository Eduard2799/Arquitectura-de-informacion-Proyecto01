<script>
  export default {
    async asyncData({ $content, params }) {
      const director = await $content('directores', params.slug).fetch()
      const peliculas = await $content('peliculas').where({ directorId: params.slug }).fetch()
      return { director, peliculas }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+director.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
       <h4>{{director.name}}</h4>
	   Nationality: {{director.nationality}}; Born: {{director.birth_year}}<br>
	   Fields: {{director.fields}}<br><br>
	   <b>Biography</b><br>
	    <nuxt-content :document="director" />
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