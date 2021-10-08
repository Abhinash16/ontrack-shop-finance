const Module = () => import("./module.vue");
const Home = () => import("./views/Home.vue");
const personalDetails = () => import("./views/personalDetails.vue");

const moduleRoute = {
  path: "/finance",
  component: Module,
  children: [
    {
      path: "/",
      component: Home
    },
    {
      path: ":id",
      component: personalDetails
    }
  ]
};

export default router => {
  router.addRoutes([moduleRoute]);
};
