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
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>{{ prospecto.nombre }}</td>
            <td>{{ prospecto.appaterno }}</td>
            <td>{{ prospecto.apmaterno }}</td>
            
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
    prospecto: {}
  }),
  mounted(){
    this.getDetalle();
  },
  methods:{
    getDetalle(id){
      axios.get('https://api-python-mongo.herokuapp.com/listado',id)
      .then(response => {
        this.prospecto = response.data;
        console.log(this.prospecto)
      })
      .catch(error => {
        alert(error)
      })
    }
  }
}
</script>