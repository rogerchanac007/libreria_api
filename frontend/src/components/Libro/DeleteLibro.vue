<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <h3>Seguro que desea eliminar el siguiente libro?</h3>
            <p>Titulo: {{element.titulo}}</p>
            <p>Descripcion: {{element.descripcion}}</p>
            <button class="btn btn-danger" @click="deleteLibro">Eliminar</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            bookId:this.$route.params.libroId,
            element:{
                titulo:'',
                descripcion:'',
            }
        }
    },
    methods:{
        getLibro(){
            const path = `http://localhost:8000/api/v1.0/libros/${this.bookId}/`
            axios.get(path).then((response)=>{
                this.element.titulo = response.data.titulo
                this.element.descripcion = response.data. descripcion
            })
        },
        deleteLibro(){
            const path = `http://localhost:8000/api/v1.0/libros/${this.bookId}/`
            axios.delete(path).then((response)=>{
                console.log(response)
                location.href="/libros"
            })
        }
    },
    created(){
        this.getLibro()
    }
}
</script>

<style>

</style>