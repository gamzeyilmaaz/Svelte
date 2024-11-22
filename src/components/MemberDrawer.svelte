<script>
    import { fly } from "svelte/transition"
    import { createEventDispatcher} from "svelte"
    import { members} from "../stores/store"

    const dispatch = createEventDispatcher();
    export let memberDrawer;

let member;
let valid=false;
let error = "";


const handleSubmit = ()=> {
    valid = true;
    if(member.trim().length < 3){
        valid = false;
        error = "Member name must be at least 3 chars"
    }else{
        error=""
    }
    if(valid){
        members.update(currentMembers => {
        return [...currentMembers, member]
    })
    }
    member = ""

    
}

</script>

{#if memberDrawer}
    <div transition:fly={{ x:200,duration:1500}} class="drawer">
    <span on:click={()=>dispatch('closeMemberDrawer')} >X</span>
    <h1>Add Member </h1>
    <form on:submit|preventDefault = {handleSubmit} >
        <input on:input={()=> error = ""} type="text" placeholder="member name..." bind:value={member} >
        <p class="error">{error}</p>
        <button type="submit">Submit Member</button>
    </form>
</div>
{/if}

<style>
    .drawer{
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
    h1{
        color: rgb(54, 52, 52);
    }
    form{
        display: flex;
        flex-direction: column;

    }
    input,button{
        border-radius: 5px;
        width: 100%;
    }
    button{
        background-color: crimson;
        color: #fff;
    }
    span{
        position: absolute;
        width: 40px;height: 40px;
        text-align: center;
        top: 10px;
        left: 10px;
        font-size: 30px;
        background-color: rgba(132, 129, 129,0);
        cursor: pointer;
        border-radius: 100%;
    }
    span:hover{
        background-color: rgb(132, 129, 129); 
    }
    .error{
        color: red;
    }
</style>