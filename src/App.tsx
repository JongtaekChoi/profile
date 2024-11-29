import "./App.css";

import RowLink from "./ui/RowLink";
import mailIcon from "./assets/email.svg";
import octicon from "./assets/octicon.svg";
import phoneIcon from "./assets/phone.svg";

function App() {
  return (
    <div>
      <h1>
        최종택<span className="text-gray-500 text-sm">JongtaekChoi</span>
      </h1>
      <div className="mt-4">
        <a
          className="row github"
          href="https://github.com/JongtaekChoi"
          target="_blank"
        >
          <img src={octicon} className="logo octicon" alt="Github logo" />
          <span>https://github.com/JongtaekChoi</span>
        </a>
      </div>
      <div>
        <a className="row github" href="mailto:lastchoice86@naver.com">
          <img src={mailIcon} className="logo email" alt="Email logo" />
          lastchoice86@naver.com
        </a>
      </div>
      <RowLink src={phoneIcon} href="tel:+821066557217">
        +82 10-6655-7217
      </RowLink>
    </div>
  );
}

export default App;
