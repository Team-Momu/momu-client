import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';
import FeedHeader from 'components/feed/FeedHeader';

import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

const Feed: NextPage = () => {
  return (
    <body>
      <Wrapper>
        <MainFeed />
        <SliderContainer className="sticky top-0">
          <FeedHeader />
        </SliderContainer>
        <FeedList />
      </Wrapper>
    </body>
  );
};

export default Feed;
const Wrapper = styled.div`
  background: #ffffff;
`;
const SliderContainer = styled.div`
  background: #ffffff;
`;
