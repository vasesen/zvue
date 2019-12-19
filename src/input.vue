<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly" >
        <template  v-if="error">
            <icon name="settings" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    components:{
        Icon
    },
    name:'ZInput',
    props:{
        value:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        error:{
            type:String
        }
    }
}
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12PX;
    $box-shadow-color:rgba(0,0,0,0.5);
    $red:#f1453d;
    .wrapper{
        font-size: $font-size;
        display: inline-block;
        align-items: center;
        >*{
            :not(:last-child){
                margin-right: .5em
            }
        }
        >input{
            height:$height;
            border: 1px solid $border-color;    
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color:$border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none
            }
            &[disabled],&[readonly]{
                border-color: #bbbbbb;
                color: #bbbbbb;
                cursor: not-allowed;
            }
        }
        &.error{
            >input{
                border-color: $red;
            }
        }
        .icon-error{
            fill:$red;
        }
        .errorMessage{
            color: $red
        }
    }
</style>