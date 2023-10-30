export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybook" */ "@/module/daybook/layouts/DaybookLayout.vue"
    ),
    children:[
      {
        path:'',
        name:'not-entry',
        component:() =>
        import(
          /* webpackChunkName: "not-entry" */ "@/module/daybook/views/NotEntry.vue"
        )
      },
      {
        path:':id',
        name:'entry',
        component:() =>
        import(
          /* webpackChunkName: "not-entry" */ "@/module/daybook/views/EntryView.vue"
        ),
        props:( route)=>{
          return{
            id: route.params.id
          }
        }
      },
     
    ]
};
