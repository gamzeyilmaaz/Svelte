<script>
	import Sidebar from "./components/Sidebar.svelte";
	import TaskDrawer from "./components/TaskDrawer.svelte";
	import MemberDrawer from "./components/MemberDrawer.svelte";
	import ShowAll from "./components/ShowAll.svelte";
	let taskDrawer = false;
	let memberDrawer = true;
	let taskType = "All Tasks"
  
	const handleTask = (e)=> {
	  taskType = e.detail
	}
  </script>
  
  <main>
	<div class="dashboard">
	  <Sidebar
		on:openTaskDrawer={() => (taskDrawer = true)}
		on:openMemberDrawer={() => (memberDrawer = true)}
		on:changeTask={handleTask}
	  />
  
	  <ShowAll {taskType} />
	</div>
  
	<TaskDrawer {taskDrawer} on:closeTaskDrawer={() => (taskDrawer = false)} />
	<MemberDrawer
	  {memberDrawer}
	  on:closeMemberDrawer={() => (memberDrawer = false)}
	/>
  </main>
  
  <style>
	.dashboard {
	  display: flex;
	}
  
	@media (min-width: 640px) {
	  main {
		max-width: none;
	  }
	}
  </style>