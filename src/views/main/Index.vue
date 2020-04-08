<template>
  <div class="mian">
    <el-container>
      <el-header
        height="80px"
        :style="{ 'background-color': Theme['colorPrimary'] }"
      >
        <img class="logo" src="http://placehold.it/142x38/" alt="" />
        <ul class="top-nav">
          <li @click="dialogVisible = true">切换主题颜色</li>
          <li>帮助</li>
        </ul>
      </el-header>
      <el-container>
        <el-aside class="menu" width="auto">
          <el-menu
            class="el-menu-vertical-demo"
            :default-active="activeIndex"
            router
          >
            <SidebarItem
              v-for="(item, idx) in navList"
              :subroute="item"
              :barIdx="idx"
              :key="idx"
            />
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <el-dialog title="切换主题颜色" :visible.sync="dialogVisible" width="30%">
      <div>
        <span class="demonstration">选择主题色</span>
        <el-color-picker v-model="defaultColor" show-alpha></el-color-picker>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onChange">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import SidebarItem from "@/components/SidebarItem";
export default {
  components: {
    SidebarItem
  },
  name: "Index",
  data() {
    return {
      activeIndex: "",
      navList: [
        {
          index: "/mian/home",
          label: "首页",
          icon: "el-icon-location"
        },
        {
          index: "/garden",
          name: "园区中心",
          icon: "el-icon-location",
          children: [
            {
              index: "/production/product",
              name: "产品发布",
              icon: "el-icon-location"
            },
            {
              index: "/production/issue",
              name: "新增产品",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/users",
          name: "用户管理",
          icon: "el-icon-location",
          children: [
            {
              index: "/users/management",
              name: "用户管理",
              icon: "el-icon-location"
            },
            {
              index: "/users/check",
              name: "角色审核",
              icon: "el-icon-location"
            },
            {
              index: "/users/roleapply",
              name: "角色申请",
              icon: "el-icon-location"
            },
            {
              index: "/users/certification",
              name: "实名认证",
              icon: "el-icon-location"
            },
            {
              index: "/users/cy-certification",
              name: "企业认证",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/role",
          name: "角色管理",
          icon: "el-icon-location"
        },
        {
          index: "/resource",
          name: "资源管理",
          icon: "el-icon-location"
        },
        {
          index: "/ecological/apply",
          name: "生态合作",
          icon: "el-icon-location",
          children: [
            {
              index: "/ecological/apply",
              name: "合作申请",
              icon: "el-icon-location"
            },
            {
              index: "/ecological/applyList",
              name: "合作列表",
              icon: "el-icon-location"
            },
            {
              index: "/ecological/manage",
              name: "应用接入",
              icon: "el-icon-location",
              children: [
                {
                  index: "/ecological/manage",
                  name: "规则管理",
                  icon: "el-icon-location"
                },
                {
                  index: "/ecological/register",
                  name: "应用注册",
                  icon: "el-icon-location",
                  children: [
                    {
                      index: "/ecological/register",
                      name: "资源注册",
                      icon: "el-icon-location"
                    },
                    {
                      index: "/ecological/audit",
                      name: "应用注册审核",
                      icon: "el-icon-location"
                    }
                  ]
                },
                {
                  index: "/ecological/content",
                  name: "应用管理",
                  icon: "el-icon-location",
                  children: [
                    {
                      index: "/ecological/content",
                      name: "物联服务",
                      icon: "el-icon-location"
                    },
                    {
                      index: "/ecological/video",
                      name: "视频服务",
                      icon: "el-icon-location"
                    },
                    {
                      index: "/ecological/gis",
                      name: "GIS",
                      icon: "el-icon-location"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      dialogVisible: false,
      defaultColor: this.Theme.colorPrimary
    };
  },
  created() {
    console.log(process.env.VUE_APP_BASE_API);
  },
  methods: {
    onChange() {
      this.ThemeChange(this.defaultColor);
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  margin: 15px;
}
.top-nav {
  float: right;
  height: 100%;
  li {
    display: inline-block;
    margin-right: 20px;
    vertical-align: middle;
    color: #fff;
    line-height: 80px;
    cursor: pointer;
  }
}
.demonstration {
  float: left;
  margin-right: 20px;
  line-height: 40px;
}
</style>
