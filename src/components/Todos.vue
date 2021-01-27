<template>
    <div>
    <h3>Todos</h3>
    <div class="todos">
        <div v-for="todo in allTodos" :key="todo.id" class="todo">
            {{todo.title}}
            <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
        </div>
    </div>
    
  </div>
    </template>
<script>
   import {mapActions, mapGetters} from 'vuex';

    export default{
        name: "Todos",
        methods:{
            ...mapActions(['fetchTodos',"deleteTodo"]),
        },
        computed: mapGetters(['allTodos']),
        created(){
            this.fetchTodos();
        }
    };
</script>

<style lang= "scss" scoped>

    

    @mixin display($color){
        text-align: center;
        position: relative;
        background: $color;
    }
    div{
        h3{
            height: 50px;
            width: 50px;
             @include display( #6f41b8);
            
        }
.todos{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 1rem;
    }
    .todo{
        @include display( #6f41b8);
        border: 1px solid #ccc;       
        padding: 1rem;
        border-radius: 3px;       
        cursor: pointer;
    }
    .fas fa-trash-alt{
        
    
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: black;
      cursor: pointer;  
    }
    }
    

</style>