<template>
  <div>
    <h1>文章列表</h1>
    <el-table
      :data="items"
      style="width: 100%"
    >
      <el-table-column
        prop="_id"
        label="ID"
        width="230"
      >
      </el-table-column>
      <el-table-column
        prop="title"
        label="文章标题"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
      >
        <template v-slot="scope">
          <el-button
            type="primary"
            size="mini"
            @click="$router.push(`/articles/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button
            type="primary"
            size="mini"
            @click="remove(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('rest/articles')
      this.items = res.data
    },
    remove(row) {
      this.$confirm(`是否删除该文章 "${row.title}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete(`rest/articles/${row._id}`)
        this.fetch()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
