<template>
<div id="listado">
    <div class="card bg-light mb-3 col-lg-8"> 
      <!-- col-sm-9 col-md-6 col-lg-8 -->
      <table style="text-align:center" class="table">
        <thead>
          <tr class="table-primary">
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Estatus Proceso</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prospecto in prospectos" :key="prospecto._id.$oid">
            <td>{{ prospecto.nombre }}</td>
            <td>{{ prospecto.appaterno }}</td>
            <td>{{ prospecto.apmaterno }}</td>
            <td>{{ prospecto.estatus }}</td>
            <td><button v-on:click="Detalle(prospecto._id.$oid)" class="btn btn-info">Detalle</button></td>
            <td>
              <button v-on:click="Evaluar(prospecto._id.$oid)" class="btn btn-info">Evaluar</button>
            </td>
            <td>
              <!-- <button v-on:click="Evaluar()">Evaluar</button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'listado',
  data: () => ({
    prospectos: []
  }),
  mounted(){
    this.getListado();
  },
  methods:{
    getListado(){
      axios.get('https://api-python-mongo.herokuapp.com/listado')
      .then(response => {
        this.prospectos = response.data
        console.log(response)
      })
      .catch(error => {
        alert(error)
      })
    },
    Evaluar(id){
      this.$router.push('/evaluacion/' + id)
    },
    Detalle(id){
      this.$router.push('/detalle/' + id)
    }
  }
}
</script>