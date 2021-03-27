import { css } from "emotion";
import React from "react";
import { ClipLoader } from "react-spinners";
import { PRIMARY } from "../../lib/color";

export default function Loader(props) {
  const mobile = css`
    display: block;
    margin: 0 auto;
    border-width: 5px;
  `;
  return (
    <ClipLoader
      css={mobile}
      sizeUnit={"px"}
      size={props.size || 50}
      color={PRIMARY}
      loading={props.isLoading}
    />
  );
}
