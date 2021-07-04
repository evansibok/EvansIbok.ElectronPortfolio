<template>
  <div>
    <h3 class="project mt5 mb5">{{ user }}.ElectronPortfolio</h3>
    <h3 class="created mt5 mb5">Created by <span class="user">{{ user }}</span></h3>
    <div class="ma3 mb5">
      <a class="details-link ma5" href="https://github.com/evansibok" target="_blank">GitHub</a>

      <a class="details-link ma5" href="https://linkedin.com/in/evansibok" target="_blank">LinkedIn</a>

      <a class="details-link ma5" href="mailto:evansibok@gmail.com">Email</a>

      <a class="details-link ma5" href="https://drive.google.com/file/d/1VKuBpj9zFF2rQ4Lb4MkhURL3m0LVDdHB/view?usp=sharing" target="_blank">Resume</a>
    </div>
  </div>
  <div>

  </div>
</template>

<script>
export default {
  name: "MyDetails",
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data: () => ({}),
};
</script>

<style scoped>
.details-link {
  color: #54b946;
  font-size: 14px;
  text-decoration: underline;
}
.user {
  color: #54b946;
}
.created {
  font-size: 14px;
}
.project {
  font-size: 16px;
}
</style>