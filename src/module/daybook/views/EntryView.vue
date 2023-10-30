<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div class="entry-title d-flex">
                <span class="text-success ts-5 fw-bold">{{ day }}</span>
                <span class="mx-1 fw-3">{{ "-" }} {{ month }}</span>
                <span class="mx-2 fw-light">{{ yearDay }}</span>
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
            <textarea class="form-control" placeholder="Que sucedio Hoy?" v-model="entry.text"></textarea>
        </div>
    </template>
    <fab icon="fa-save" />
    <img :src="entry.picture" alt="entry-picture" class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
import getDayMonthYear from '../helpers/getDayMonthYear.js'

export default {
    props: {
        id: {
            type: String,
            require: true
        }
    },
    components: {
        fab: defineAsyncComponent(() => import('../components/Fab.vue')),

    },
    data() {
        return {
            entry: null,

        }
    },
    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear(this.entry.date)
            return day
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        }

    },
    methods: {
        loadEntry() {
            const entry = this.getEntryById(this.id);
            if (!entry) return this.$router.push({ name: 'not-entry' })

            this.entry = entry;
        }
    },
    created() {
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }

}
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);

}
</style>