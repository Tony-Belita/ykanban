interface IDropdown {
    show: boolean
   }

   export default function Dropdown({ show }: IDropdown) {

    return (
      <div
        className={`${
          show ? "block" : "hidden"
        } w-48 absolute top-full bg-blue-500
         border shadow-lg right-0 py-2 rounded-2xl z-10`}
      >
        <div className="hover:bg-gray-300">
          <button className="text-sm px-4 py-2">Modifier le tableau</button>
        </div>
        <div className="hover:bg-red-300">
          <button className="text-sm px-4 py-2x">
            Supprimer le tableau
          </button>
        </div>
      </div>
    )}