<template>
  <v-app>
    <v-app-bar color="teal-darken-4" :elevation="5">
      <div class="d-flex align-center mr-2">
        <v-btn color="white" to="/" class="mx-5">
          Главная </v-btn>
      </div>

      <v-btn to="/comments/">
        Комментарии</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "app",
  };
</script>

