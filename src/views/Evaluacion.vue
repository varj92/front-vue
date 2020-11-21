<template>
<div id="evaluacion">
<div class="card bg-light mb-3 col-lg-8"> 
<form> 
    <div class="form-row">
        <div class="form-group col-md-4">
        <label>Nombre</label>
        <input type="text" class="form-control" v-model="prospecto.nombre" readonly>
        </div>
        <div class="form-group col-md-4">
        <label>Primer Apellido</label>
        <input type="text" class="form-control" v-model="prospecto.appaterno" readonly>
        </div>
        <div class="form-group col-md-4">
        <label>Segundo Apellido</label>
        <input type="text" class="form-control" v-model="prospecto.apmaterno" readonly>
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-4">
        <label>RFC</label>
        <input type="text" class="form-control" v-model="prospecto.rfc"  readonly>
        </div>
        <div class="form-group col-md-4">
        <label>Telefono</label>
        <input type="text" class="form-control" v-model="prospecto.telefono" readonly>
        </div>
    </div>
    <div class="form-row">
        <div class="form-gropu col-md-8">
            <label>Calle</label>
            <input type="text" class="form-control" v-model="prospecto.calle" readonly>
        </div>
        <div class="form-group col-md-2">
            <label>Número</label>
            <input type="text" class="form-control" v-model="prospecto.numero" readonly>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
        <label>Colonia</label>
        <input type="text" class="form-control" v-model="prospecto.colonia" readonly>
        </div>
        <div class="form-group col-md-2">
        <label>Código Postal</label>
        <input type="text" class="form-control" v-model="prospecto.codpos" readonly>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-4">
        <label>Estatus</label>
        <!-- <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect01" v-model="prospecto.estatus">
                <option selected ></option>
                <option value="Autorizado">Autorizar</option>
                <option value="Rechazado">Rechazar</option>
            </select>
        </div> -->
        <input type="text" class="form-control" v-model="prospecto.estatus" required>
        </div>
        <div class="form-group col-md-8">
        <label>Descripción</label>
        <input type="text" class="form-control" v-model="prospecto.rechazo">
        </div>
        <div class="form-group col-md-4">
          <button @click="Guardar()" type="button" class="btn btn-success btn-lg">Guardar</button>
          <button @click="Salir()" type="button" class="btn btn-info">Regresar</button>
        </div>
    </div>
</form>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'evaluacion',
  data(){
    return{
      prospecto: {
        id:'',
        nombre : '',
        appaterno : '',
        apmaterno : '',
        calle :'',
        numero : '',
        colonia : '',
        codpos : '',
        telefono : '',
        rfc : '',
        estatus:'',
        rechazo:''
      }
    }
  },
  mounted(){
    this.prospecto.id = this.$route.params.id;
    axios.get('https://api-python-mongo.herokuapp.com/listado/' + this.prospecto.id)
    .then( datos => {
      this.prospecto.nombre = datos.data.nombre;
      this.prospecto.appaterno = datos.data.appaterno;
      this.prospecto.apmaterno = datos.data.apmaterno;
      this.prospecto.calle = datos.data.calle;
      this.prospecto.numero = datos.data.numero;
      this.prospecto.colonia = datos.data.colonia;
      this.prospecto.codpos = datos.data.codpos;
      this.prospecto.telefono = datos.data.telefono;
      this.prospecto.rfc = datos.data.rfc;
    })
  },
  methods:{
    Guardar(){
      console.log(this.prospecto)
      axios.put('https://api-python-mongo.herokuapp.com/evaluacion/', this.prospecto)
      .then( data => {
        console.log(data);
      })
    },
    Salir(){
      this.$router.push('/listado')
    }
  }
}
</script>