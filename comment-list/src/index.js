import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import compositeContentRefinerFactory from "./content-refiners/compositeContentRefinerFactory";
import compactWhitespaces from "./content-refiners/compactWhitespaces";
import trimWhitespaces from "./content-refiners/trimWhitespaces";
import maskBannedWords from "./content-refiners/maskBannedWords";
import commentComposerFactory from "./commentComposerFactory";

// 포맷팅하는 함수를 인자로 넘기는 것만으로도
// commentComposerFactory 내부 로직은 건드리지 않을 수 있다.
// 이 함수를 이용하는 index.js는 코드의 변경이 불가피하지만, 그 함수 자체(raw)는 변화에 영향을 받지 않는다!
const commentRefiner = compositeContentRefinerFactory([
  compactWhitespaces,
  trimWhitespaces,
  maskBannedWords,
]);

const commentComposer = commentComposerFactory({ commentRefiner });

ReactDOM.render(
  <React.StrictMode>
    <App commentComposer={commentComposer} />
  </React.StrictMode>,
  document.getElementById("root")
);
