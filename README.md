# REACT-TRELLO-APP2

## react-beautiful-dnd
### React로 list를 만들기 위한 아름답고 접근 가능한 드래그 앤 드롭
### npm i react-beautiful-dnd
### npm i --save-dev @types/react-beautiful-dnd

## ref (HTML 엘리먼트 내부)
### React의 ref prop은 HTML 엘리먼트의 레퍼런스를 변수에 저장하기 위해서 사용합니다.
### 예를 들어, 다음과 같이 <input> 엘리먼트에 ref prop으로 inputRef라는 변수를 넘기게 되면, 우리는 이 inputRef 객체의 current 속성을 통해서 <input> 엘리먼트에 접근할 수 있고, DOM API를 이용하여 제어할 수 있습니다.

### ex) <input ref={inputRef} />

## declare 키워드는 타입스크립트 컴파일러에게 특정한 변수가 있다고 선언하는 <br>키워드로 전역변수를 사용하거나 .d.ts 파일을 만들때 사용한다.

### TS에는 두 가지의 모듈 선언 방법이 있다.
### 1. declare module "buffer" {}
### 2. declare module buffer {}
### 전자는 외부 모듈(External Module)을 정의하는 방법이며 후자는 내부 모듈(Internal Module)을 정의하는 방법이다. 후자는 namespace가 생기고나서부터declare namespace buffer {}로 교체되었다. 모듈명이 문자열로 감싸져있다면 외부 모듈(ES6)에 대해 정의하는 것이고 문자열로 감싸져있지않다면 내부모듈을 정의하는 것이다.

### provided.placeholder (?ReactElement)
### Draggable 엘리먼트를 드래그하는 동안 position: fixed(영역을 고정시킴)를 적용한다.
### Draggable을 드래그할 때 Droppable 리스트가 작아지는 것을 방지하기 위해 필요하다.
### Draggable 노드의 형제로 렌더링하는 것이 좋다.

### onDragEnd
### result: DropResult
### result.draggableId: 드래그 되었던 Draggable의 id.
### result.type: 드래그 되었던 Draggable의 type.
### result.source: Draggable 이 시작된 위치(location).
### result.destination: Draggable이 끝난 위치(location). 만약에 Draggable이 시작한 위치와 같은 위치로 돌아오면 이 destination값은 null이 될것이다..

### < Draggable /> list의 키
### < Draggable /> list를 렌더링하는 경우 각 < Draggable />에 key prop을 추가하는 것이 중요하다.

### 규칙
### key는 list 내에서 고유해야 하다.
### key에 item의 index가 포함되어서는 안된다. (map의 index사용 X)
### 일반적으로 draggableId를 key로 사용하면 된다.
### 주의! list에 key가 없으면 React가 경고하지만 index를 key로 사용하는 경우 경고하지 않는다. key를 올바르게 사용하지 않으면 정말 안 좋은 일이 생길 수 있다. 💥