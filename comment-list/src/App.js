import { useState } from "react";
import CommentList from "./CommentList";
import Form from "./Form";

function App({ commentComposer }) {
  const [comments, setComments] = useState([]);

  return (
    <div>
      {/*  Form은 commentComposer(간접입력), onNewComment(간접출력)라는 의존성을 가지게 된다.*/}
      <Form
        commentComposer={commentComposer}
        onNewComment={(newComment) => setComments([...comments, newComment])}
      />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
