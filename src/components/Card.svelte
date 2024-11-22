<script>
    import { AllTasks } from "../stores/store"
    
export let task;


const handleComplete = (id)=> {
    AllTasks.update(currentTasks => {
        let copiedTasks = [...currentTasks]
        let completedTask = copiedTasks.find(task => task.id === id)
        completedTask.isCompleted = !completedTask.isCompleted

        return copiedTasks;
    })
}

const handleRemove = (id)=> {
    AllTasks.update(currentTasks => {
        return currentTasks.filter(task => task.id !== id)
    })
}
</script>

<div class="card"
    class:completed={task.isCompleted === true}
 on:dblclick={()=> handleComplete(task.id)}
  >
  <span class="delete-btn" on:click={()=>handleRemove(task.id)} >X</span>
    <h5>{task.title}</h5>
    <p>{task.description}</p>
    <div class="members">
        {#each task.personel as personel (personel) }
            <span >{personel}</span>
        {/each}
    </div>
    <p>{task.deadline}</p>
</div>

<style>
    .card{
        padding: 10px;

        max-width: 200px;
        max-height: 200px;
        margin-right: 10px;
        background-color: azure;
        border-radius: 15px;
        box-shadow: 2px 2px rgb(198, 186, 186);
    }
    p,span{
        font-size: 10px;
    }
    .members{
        display: flex;
        justify-content: space-around;
    }
    .completed{
        
        background-color: rgb(166, 135, 196);
    }
    .delete-btn{
        font-size: 16px;
        cursor: pointer;
    }
</style>