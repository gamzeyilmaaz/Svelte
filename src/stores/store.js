import { derived} from "svelte/store"
import { persistStore } from "./persistStore"




const initial = [
]

const memberInitial = ["All Team"]

export const AllTasks = persistStore('data',initial)

export const members = persistStore('members',memberInitial)

export const completed = derived(
    AllTasks,
    $AllTasks => $AllTasks.filter(task => task.isCompleted === true)
)

export const incompleted = derived(
    AllTasks,
    $AllTasks => $AllTasks.filter(task => task.isCompleted === false)
)