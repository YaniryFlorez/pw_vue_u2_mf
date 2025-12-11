<template>
  <div>cmd
    <img src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif" alt="no se carga la imagen"></div>

<div class="pregunta-container">
       <input type="text" placeholder="Haz una pregunta?">
<p>Recuerda terminar con el signo de interrogación (?)</p>
<h2>Seré millonario?</h2>
<h1>Yes, No</h1>
</div> 
</template>

<script>
export default {

}
</script>

<style>
img {
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
   /* z-index: -1;  */
}
.pregunta-container {
    position: relative;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    width: 300px;
    font-size: 16px;
}
input:focus {
    outline: none;
}
p{
    margin-top: 60px;;
    font-size: 20px;;
}

</style>