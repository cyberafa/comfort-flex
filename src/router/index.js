import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/contato",
    name: "Contato",
    component: () => import("@/views/ContactPage.vue"),
  },
  {
    path: "/politica-de-privacidade",
    name: "Política de Privacidade",
    component: () => import("@/views/PrivacyPage.vue"),
  },
  {
    path: "/login",
    name: "Cadastre-se ou Entre",
    component: () => import("@/views/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((router) => {
  if (router.name) {
    document.title = `${router.name} | Comfort Flex`;
  } else {
    document.title = "Comfort Flex";
  }
});

export default router;
