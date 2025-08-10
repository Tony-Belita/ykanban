export default function BoardTasks() {
   return (
    <div className="overflow-x-auto overflow-y-auto w-full bg-stone-200">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-black text-sm">
            Ce tableau est vide. Ajoutez des colonnes pour commencer à organiser vos tâches.
            
          </p>
          <button className="bg-blue-500 text-black px-4 py-2 flex mt-6 rounded-3xl items-center space-x-2">
            <p>+ Ajouter une nouvelle colonne</p>
          </button>
        </div>
      </div>
    </div>
    );
   }