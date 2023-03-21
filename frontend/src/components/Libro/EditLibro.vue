<template>
  <div class="container">
    <div class="ro">
        <div class="col text-left">
            <form action="" @submit="onSubmit">
                <div class="form-group row">
                    <label for="title" class="col-sm-2">Titulo</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" name="titulo" v-model.trim="form.titulo">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="descripcion" class="col-sm-2">Descripcion</label>
                    <div class="col-sm-6">
                        <textarea name="descripcion" rows="10" class="form-control" v-model.trim="form.descripcion"></textarea>
                    </div>
                </div>
                <div class="rows">
                    <div class="col-text-left">
                        <button type="submit" class="btn btn-primary mr-2" >Guardar</button>
                        <router-link class="btn btn-danger" :to="{name:'ListLibro'}">Cancelar</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data(){
        return {
            bookId:this.$route.params.libroId,
            form:{
                titulo:'',
                descripcion:'',
            }
        }
    },
    methods:{
        getLibro(){
            const path = `http://localhost:8000/api/v1.0/libros/${this.bookId}/`
            axios.get(path).then((response)=>{
                this.form.titulo = response.data.titulo
                this.form.descripcion = response.data. descripcion
            })
        },
        onSubmit(evt){
            evt.preventDefault()
            const path = `http://localhost:8000/api/v1.0/libros/${this.bookId}/`
            axios.put(path, this.form).then((response)=>{
                this.form.titulo = response.data.titulo
                this.form.descripcion = response.data. descripcion
                swal("Libro actualizado exitosamente", "", "success")
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