export default function Navbar() {

return (
  <nav className="bg-white border flex h-24">
    <div className="flex-none w-[18.75rem] border-r-2 flex items-center pl-[2.12rem]">
      <p className="font-bold text-3xl"> YKANBAN-M2-CONNECT </p>
    </div>

   <div className="flex justify-between w-full items-center pr-[2.12rem]">
       <p className="text-black text-2xl font-bold pl-6">
         Nom du Tableau
       </p>

      <div className="flex items-center space-x-3">
        <button className="bg-blue-500 text-black px-4 py-2 flex rounded-3xl items-center space-x-2">
           <p>+ Ajouter une tâche</p>
        </button>
          <div className="flex items-center">
            <button className="text-3xl mb-4">...</button>
          </div>
        </div>
      </div>
    </nav>
  )}