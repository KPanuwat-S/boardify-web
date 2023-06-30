import { useSelector } from "react-redux";
import CardColumn from "../../../components/Tasks/CardColumn";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCardsInOneBoardAsync } from "../../../features/board/card/Slice/cardSlice";

function CardList({ boardId }) {
  console.log("boardid", boardId);
  const dispatch = useDispatch();

  const cardItems = useSelector((state) => state.card.cardItems);
  console.log("cardItems", cardItems);
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId)).unwrap();
    console.log("runing fetch");
    console.log("fetch", fetch);
  }, [fetch]);

  return (
    <>
      <div className="flex flex-row-reverse gap-3 ">
        {cardItems && cardItems.length > 0
          ? cardItems.map((cardItem, index) => (
              <CardColumn
                key={index}
                cardItem={cardItem}
                fetch={fetch}
                setFetch={setFetch}
              />
            ))
          : "no todo found"}
      </div>
    </>
  );
}
export default CardList;
