import Sidebar from "./components/Sidebar"
import BoardTasks from "./components/BoardTasks"


export default function Home() { // page principal
  return (
    <main className="flex h-full">
      <BoardTasks />
      <Sidebar />
    </main>
  )
}