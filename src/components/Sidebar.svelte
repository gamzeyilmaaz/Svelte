<script>
  import { createEventDispatcher, onMount } from "svelte";
   
  const dispatch = createEventDispatcher();  

  let taskTypes = ["All Tasks", "Completed Tasks", "Incompleted Tasks"];
  let selectedTask = "All Tasks";
</script>

<div class="sidebar">
  <div class="add-btn">
    <div on:click={() => dispatch("openTaskDrawer")} class="add-task-btn">
      Add Task
    </div>
    <div on:click={() => dispatch("openMemberDrawer")} class="add-member-btn">
      Add Member
    </div>
  </div>

  <div class="separate" />

  <div class="task-type">
    {#each taskTypes as task (task)}
      <li
        class:selected={selectedTask === task}
        on:click={() => {
          selectedTask = task;
          dispatch('changeTask', task);
        }}
      >
        {task}
      </li>
    {/each}
  </div>
</div>

<style>
  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 20vw;
    height: 100vh;
    padding: 20px;
    background-color: rgb(160, 160, 227);
    display: flex;
    flex-direction: column;
  }
  .add-btn {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  .add-task-btn,
  .add-member-btn {
    width: 60px;
    height: 40px;
    background-color: rgb(221, 57, 90);
    color: rgb(223, 210, 210);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
  }
  .add-member-btn:hover {
    background-color: crimson;
  }
  .add-task-btn:hover {
    background-color: crimson;
  }
  .separate {
    width: 100%;
    height: 3px;
    background-color: orange;
  }
  .task-type {
    padding-top: 20px;
  }
  li {
    list-style: none;
    font-size: 20px;
    color: rgb(224, 211, 211);
    cursor: pointer;
    width: fit-content;
  }
  li:hover {
    color: #fff;
  }
  .selected {
    border-bottom: 2px solid crimson;
    color: #fff;
  }
</style>
