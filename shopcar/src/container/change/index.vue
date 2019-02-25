<template>
  <div>
    <h1>{{title}}</h1>
    <h1>双向数据绑定</h1>
    <input type="text" v-model="val">
    <br>
    <h2>{{val}}</h2>
    <button @click="btn">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "你好",
      val: "1234"
    };
  },
  methods: {
    btn() {
      this.title = "hello world";
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.title = "啊哈";
    }, 2000);
  }
};
</script>
<style scoped  lang="">
</style>