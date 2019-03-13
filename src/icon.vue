<template>
    <svg class="z-icon" >
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
export default {
    props:['name']
}
</script>
<style scoped>
.z-icon{
    height: 1em;
    width: 1em
    /* 默认和字体一样高 */
    }
</style>
