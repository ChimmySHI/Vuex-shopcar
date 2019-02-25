<template>
  <div class="wrap">
    <router-link to="/cars">
      <button>查看购物车</button>
    </router-link>
    <div class="shoplist" v-for="(item,index) in shopList" :key="index">
      <dl>
        <dt>
          <img :src="item.url" alt srcset>
        </dt>
        <dd>
          <h2>名称：{{item.name}}</h2>
          <h3>价格：{{item.price}}元/斤</h3>
          <button @click="addCars(item)">加入购物车</button>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      arr: []
    };
  },
  computed: {
    ...mapState({
      shopList: state => state.list
    })
  },
  mounted() {
    this.$store.dispatch("shopcar");
  },
  methods: {
    addCars(item) {
      if (this.arr.includes(item)) {
        item.count++;
      } else {
        this.arr.push(item);
        item.count = 1;
      }
      this.$store.commit("cars", this.arr);
      console.log(this.$store.state.cars);
    }
  }
};
</script>
<style scoped  lang="">
.wrap {
  width: 100%;
  height: 100%;
}
.shoplist {
  width: 100%;
  height: 100%;
}
.shoplist dl {
  display: flex;
  width: 90%;
  height: 100%;
}
.shoplist dl dt {
  width: 30%;
  height: auto;
}
.shoplist dl dt img {
  width: 100%;
  height: auto;
}
.shoplist dl dd {
  flex: 1;
}
</style>