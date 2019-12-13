<template>
  <div
    class="page-article"
    v-if="model"
  >
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="text-blue icon-Back">
        &lt;
      </div>
      <strong class="flex-1 text-blue pl-2">
        {{model.title}}
      </strong>
      <div class="text-grey fs-xs">
        2019-12-12
      </div>
    </div>
    <div
      v-html="model.body"
      class="px-3 body fs-lg"
    ></div>
    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link
          tag="div"
          class="py-2 text-dark fs-lg"
          v-for="item in model.related"
          :key="item.id"
          :to="`/articles/${item._id}`"
        >
          {{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true }
  },
  data() {
    return {
      model: null
    }
  },
  watch: {
    // id:'fetch'
    id() {
      this.fetch()
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .icon-Back {
    font-size: 1.692308rem;
  }
  .body {
    img {
      max-width: 100% !important;
      height: auto;
    }
    iframe {
      width: 100% !important;
      height: auto;
    }
  }
}
</style>
