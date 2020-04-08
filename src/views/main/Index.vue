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
        <el-aside class="menu" width="200px">
          <el-menu
            :background-color="Theme['colorPrimary']"
            text-color="#fff"
            active-text-color="#ddd"
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
        <el-main>
          <router-view />
        </el-main>
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
  label: "Index",
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
          label: "园区中心",
          icon: "el-icon-location",
          children: [
            {
              index: "/garden/info",
              label: "园区信息",
              icon: "el-icon-location"
            },
            {
              index: "/garden/company",
              label: "入园企业",
              icon: "el-icon-location"
            },
            {
              index: "/garden/register",
              label: "注册员工",
              icon: "el-icon-location"
            },
            {
              index: "/garden/organization",
              label: "组织架构",
              icon: "el-icon-location"
            },
            {
              index: "/garden/screen",
              label: "智慧大屏",
              icon: "el-icon-location"
            },
            {
              index: "/garden/bulletin",
              label: "通知公告",
              icon: "el-icon-location"
            },
            {
              index: "/garden/news",
              label: "新闻中心",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/application",
          label: "应用中心",
          icon: "el-icon-location",
          children: [
            {
              index: "/application/garden",
              label: "园区应用",
              icon: "el-icon-location"
            },
            {
              index: "/application/monitoring",
              label: "监控大盘",
              icon: "el-icon-location"
            },
            {
              index: "/application/template",
              label: "模板管理",
              icon: "el-icon-location"
            },
            {
              index: "/application/licence",
              label: "Licence",
              icon: "el-icon-location"
            },
            {
              index: "/application/config",
              label: "配置管理",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/limits",
          label: "权限中心",
          icon: "el-icon-location",
          children: [
            {
              index: "/limits/user",
              label: "用户管理",
              icon: "el-icon-location"
            },
            {
              index: "/limits/role",
              label: "角色管理",
              icon: "el-icon-location"
            },
            {
              index: "/limits/visitor",
              label: "访客管理",
              icon: "el-icon-location"
            },
            {
              index: "/limits/data",
              label: "数据权限",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/task",
          label: "任务流程",
          icon: "el-icon-location",
          children: [
            {
              index: "/task/approve",
              label: "待审批",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/company",
          label: "企业中心",
          icon: "el-icon-location",
          children: [
            {
              index: "/company/info",
              label: "企业信息",
              icon: "el-icon-location"
            },
            {
              index: "/company/employee",
              label: "员工管理",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/space",
          label: "我的空间",
          icon: "el-icon-location",
          children: [
            {
              index: "/space/app",
              label: "我的应用",
              icon: "el-icon-location"
            },
            {
              index: "/space/authentication",
              label: "企业认证信息",
              icon: "el-icon-location"
            },
            {
              index: "/space/jurisdiction",
              label: "我的权限",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/platform",
          label: "平台管理",
          icon: "el-icon-location",
          children: [
            {
              index: "/platform/register",
              label: "园区注册",
              icon: "el-icon-location"
            },
            {
              index: "/platform/partner",
              label: "合作伙伴",
              icon: "el-icon-location"
            },
            {
              index: "/platform/issue",
              label: "园区发布",
              icon: "el-icon-location"
            },
            {
              index: "/platform/message",
              label: "站内消息",
              icon: "el-icon-location"
            },
            {
              index: "/platform/help",
              label: "帮助文档",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/user",
          label: "用户中心",
          icon: "el-icon-location",
          children: [
            {
              index: "/user/info",
              label: "个人信息",
              icon: "el-icon-location"
            },
            {
              index: "/user/message",
              label: "站内消息",
              icon: "el-icon-location"
            }
          ]
        },
        {
          index: "/mian/help",
          label: "帮助文档",
          icon: "el-icon-location"
        },
        {
          index: "/mian/opinion",
          label: "意见反馈",
          icon: "el-icon-location"
        }
      ],
      dialogVisible: false,
      defaultColor: this.Theme.colorPrimary
    };
  },
  mounted() {
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
.menu {
  height: calc(100vh - 80px);
  overflow-x: hidden;
  .el-menu {
    min-height: 100%;
  }
}
.el-main {
  height: calc(100vh - 80px);
}
.demonstration {
  float: left;
  margin-right: 20px;
  line-height: 40px;
}
</style>
