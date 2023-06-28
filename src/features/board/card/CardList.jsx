import { useSelector } from "react-redux";
import CardColumn from "../../../components/Tasks/CardColumn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCardsInOneBoardAsync } from "../../../features/board/card/Slice/cardSlice";

function CardList({ boardId }) {
  console.log("boardid", boardId);
  const dispatch = useDispatch();

  const cardItems = useSelector((state) => state.card.cardItems);
  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(boardId)).unwrap();
  }, []);

  console.log("cardItem", cardItems);
  return (
    <>
      <div className="flex flex-row-reverse gap-3 ">
        {cardItems && cardItems.length > 0
          ? cardItems.map((cardItem, index) => (
              <CardColumn key={index} cardItem={cardItem} />
            ))
          : "no todo found"}
      </div>
    </>
  );
}
export default CardList;
