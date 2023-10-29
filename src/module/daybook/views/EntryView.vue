<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div class="entry-title d-flex">
            <span class="text-success ts-5 fw-bold">15</span>
            <span class="mx-1 fw-3">{{ "-" }} julio</span>
            <span class="mx-2 fw-light">2023,Viernes</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2 text-white">
                <i class="fa fa-trash-alt    "></i>
                Borrar
            </button>
            <button class="btn btn-primary mx-2 text-white">
                <i class="fa fa-upload   "></i>
                Subir Foto
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column mx-3 h-75">
        <textarea class="form-control" placeholder="Que sucedio Hoy?"></textarea>
    </div>
    <fab
        icon="fa-save"
    />
    <img src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_Hyper_realistic_spiderman_ancient_samurai_style_use_sa_1_7f41ff36-48f2-4b8f-afe0-41d88b2c6876_1.jpeg"
        alt="entry-picture"
        class="img-thumbnail"    
     >
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        fab: defineAsyncComponent(() => import('../components/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }
}
img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);

}

</style>