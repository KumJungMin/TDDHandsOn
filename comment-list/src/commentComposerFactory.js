import { v4 as uuidv4 } from "uuid";
import commentRefiner from "../src/content-refiners/compactWhitespaces";

// 1. 초기 코드
// commentRefiner라는 함수에 의존적인 상태
function commentComposerFactory1() {
  return ({ author, content }) => {
    return {
      id: uuidv4(),
      author,
      content: commentRefiner(content),
      createdTime: new Date(),
    };
  };
}

//  2. commentRefiner를 인자로 넘기는 경우
// commentRefiner라는 구체적인 함수에 의존하지 않는다.
// 심지어 기획이 변경되어, commentRefiner를 다른 기능으로 바꿀 때,
// commentComposerFactory를 변경하지 않아도 된다!(환경 적응력이 높은 코드)
// 이런 형태의 코드는 단위 테스트가 용이하다
function commentComposerFactory({ commentRefiner }) {
  return ({ author, content }) => {
    return {
      id: uuidv4(),
      author,
      content: commentRefiner(content),
      createdTime: new Date(),
    };
  };
}

export default commentComposerFactory;
