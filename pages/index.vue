<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Información de películas de terror</h3>
     <p>Esta sección presenta información sobre películas de terror.</p>
   <ul>
     <li v-for="pelicula of peliculas" :key="pelicula.slug">
       <NuxtLink :to="{ name: 'peliculas-slug', params: { slug: pelicula.slug } }">{{pelicula.title}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>