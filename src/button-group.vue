<template>
    <div class="z-button-group">
        <slot></slot>
    </div>    
</template>
<script>
export default {
    mounted(){
        for( let node of this.$el.children){
            let name = node.nodeName.toLowerCase()
            if(name !== 'button'){
                console.warn(`z-button-group 的子元素应该全是z-button,但是你写的是 ${name}`)
            }
        }
    }
}
</script>

<style lang="scss">
    .z-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .z-button {
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }   
            &:first-child{
                border-top-left-radius: var(--boder-radius);
                border-bottom-left-radius: var(--boder-radius);
            }
            &:last-child{
                border-top-right-radius: var(--boder-radius);
                border-bottom-right-radius: var(--boder-radius);
            }
            &:hover{
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
 