<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2>Listado de libros</h2>
            </div>
            <div class="col-md-12">
                <table class="table">
                    <thead class="thead-dark">
                            <tr>
                                <th>Titulo</th>
                                <th>Descripcion</th>
                                <th>Opciones</th>
                            </tr>
                    </thead>
                    <tbody>
                    <tr v-for="libro in books" :key="libro.id">
                        <td class="text-left">{{libro.titulo}}</td>
                        <td class="text-left">{{libro.descripcion}}</td>
                        <td>
                        <router-link :to="{name:'EditLibro', params:{libroId:libro.id}}" class="btn btn-primary btn-sm mt-2 mr-2">Editar</router-link>
                        <router-link :to="{name:'DeleteLibro', params:{libroId:libro.id}}" class="btn btn-danger btn-sm mt-2 mr-2">Eliminar</router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return {
            fields:[
                {key:"title", label:"Titulo"},
                {key:"description", label:"Description"},
                {key:"action", label:"Actions"},
            ],
            books:[

            ]
        }
    },
    methods:{
        getLibros(){
            const path = "http://127.0.0.1:8000/api/v1.0/libros/"
            axios.get(path).then((response)=>{
                this.books = response.data
            }).catch((error)=>{
                console.log(error)
            })
        },
        editLibro(){
            this.$router.push({name:"EditLibro"})
        }
    },
    created(){
        this.getLibros()
    }
}
</script>