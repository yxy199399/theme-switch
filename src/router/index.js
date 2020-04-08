import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/mian"
  },
  {
    path: "/mian",
    name: "mian",
    redirect: "/mian/home",
    component: () => import("@/views/main/Index"),
    children: [
      {
        path: "/mian/home",
        name: "mianHome",
        component: () => import("@/views/main/Home")
      },
      // 园区
      {
        path: "/garden",
        name: "garden",
        redirect: "/garden/info",
        component: () => import("@/views/main/garden/Index"),
        children: [
          {
            path: "/garden/info",
            name: "gardenInfo",
            component: () => import("@/views/main/garden/Info")
          },
          {
            path: "/garden/company",
            name: "gardenCompany",
            component: () => import("@/views/main/garden/Company")
          },
          {
            path: "/garden/register",
            name: "gardenRegister",
            component: () => import("@/views/main/garden/Register")
          },
          {
            path: "/garden/organization",
            name: "gardenOrganization",
            component: () => import("@/views/main/garden/Organization")
          },
          {
            path: "/garden/screen",
            name: "gardenScreen",
            component: () => import("@/views/main/garden/Screen")
          },
          {
            path: "/garden/news",
            name: "gardenNews",
            component: () => import("@/views/main/garden/News")
          },
          {
            path: "/garden/bulletin",
            name: "gardenBulletin",
            component: () => import("@/views/main/garden/Bulletin")
          }
        ]
      },
      // 应用中心
      {
        path: "/application",
        name: "application",
        redirect: "/application/garden",
        component: () => import("@/views/main/application/Index"),
        children: [
          {
            path: "/application/garden",
            name: "applicationGarden",
            component: () => import("@/views/main/application/Garden")
          },
          {
            path: "/application/monitoring",
            name: "applicationMonitoring",
            component: () => import("@/views/main/application/Monitoring")
          },
          {
            path: "/application/template",
            name: "applicationTemplate",
            component: () => import("@/views/main/application/Template")
          },
          {
            path: "/application/licence",
            name: "applicationLicence",
            component: () => import("@/views/main/application/Licence")
          },
          {
            path: "/application/config",
            name: "applicationConfig",
            component: () => import("@/views/main/application/Config")
          }
        ]
      },
      // 权限中心
      {
        path: "/limits",
        name: "limits",
        redirect: "/limits/user",
        component: () => import("@/views/main/limits/Index"),
        children: [
          {
            path: "/limits/user",
            name: "limitsUser",
            component: () => import("@/views/main/limits/User")
          },
          {
            path: "/limits/role",
            name: "limitsRole",
            component: () => import("@/views/main/limits/Role")
          },
          {
            path: "/limits/visitor",
            name: "limitsVisitor",
            component: () => import("@/views/main/limits/Visitor")
          },
          {
            path: "/limits/data",
            name: "limitsData",
            component: () => import("@/views/main/limits/Data")
          }
        ]
      },
      // 任务流程
      {
        path: "/task",
        name: "task",
        redirect: "/task/approve",
        component: () => import("@/views/main/task/Index"),
        children: [
          {
            path: "/task/approve",
            name: "taskApprove",
            component: () => import("@/views/main/task/Approve")
          }
        ]
      },
      // 企业中心
      {
        path: "/company",
        name: "company",
        redirect: "/company/info",
        component: () => import("@/views/main/company/Index"),
        children: [
          {
            path: "/company/info",
            name: "companyInfo",
            component: () => import("@/views/main/company/Info")
          },
          {
            path: "/company/employee",
            name: "companyEmployee",
            component: () => import("@/views/main/company/Employee")
          }
        ]
      },
      // 我的空间
      {
        path: "/space",
        name: "space",
        redirect: "/space/app",
        component: () => import("@/views/main/space/Index"),
        children: [
          {
            path: "/space/app",
            name: "spaceApp",
            component: () => import("@/views/main/space/App")
          },
          {
            path: "/space/authentication",
            name: "spaceAuthentication",
            component: () => import("@/views/main/space/Authentication")
          },
          {
            path: "/space/jurisdiction",
            name: "spaceJurisdiction",
            component: () => import("@/views/main/space/Jurisdiction")
          }
        ]
      },
      // 平台管理
      {
        path: "/platform",
        name: "platform",
        redirect: "/platform/register",
        component: () => import("@/views/main/platform/Index"),
        children: [
          {
            path: "/platform/register",
            name: "platformRegister",
            component: () => import("@/views/main/platform/Register")
          },
          {
            path: "/platform/partner",
            name: "platformPartner",
            component: () => import("@/views/main/platform/Partner")
          },
          {
            path: "/platform/issue",
            name: "platformIssue",
            component: () => import("@/views/main/platform/Issue")
          },
          {
            path: "/platform/message",
            name: "platformMessage",
            component: () => import("@/views/main/platform/Message")
          },
          {
            path: "/platform/help",
            name: "platformHelp",
            component: () => import("@/views/main/platform/Help")
          }
        ]
      },
      // 用户中心
      {
        path: "/user",
        name: "user",
        redirect: "/user/info",
        component: () => import("@/views/main/user/Index"),
        children: [
          {
            path: "/user/info",
            name: "userInfo",
            component: () => import("@/views/main/user/Info")
          },
          {
            path: "/user/message",
            name: "userMessage",
            component: () => import("@/views/main/user/Message")
          }
        ]
      },
      {
        path: "/mian/help",
        name: "mianHelp",
        component: () => import("@/views/main/Help")
      },
      {
        path: "/mian/opinion",
        name: "mianOpinion",
        component: () => import("@/views/main/Opinion")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
