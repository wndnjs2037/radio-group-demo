import styled from "styled-components";
import Question from "./components/Question";
import { dummy } from "./questionDummy";

function App() {
  return (
    // 내가 만든 스타일드 컴포넌트 불러오기
    <RootWarp>
      {/* 실제 더미데이터를 만들었던 Question 컴포넌트에 뿌려서 내용 확인하기 */}
      {dummy.map((item) => (
        <Question
          key={item.idx}
          title={item.title}
          questionList={item.questionList}
        ></Question>
      ))}
    </RootWarp>
  );
}

export default App;

const RootWarp = styled.div`
  //div에 대한 모든 스타일
  //기본적인 설정값 정의하기
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;

  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fff;

  padding:20px;
`;
