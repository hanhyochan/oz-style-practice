import { flexMixin, fontMixin } from "../styled/styled";
import styled from "styled-components";

export default function Header() {

  const StyledHeaderContainer = styled.header`
  ${flexMixin({ justify: "space-between", align: "center" })}
    padding: 20px 20px;
    background-color: black;
    ul {
      ${flexMixin({ justify: "center", align: "center", gap: "20px" })}
      li {
        ${fontMixin({ size: "16px", weight: 400 })}
        list-style: none;
      }
    }
  `;

  return (
    <StyledHeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyledHeaderContainer>
  );
}
