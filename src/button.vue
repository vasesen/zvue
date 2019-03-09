<template>
    <button class="z-button">按钮</button>
</template>
<script>
export default {

}
</script>
<style lang="scss">
    .z-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding:  0 1em;
        border-radius: var(--boder-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-color-hover)
        }

        &:active{
            background: var(--button-active-bg)
        }

        &:focus{
            outline: none;
        }
    }
    
</style>