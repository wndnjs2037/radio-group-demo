import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as CheckedIcon} from "../assets/icon_checked.svg" //svg 이미지를 컴포넌트로 만들어서 사용
import { ReactComponent as UnCheckedIcon} from "../assets/icon_unchecked.svg"

// 더미데이터를 사용하기 위해 props로 받아줌
export default function Question({ title, questionList }) {
    const [checkedElement, setCheckedElement] = useState(-1); //체크 상태를 확인하기 위한 상태변수 선언

    const onChangeRadioButton = (e) => { // e : 이벤트
        //선택한 element가 체크되었다면 set으로 값을 변경해주고
        //선택한 요소의 index가 checkedElement state 값에 반영되도록 선언한다.
        setCheckedElement(Number(e.target.value)); //숫자형으로 타입캐스팅
        //타입캐스팅을 하지않으면 비교가 제대로 되지 않아 라디오 버튼의 기능이 제대로 작동되지 않는다(선택되지 않음)

        console.log(typeof e.target.value, "타입 확인"); //string이 찍힘을 알 수 있다.
        //checkedElement와 비교했던 index는 숫자라서,
        // string(checkedElement)과 숫자를 비교하면 제대로 된 비교를 할 수 없다.
        // 그렇기 때문에 index를 number 타입으로 타입캐스팅 해주어야 한다.
    }   
  return (
    //만든 스타일드 컴포넌트로 감싸주기
    <QuestionWrap>
      <div className="questionTitle">{title}</div>

      <div>
        {questionList.map((question, index) => (
          //map 함수로 리스트를 돌고 있으므로, 해당 index 마다
          //컴포넌트가 설정되도록 key 값을 index 값으로 설정해준다
          <RadioWrap key={index}>
            {/* 라디오 버튼을 선언하고 - 바닐라js, 나중에 이미지로 바꿔줄거임*/}
            <input 
            type="radio" //라디오 버튼
            value={index} //값은 돌고있는 map의 인덱스로 넣어줌
            checked={checkedElement === index} //index 값과 체크된 element의 값이 같아야 true가 되어 checked에 True 값을 넣어줌
            onChange={onChangeRadioButton}
            />
            {checkedElement === index ?
                (<CheckedIcon></CheckedIcon>  ) :
                (<UnCheckedIcon></UnCheckedIcon>)  
        }
            {/* map을 통해 리스트를 돌며 값을 꺼내온다 */}
            <div className="questionText">{question}</div>
          </RadioWrap>
        ))}
      </div>
    </QuestionWrap>
  );
}

// 스타일드 컴포넌트 정의
const QuestionWrap = styled.div`
    margin-bottom: 16px;

    .questionTitle{
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: bold;
    }

`;

const RadioWrap = styled.label` //label로 선언하는 이유는 라디오 버튼 옆의 텍스트만 선택해도 선택 되도록 감싸주기 위함
    display: flex; //버튼과 텍스트를 가로로 배치하기 위함
    align-items: center;
    margin-bottom: 8px;

    input{
        display: none;
        // 기존에 테스트로 만들었던 라디오 버튼은 안보이게 숨기기
    }

    .questionText{
        margin-left: 8px;
    }

`;
