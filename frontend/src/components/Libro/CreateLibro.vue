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
                        <button type="submit" class="btn btn-primary mr-2" >Crear</button>
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
            form:{
                titulo:'',
                descripcion:'',
            }
        }
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault()
            const path = `http://localhost:8000/api/v1.0/libros/`
            axios.post(path, this.form).then((response)=>{
                this.form.titulo = response.data.titulo
                this.form.descripcion = response.data. descripcion
                swal("Libro creado exitosamente", "", "success")
            })
        }
    },

}
</script>

<style>

</style>