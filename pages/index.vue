<template>
 <div class="container">
   <HeaderView />
   <h2 style="margin-top: 15px">Catálogo de películas de terror</h2>
	  <p>Este sitio web ofrece información de películas de terror.</p>
    <ul>
	  <li> <NuxtLink to="/peliculas_index">Información de peliculas</NuxtLink></li>
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