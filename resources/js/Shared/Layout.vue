<template>
    <section class="py-2 px-6 bg-slate-200">
        <header class="max-w-7xl mx-auto flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">My App</h1>
                <p class="text-sm ml-4">Welcome back, {{ username }}!</p>
            </div>
            <Nav />
        </header>
    </section>
    <section class="p-6">
        <!--  main content       -->
        <div class="max-w-7xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script>
import Nav from "./Nav.vue";
export default {
    name: "Layout",
    components: {Nav},
    computed:{
        username(){
            return this.$page.props.auth.user.username
        }
    }
}
</script>

<style scoped>

</style>
