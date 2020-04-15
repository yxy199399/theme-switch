<template>
  <div class="home">
    <el-button type="primary">111</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: process.env.VUE_APP_BASE_API
    };
  },
  created() {
    console.log(process.env.VUE_APP_BASE_API);
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 1000px;
}
</style>
