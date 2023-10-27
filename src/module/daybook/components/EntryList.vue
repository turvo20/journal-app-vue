<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input type="text" class="form-control" placeholder="Buscar Entrada">

    </div>
    <div class="entry-scrollarea">
        <Entry
        v-for="item in 100" :key="item"
        >
            
        </Entry>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
    export default {
        components:{
            Entry:defineAsyncComponent(()=>import('./Entry.vue'))
        }
    }
</script>

<style lang="scss" scoped>

input{
    height: 55px;
}
.entry-list-container
    {
    border-right: 1px solid #607D8B;
    height: calc( 100vh - 56px  );
    overflow: hidden;
    
    }
.entry-scrollarea{
    height: calc( 100vh - 90px  );
    overflow-y: scroll;
}
    /* Estilos para motores Webkit y blink (Chrome, Safari, Opera... )*/

.entry-scrollarea::-webkit-scrollbar {
    -webkit-appearance: none;
}

.entry-scrollarea::-webkit-scrollbar:vertical {
    width:10px;
}

.entry-scrollarea::-webkit-scrollbar-button:increment,.entry-scrollarea::-webkit-scrollbar-button {
    display: none;
} 

.entry-scrollarea::-webkit-scrollbar:horizontal {
    height: 10px;
}

.entry-scrollarea::-webkit-scrollbar-thumb {
    background-color: #41B883;
    border-radius: 20px;
    border: 2px solid #f1f2f3;
}

.entry-scrollarea::-webkit-scrollbar-track {
    border-radius: 10px;  
}

</style>