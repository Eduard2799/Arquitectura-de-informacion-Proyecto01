<script>
  export default {
    async asyncData({ $content, params }) {
      const productoras = await $content('productoras').fetch()
      return {
        productoras
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Información de productoras</h3>
     <p>Esta sección presenta información sobre productoras</p>
   <ul>
     <li v-for="productora of productoras" :key="productora.slug">
       <NuxtLink :to="{ name: 'productoras-slug', params: { slug: productora.slug } }">{{productora.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>