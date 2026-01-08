<template>
    <div class="oopciones_container">
         <ul>
            <li>pokemon 1</li>
            <li>pokemon 2</li>
            <li>pokemon 3</li>
            <li>pokemon 4</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.oopciones_container{
    display: flex;
    justify-content: center;
}   

ul{
    list-style: none;
}
li{
    background-color: #f0f0f0;
    margin: 5px 0;
    padding: 7px;
    border-radius: 5px;
    border : 1px solid #ccc;
    cursor: pointer;
    width: 120px;
    text-align: center;
}
</style>