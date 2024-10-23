import { flexMixin, fontMixin, tag_color, gray } from "../styled/styled";
import styled from "styled-components";

export default function Content({ content }) {
  const StyledContentContainer = styled.div`
  ${flexMixin({direction: "column", align: "flex-start", gap: "5px"})}
    img {
      width: 300px;
      border-radius: 10px;
      margin-bottom: 3px;
      min-height: 225px;
    }
    span {
      ${fontMixin({size: "12px"})}
      color: ${tag_color};
      border: 1px solid ${tag_color};
      padding: 4px 5px;
      border-radius: 3px;
    }
    div {
      ${fontMixin({size: "12px", weight: "600"})}
    }
    p {
      ${fontMixin({size: "12px"})}
      @include font($size: 12px);
      color: ${gray};
    }
  `;

  return (
    <StyledContentContainer>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyledContentContainer>
  );
}
