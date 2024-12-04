import Container from "../ui/Container";
import { H1 } from "../ui/styled";
import RowLink from "../ui/RowLink";
import mailIcon from "src/assets/email.svg";
import octicon from "src/assets/octicon.svg";
import phoneIcon from "src/assets/phone.svg";

export default function Main() {
  return (
    <Container>
      <H1>
        최종택<span className="text-gray-500 text-sm">JongtaekChoi</span>
      </H1>
      <div>
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
    </Container>
  );
}
