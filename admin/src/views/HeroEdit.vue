<template>
  <div>
    <h1>{{id?'编辑':'新建'}}英雄</h1>
    <el-form
      label-width="120px"
      @submit.native.prevent="save"
    >
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item label="名称">
            <el-input
              placeholder="请输入内容"
              v-model="model.name"
            ></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input
              placeholder="请输入内容"
              v-model="model.title"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="this.$http.defaults.baseURL+'/upload'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img
                v-if="model.avatar"
                :src="model.avatar"
                class="avatar"
              >
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"
              ></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <template>
              <el-select
                v-model="model.categories"
                placeholder="请选择"
                multiple
              >
                <el-option
                  v-for="item in categories"
                  :label="item.name"
                  :value="item._id"
                  :key="item._id"
                >
                </el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              :max=9
              placeholder="请输入内容"
              v-model="model.scores.difficult"
              show-score
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              :max=9
              placeholder="请输入内容"
              v-model="model.scores.skills"
              show-score
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              :max=9
              placeholder="请输入内容"
              v-model="model.scores.attack"
              show-score
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              :max=9
              placeholder="请输入内容"
              v-model="model.scores.survive"
              show-score
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <template>
              <el-select
                v-model="model.items1"
                placeholder="请选择"
                multiple
              >
                <el-option
                  v-for="item in items"
                  :label="item.name"
                  :value="item._id"
                  :key="item._id"
                >
                </el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item label="逆风出装">
            <template>
              <el-select
                v-model="model.items2"
                placeholder="请选择"
                multiple
              >
                <el-option
                  v-for="item in items"
                  :label="item.name"
                  :value="item._id"
                  :key="item._id"
                >
                </el-option>
              </el-select>
            </template>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input
              v-model="model.usageTips"
              placeholder="请输入内容"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input
              v-model="model.battleTips"
              placeholder="请输入内容"
              type="textarea"
            ></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input
              v-model="model.teamTips"
              placeholder="请输入内容"
              type="textarea"
            ></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane
          label="技能"
          name="skills"
        >
          <el-button
            size="small"
            @click="model.skills.push({})"
          > <i class="el-icon-plus"></i> 添加技能</el-button>
          <el-row
            type="flex"
            style="flex-wrap:wrap"
          >
            <el-col
              :md="12"
              v-for="(item,i) in model.skills"
              :key="i"
            >
              <el-form-item label="名称">
                <el-input
                  placeholder="请输入内容"
                  v-model="item.name"
                ></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :show-file-list="false"
                  :on-success="res => $set(item,'icon',res.url)"
                >
                  <img
                    v-if="item.icon"
                    :src="item.icon"
                    class="avatar"
                  >
                  <i
                    v-else
                    class="el-icon-plus avatar-uploader-icon"
                  ></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input
                  type="textarea"
                  v-model="item.description"
                ></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input
                  type="textarea"
                  v-model="item.tips"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="danger"
                  size="mini"
                  @click="model.skills.splice(i,1)"
                >删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem">
        <el-button
          type="primary"
          native-type="submit"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      categories: [],
      model: {
        avatar: '',
        scores: {
          difficult: 0
        },
        skills: []
      },
      items: []
    }
  },
  created() {
    this.id && this.fetch()
    this.fetchCategories()
    this.fetchItems()
  },
  methods: {
    async save() {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/heros/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/heros', this.model)
      }
      this.$router.push('/heros/list')
      this.$message.success('保存成功')
      console.log(res)
    },
    async fetch() {
      const res = await this.$http.get(`rest/heros/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    },
    afterUpload(res) {
      this.$set(this.model, 'avatar', res.url)
      console.log(res)
      // this.model.icon = res.url
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async fetchItems() {
      const res = await this.$http.get(`rest/items`)
      this.items = res.data
    }
  }
}
</script>
