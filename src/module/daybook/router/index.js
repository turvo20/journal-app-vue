export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/module/daybook/layouts/DaybookLayout.vue"
    ),
    children:{
        
    }
};
