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
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
