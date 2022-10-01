<template>
    <div>
     <h1 class="bg-green-100 text-green-800 p-4">Hello,{{ name }}</h1>
        <p>In this series, We will use the following frameworks</p>
        <ul>
            <li v-for="framework of frameworks" v-text="framework"></li>
        </ul>
    </div>
</template>
<script>
    export default{
        props: {
            name:String,
            frameworks:Array
        }
    }
</script>

