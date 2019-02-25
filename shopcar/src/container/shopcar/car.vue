<template>
  <div class="warp">
    <div class="shoplist" v-for="(item,idnex) in carList" :key="idnex">
      <dl>
        <dt>
          <img :src="item.url" alt srcset>
        </dt>
        <dd>
          <p>名称：{{item.name}}</p>
          <p>单价：{{item.price}}元/斤</p>
          <p>价格：{{item.count*item.price}}</p>
          <div class="price">
            <button @click="pass(item)">-</button>
            <p>{{item.count}}</p>
            <button @click="add(item)">+</button>
          </div>
        </dd>
      </dl>
    </div>
    <div class="all">
      <p>总价：{{all}}</p>
      <p>总数：{{num}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      carList: state => state.cars
    }),
    all() {
      let sum = 0;
      this.carList.map(i => {
        sum += i.count * i.price;
      });
      return sum.toFixed(2);
    },
    num() {
      let num = 0;
      this.carList.map(i => {
        num += i.count;
      });
      return num;
    }
  },
  methods: {
    add(item) {
      this.carList.map(i => {
        if (item.id === i.id) {
          i.count++;
        }
      });
      this.$store.commit("cars", this.carList);
    },
    pass(item) {
      this.carList.map(i => {
        if (item.id === i.id) {
          i.count--;
          if (i.count <= 0) {
            i.count = 0;
          }
        }
      });
      this.$store.commit("cars", this.carList);
    }
  }
};
</script>
<style scoped  lang="">
.wrap {
  width: 100%;
  height: 100%;
  font-size: 14px;
}
.shoplist {
  width: 100%;
  height: auto;
}
.shoplist dl {
  display: flex;
  width: 90%;
  height: 20%;
}
.shoplist dl dt {
  width: 40%;
  height: auto;
}
.shoplist dl dt img {
  width: 100%;
  height: auto;
}
.shoplist dl dd {
  line-height: 1;
  flex: 1;
}
.price {
  display: flex;
  align-items: center;
}
.price button {
  margin: 0 10px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  background: #ffff;
  border: 1px solid orangered;
}
.all {
  position: fixed;
  bottom: 0;
}
</style>