<template>
    <Link
        href="/"
        class="no-underline text-blue-500"
        :class="{ 'font-bold':active}">
        <slot/>
    </Link>

</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
    components:{
        Link
    },
    props:{
        active:Boolean,
    }
}
</script>

<style scoped>

</style>
