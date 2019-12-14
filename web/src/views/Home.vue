<template>
  <div>
    <swiper
      :options="swiperOption"
      ref="mySwiper"
    >
      <!-- slides -->
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/4a383e2e30b71879d276b48d0923affd.jpeg"
          alt=""
          srcset=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/8af0478779a94d0a9278477fb9bff3e7.jpeg"
          alt=""
          srcset=""
        >
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/images/650b13c2e6299fee025307204aea297b.jpeg"
          alt=""
          srcset=""
        >
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination pagination-home text-right pr-3"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper 轮播图结束 -->
    <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div
          class="nav-item mb-3"
          v-for="n in 12"
          :key="n"
        >
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of icons -->
    <m-list-card
      icon="menu"
      title="新闻资讯"
      :categories="newsData"
    >
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          class="py-2 fs-lg d-flex"
          v-for="(news,i) in category.newsList"
          :key="i"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt |date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- 新闻资讯end -->
        <m-list-card
      icon="helmet-battle-li"
      title="英雄列表"
      :categories="heroData"
    >
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <router-link
          tag="div"
          :to="`/heros/${hero._id}`"
          class="p-2 text-center"
          style="width:20%"
          v-for="(hero,i) in category.heroList"
          :key="i"
        >
          <img class="w-100" :src="hero.avatar" alt="">
          <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <!-- 英雄列表end -->
    <m-card
      icon="menu"
      title="精彩视频"
    ></m-card>
    <m-card
      icon="menu"
      title="图文攻略"
    ></m-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  // 过滤器
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          // 因为有可能有很多swiper-pagination 的时候会冲突 所有重新起个名
          el: '.pagination-home'
        },
        autoplay: {
          delay: 1500
        }
      },
      newsData: [],
      heroData: []
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsData = res.data
    },
    async fetchHeroData() {
      const res = await this.$http.get('heros/list')
      this.heroData = res.data
    }
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroData()
  }
}
</script>

<style lang="scss" scope>
@import "../assets/scss/variables.scss";
.pagination-home {
  .swiper-pagination-bullet {
    background: map-get($colors, "white");
    opacity: 1;
    border-radius: 0.153846rem;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>
