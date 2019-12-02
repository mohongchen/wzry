<template>
  <div>
    <h1>{{id?'编辑':'新建'}}英雄</h1>
    <el-form
      label-width="120px"
      @submit.native.prevent="save"
    >
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
        <el-input
          placeholder="请输入内容"
          v-model="model.scores.difficult"
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
      <el-form-item>
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
        scores: {}
      }
    }
  },
  created() {
    this.id && this.fetch()
    this.fetchCategories()
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
      this.model = Object.assign({},this.model ,res.data)
    },
    afterUpload(res) {
      this.$set(this.model, 'avatar', res.url)
      console.log(res)
      // this.model.icon = res.url
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
