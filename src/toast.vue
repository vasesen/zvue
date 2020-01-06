<template>
    <div class="toast"> 
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ZToast'
}
</script>
<style lang="scss" scoped>
    .toast{
        border:1px solid red;
        position: fixed;
        top:0;
        left: 50%;
        transform:translateX(-50%);
        font-size: 14px;
        line-height: 1.8;
        height: 40px;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.75);
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding: 0 16px;
    }
</style>