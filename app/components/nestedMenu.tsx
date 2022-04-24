import { useState } from "react";

// Space, Enter	Opens submenu and moves focus to the first item in the submenu.

// Right Arrow – Moves focus to the next item in the menubar.
// – If focus is on the last item, it moves focus to the first item.

// Left Arrow	– Moves focus to the previous item in the menubar.
// – If focus is on the first item, it moves the focus to the last item.

// Down Arrow	Opens submenu and moves focus to the first item in the submenu.

// Up Arrow	Opens submenu and moves focus to the last item in the submenu.

// Home	Moves focus to the first item in the menubar.

// End	Moves focus to the last item in the menubar.

// Character	– Moves focus to the next item in the menubar having a name that starts with the typed character.
// – If none of the items have a name starting with the typed character, the focus does not move.


export default function nestedMenuTemplate({children}){

  const [lastSelected, setLastSelected] = useState();


  return (

    <nav>
      <li>
        <button>level 1</button>

      </li>

    </nav>
  )



}