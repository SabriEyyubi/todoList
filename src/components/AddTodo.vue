<template>
    <div>
        <h3>Add Todo</h3>
        <div class="add">
            <form @submit = "onSubmit">
                <input type="text" v-model = "title" placeholder="Add Todo...">
                <input type="submit" value = "Submit">
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "AddTodo",
    data(){
        return{
            title : '' //v-model
        }
    },
    methods:{
        ...mapActions(['AddTodo']),
        onSubmit(e){
            e.preventDefault();
            this.AddTodo(this.title);
        }
    }
}
</script>

<style lang="scss" scoped>
@import './styles/scssstyle.scss';

@mixin color {
    background: gray;
    color: #fff;
    border: 1px red solid;
    
} 


form{
    display: flex;
    

    input[type="text"]{

    flex: 10;
    padding: 10px;
    background: lightblue;
    outline: 0;
}
input[type="submit"]{
    flex:2;
    @include color();
    @include test();
    
    cursor: pointer;
}
}





</style>
