<template>
  <div class="contain">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <th v-for="item in columns" :ref="item.prop + 'th'" :key="item.prop">
          <div v-if="item.headCustom">
            <slot :name="'h_' + item.prop"></slot>
          </div>
          <div v-else>
            {{ item. label }}
          </div>
        </th>
      </thead>
    </table>
    <div class="table-contain">
      <vue-scroll :ops="ops">
        <el-table
          :data="tableData"
          class="headTable"
        >
          <el-table-column
            v-for="item in columns"
            :key="item.prop"
            align="center"
            :label="item.label"
            :width="item.width"
          >
            <template v-if="item.headCustom" slot="header">
              <slot :name="'h_' + item.prop"></slot>
            </template>
            <template slot-scope="scope">
              <div v-if="!item.custom" :ref="item.prop">
                {{ scope.row[item.prop] }}
              </div>
              <div v-else :ref="item.prop">
                <slot :name="item.prop" :data="scope.row" :index="scope.$index"></slot>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </vue-scroll>
    </div>
    <div class="page-contain">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 50]"
        :page-size="pageSize"
        layout="sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { ops } from './utils/variable'
export default {
  name: 'TableWithHead',
  components: {},
  props: {
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    },
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    this.ops = ops
    return {
    }
  },
  mounted() {
  },
  updated() {
    let _that = this
    this.$nextTick(function() {
      _that.columns.forEach(item => {
        if (_that.$refs[item.prop] && _that.$refs[item.prop][0]) {
          let width = _that.$refs[item.prop][0].parentNode.offsetWidth
          _that.$refs[item.prop + 'th'][0].style.width = width + 'px'
        }
      })
    })
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pageSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('pageChange', val)
    }
  }
}
</script>
<style lang="scss" scoped>
.contain {
  height: 100%;
}
.el-table {
  font-size: 1.4rem;
  background-color: transparent;
  &::before {
    display: none;
  }
  ::v-deep tr {
    background-color: transparent;
  }
  ::v-deep td {
    border-bottom: 1px solid rgba(24, 75, 130, 0.5);
    color: #fff
  }
  ::v-deep .el-table__body tr:hover>td {
    background-color: transparent;
  }
}
table {
  width: 100%;
  thead {
    background-color: rgba(27, 42, 93, 0.4);
  }
  th {
    height: 5.6rem;
    text-align: center;
    word-break:break-all;
    /*text-align: center;*/
    box-sizing: border-box;
    color: #fff;
    font-size: 1.4rem
  }
}
.headTable {
  ::v-deep .el-table__header-wrapper {
    display: none;
  }
}
.table-contain {
  height: calc(100% - 11.6rem)
}
.page-contain {
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-pagination {
  color: #fff;
  text-align: center;
  ::v-deep .el-pagination__sizes {
    .el-input__inner {
      background-color: transparent;
      color: #fff
    }
  }
  ::v-deep .btn-prev {
    background-color: transparent;
    color: #fff;
  }
  ::v-deep .btn-next {
    background-color: transparent;
    color: #fff
  }
  ::v-deep .el-pager {
    li {
      background-color: transparent;
    }
  }
  ::v-deep .el-pagination__jump {
    color: #fff;
    .el-input__inner {
      background-color: transparent;
      color: #fff
    }
  }
}
</style>
