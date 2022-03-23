import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms.tsx";
import Board from "./Components/Borad.tsx";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${props => props.theme.cardColor};
`;


function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source}:DropResult) => {
    console.log(draggableId);
    console.log(destination);
    console.log(source);
    if(!destination) return;
    // setToDos((oldToDos) => {
    //   const copyToDos = [...oldToDos];
    //   // 1) 아이템 삭제 source.index
    //   console.log("아이템 삭제 시작", source.index);
    //   console.log(copyToDos);
    //   copyToDos.splice(source.index, 1);
    //   console.log("아이템 삭제 완료");
    //   // 2) destination.index로 item 다시 돌려두기
    //   console.log("아이템 복귀", draggableId, "on", destination.index);
    //   copyToDos.splice(destination?.index, 0, draggableId);
    //   return copyToDos;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]}/>
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
