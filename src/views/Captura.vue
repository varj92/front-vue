<template>
<div id="captura">
    <div class="card bg-light mb-3 col-lg-8"> 
      <form>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label>Nombre</label>
            <input type="text" class="form-control" v-model="nombre" required>
          </div>
        <div class="form-group col-md-4">
          <label>Primer Apellido</label>
          <input type="text" class="form-control" v-model="appaterno" required>
        </div>
        <div class="form-group col-md-4">
          <label>Segundo Apellido</label>
          <input type="text" class="form-control" v-model="apmaterno">
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-4">
          <label>RFC</label>
          <input type="text" class="form-control" v-model="rfc" required>
        </div>
        <div class="form-group col-md-4">
          <label>Telefono</label>
          <input type="text" class="form-control" v-model="telefono" required>
        </div>
        </div>
       <div class="form-row">
          <div class="form-gropu col-md-8">
              <label>Calle</label>
              <input type="text" class="form-control" v-model="calle" required>
          </div>
          <div class="form-group col-md-2">
              <label>Número</label>
              <input type="text" class="form-control" v-model="numero" required>
          </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
          <label>Colonia</label>
          <input type="text" class="form-control" v-model="colonia" required>
        </div>
        <div class="form-group col-md-2">
          <label>Código Postal</label>
          <input type="text" class="form-control" v-model="codpos" required>
        </div>
        </div>
        <div class="form-group col-md-4">
          <button @click="Captura" type="button" class="btn btn-success btn-lg">Guardar</button>
          <button @click="Cancelar" type="button" class="btn btn-warning btn-lg">Salir</button>
        </div>
      </form>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'captura',
  data: () => ({
    nombre : '',
    appaterno : '',
    apmaterno : '',
    calle :'',
    numero : '',
    colonia : '',
    codpos : '',
    telefono : '',
    rfc : ''
  }),
  methods:{
    Captura(){
        let prospecto = 
        {
            nombre: this.nombre,
            appaterno : this.appaterno,
            apmaterno : this.apmaterno,
            calle : this.calle,
            numero : this.numero,
            colonia : this.colonia,
            codpos : this.codpos,
            telefono : this.telefono,
            rfc : this.rfc,
            estatus : 'Autorizado'
        };
        axios.post('https://api-python-mongo.herokuapp.com/captura', prospecto)
        .then(response => {
            this.prospecto = response.data
            console.log(prospecto)
            this.nombre = '',
            this.appaterno = '',
            this.apmaterno = '',
            this.calle = '',
            this.numero = '',
            this.colonia = '',
            this.codpos = '',
            this.telefono = '',
            this.rfc = ''
        })
        .catch(error => {
            alert(error)
        })
    },
    Cancelar(){
        if(confirm('Se perderán los datos de la captura?')){
          this.nombre = '',
          this.appaterno = '',
          this.apmaterno = '',
          this.calle = '',
          this.numero = '',
          this.colonia = '',
          this.codpos = '',
          this.telefono = '',
          this.rfc = ''
          this.$router.push('/listado')
        }
    }
  }
}
</script>