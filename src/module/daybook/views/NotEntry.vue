<template>
   <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No Hay Nada Seleccionado</h1>
   </div>
   <fab/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        fab:defineAsyncComponent(()=> import('../components/Fab.vue'))
    }
}
</script>


<style lang="scss" scoped>
div{
    height: 100%;
    width: 100%;
}
</style>