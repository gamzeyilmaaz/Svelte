<script>
  import Card from "./Card.svelte";
  import { AllTasks, completed, incompleted } from "../stores/store";
  import { fade, scale} from "svelte/transition"
  import { flip } from "svelte/animate"
  export let taskType = "Completed Tasks";
</script>

<div class="all-tasks">
  {#if taskType === "All Tasks"}
    <h1>All To-Do List</h1>
    <div class="box">
      {#each $AllTasks as task (task.id)}
        <div in:fade out:scale|local animate:flip={{duration:500}}>
          <Card {task} />
        </div>
        
      {/each}
    </div>
  {:else if taskType === "Completed Tasks"}
    <h1>Completed Tasks</h1>
    <div class="box">
      {#each $completed as task (task.id)}
      <div in:fade out:scale|local animate:flip={{duration:500}} >
        <Card {task} />
      </div>
      {/each}
    </div>
  {:else if taskType === "Incompleted Tasks"}
    <h1>Incompleted Tasks</h1>
    <div class="box">
      {#each $incompleted as task (task.id)}
      <div in:fade out:scale|local animate:flip={{duration:500}}>
        <Card {task} />
      </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .all-tasks {
    padding: 20px;
    padding-left: 350px;
    padding-right: 300px;
    display: flex;
    flex-direction: column;
  }
  .box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>