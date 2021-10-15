<template>
  <div id="app">
    <div class="table-c">
      <TableWithHead
        :tableData="allData"
        :columns="columns"
        :currentPage="currentPage"
        :pageSize="20"
        :total="total"
        @pageChange="changePage"
        @pageSizeChange="changePageSize"
      >
        <template v-slot:h_select>
          <el-checkbox v-model="allChecked" @change="selectAll"></el-checkbox>
        </template>
        <template v-slot:tIndex="slotProps">
          <div>
            {{ slotProps.index + 1 }}
          </div>
        </template>
        <template v-slot:select="slotProps">
          <div>
            <el-checkbox v-model="slotProps.data.selected" :key="slotProps.data.id" @change="(val) => selectData(slotProps.data.id, val)"></el-checkbox>
          </div>
        </template>
        <template v-slot:name="slotProps">
          <div class="name-input">
            <el-input v-model="slotProps.data.name" placeholder="请输入内容" @keyup.enter.native="changeName(slotProps.data)"></el-input>
          </div>
        </template>
      </TableWithHead>
    </div>
  </div>
</template>

<script>
import TableWithHead from './components/TableWithHead.vue'

export default {
  name: 'App',
  components: {
    TableWithHead
  },
  data() {
    return {
      allData: [
        {
          name: '列表1',
          createTime: '2012-03-13',
          status: '下载中'
        },
        {
          name: '列表2',
          createTime: '2012-03-03',
          status: '下载中'
        },
        {
          name: '列表3',
          createTime: '2012-03-03',
          status: '下载中'
        },
        {
          name: '列表4',
          createTime: '2012-03-03',
          status: '下载中'
        },
        {
          name: '列表5',
          createTime: '2012-03-03',
          status: '下载中'
        },
        {
          name: '列表6',
          createTime: '2012-03-03',
          status: '下载中'
        },
        {
          name: '列表7',
          createTime: '2012-03-03',
          status: '下载中'
        },
        {
          name: '列表8',
          createTime: '2012-03-03',
          status: '下载中'
        },
      ],
      columns: [
        {
          prop: 'select',
          label: '',
          width: 80,
          custom: true,
          headCustom: true
        },
        {
          prop: 'tIndex',
          label: '序号',
          width: 80,
          custom: true
        },
        {
          prop: 'name',
          label: '报告名称',
          custom: true
        },
        {
          prop: 'createTime',
          label: '需求提交时间'
        },
        {
          prop: 'status',
          label: '下载状态',
        }
      ],
      currentPage: 1,
      total: 1,
      allChecked: false,
    }
  },
  methods: {
    changePage(){},
    changePageSize(){},
    selectAll(){},
    selectData(){},
    changeName(){}
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table-c {
  height: 400px;
  background: #2c3e50;
}
</style>
