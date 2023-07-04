import { useState } from "react";
import AddCardContainer from "./AddCardContainer";
import CardList from "./CardList";

export default function Card({ boardId }) {
  const [fetch, setFetch] = useState(false);
  console.log("fetch in card", fetch);
  return (
    <>
      <div className="flex gap-3 font-semibold text-blue-950">
        <div>
          <CardList boardId={boardId} />
        </div>
        <div>
          <AddCardContainer
            boardId={boardId}
            fetch={fetch}
            setFetch={setFetch}
          />
        </div>
      </div>
    </>
  );
}
