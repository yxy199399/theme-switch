<template>
  <!-- 如果当前 subroute 有子节点 -->
  <el-submenu
    v-if="!subroute.hidden && subroute.children && subroute.children.length > 0"
    :index="subroute.index"
  >
    <!-- 创建菜单分组 -->
    <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ subroute.label }}</span>
    </template>

    <!-- 递归调用自身，直到 subroute 不含子节点 -->
    <SidebarItem
      v-for="(submenu, subidx) in subroute.children"
      :subroute="submenu"
      :barIdx="subidx"
      :key="barIdx + '-' + subidx"
    />
  </el-submenu>

  <!-- 当前节点不含子节点且非隐藏 -->
  <el-menu-item v-else-if="!subroute.hidden" :index="subroute.index"
    >{{ subroute.label }}
  </el-menu-item>

  <el-menu-item v-else :index="subroute.index"
    >{{ subroute.label }}
  </el-menu-item>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    subroute: {
      type: Object
    },
    barIdx: {
      type: [String, Number]
    },
    fatherpath: {
      type: String
    }
  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态
    defaultActive: function() {
      return this.$route.path;
    }
  },
  methods: {
    // handleOpen: function(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose: function(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  },
  mounted: function() {
    // console.log("sidebar route: ", this.routes);
  }
};
</script>
