<template>
    <div class="row" :class="rowClass"
    :style=" rowStyle">
        <slot></slot>
    </div>
</template>
<script>
 export default{
     name:'ZRow',
     props:{
         gutter:{
             type :[Number,String]
         },
         align:{
             type:String,
             validator(){
                return  ['left','right','center'].includes(value)
             }
         }
     },
     mounted(){
         this.$children.forEach((vm)=>{
             vm.gutter = this.gutter
         })
     },
     computed:{
         rowStyle(){
             return{
                marginLeft: -this.gutter/2+'px',
                marginRight:-this.gutter/2+'px'
             }
         },
         rowClass(){
             let {align} = this
             return [align && `align-${align} `]
         }
     }
 }
</script>
<style lang="scss" scoped>
.row{
    display:flex;
    flex-wrap:wrap;
    &.align-left{
        justify-content:  flex-start;
    }
    &.align-right{
        justify-content:flex-end;
    }
    &.align-center{
        justify-content: center
    }
}
</style> 