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
      <div>
        <MainFeed />
        <SliderContainer className="sticky top-0">
          <FeedHeader />
        </SliderContainer>

        <FeedList />
      </div>
    </body>
  );
};

// const [container, setContainer] = useState<HTMLDivElement | null>(null);

// return (
//   <Wrapper>
//     <SliderContainer className="scrollable-container" ref={setContainer}>
//       <Container className="background">
//         <MainFeed />
//         <Affix target={() => container}>
//           <FeedHeader />
//         </Affix>
//       </Container>
//     </SliderContainer>
//     <FeedList />
//   </Wrapper>
// );
// };

export default Feed;
const Wrapper = styled.div`
  height: 573px;
  // overflow-y: scroll;
`;
const SliderContainer = styled.div`
  background: #ffffff;
`;

const Container = styled.div`
  height: 300px;
  padding-top: 60px; //padding 593px
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
`;
