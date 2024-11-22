<script>
  import { fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { members, AllTasks} from "../stores/store";

  const dispatch = createEventDispatcher();
  export let taskDrawer;
  
  let title;
  let description;
  let personel = [];
  let deadline;

  const handleSubmit = ()=> {
    let newTask = {
      id:Date.now(),
      title:title,
      description:description,
      personel:personel,
      deadline:deadline,
      isCompleted:false
    }
    AllTasks.update(currentTasks => {
      return[newTask,...currentTasks]
    })
    title="";
    description="";
    personel=[];
    deadline="";
  }
  
 
</script>

{#if taskDrawer}
  <div transition:fly={{ x: 200, duration: 1500 }} class="drawer">
    <span on:click={() => dispatch("closeTaskDrawer")}>X</span>
    <h1>Add To Do</h1>
    <form on:submit|preventDefault = {handleSubmit} >
      <input type="text" placeholder="task title..." bind:value={title} />
      <textarea cols="23" rows="4" bind:value={description} />

      <select multiple bind:value={personel} >
        {#each $members as member (member)}
          <option value={member}>{member}</option>
        {/each}
      </select>
      <input type="date" bind:value={deadline} />
      <button type="submit">Submit Task</button>
    </form>
  </div>
{/if}

<style>
  .drawer {
    position: absolute;
    top: 0;
    right: 0;
    width: 20vw;
    height: 100vh;
    padding: 20px;
    background-color: rgb(160, 160, 227);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: rgb(54, 52, 52);
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea,
  select,
  button {
    border-radius: 5px;
    width: 100%;
  }
  button {
    background-color: crimson;
    color: #fff;
  }
  span {
    position: absolute;
    width: 40px;
    height: 40px;
    text-align: center;
    top: 10px;
    left: 10px;
    font-size: 30px;
    background-color: rgba(132, 129, 129, 0);
    cursor: pointer;
    border-radius: 100%;
  }
  span:hover {
    background-color: rgb(132, 129, 129);
  }
</style>