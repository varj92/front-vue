<template>
<div class="listado">
    <div class="card bg-light mb-3 col-sm-6">
      <table style="text-align:center" class="table">
        <thead>
          <tr class="table-primary">
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Estatus Proceso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prospecto in prospectos" :key="prospecto.id">
            <td>{{ prospecto.nombre }}</td>
            <td>{{ prospecto.appaterno }}</td>
            <td>{{ prospecto.apmaterno }}</td>
            <td>{{ prospecto.estatus }}</td>
            <td>
              
            <router-link :to="{ name: 'detalle', params : {id: prospecto._id}}">Detalle</router-link>
            </td>
            <!-- <td><a href="/detalle/{{ prospecto.id }}" class="badge badge-info">Detalle</a></td> {"_id": {"$oid":-->
          </tr>
        </tbody>
      </table>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
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
      })
      .catch(error => {
        alert(error)
      })
    }
  }
}
</script>