import { css } from "@emotion/react";
import React from 'react';
import { FadeLoader } from 'react-spinners';
import "../Loading/Loading.css";

const override = css`
  display:block;
  margin: 0px auto;
  border-color: "#31393f";
`;

const Loading = (loadingStatus) => {
    return (
        <div className='loading'>
            <FadeLoader color={"#02409c"} loading={loadingStatus} css={override} size={20} />
        </div>
    );
};

export default Loading;