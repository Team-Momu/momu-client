import { useState } from 'react';
import ScrappedCard from './ScrappedCard';
import WrittenByUser from './WrittenByUser';
import styled from 'styled-components';
import useScroll from '../../utils/hooks/useScroll';

const MyPageTab = ({ me }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { hasNext, percent, onScroll } = useScroll();

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <TabList
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(0)}
        >
          내 게시글
        </TabList>
      ),
      tabCont: (
        <CardContainer onScroll={onScroll}>
          <WrittenByUser me={me} hasNext={hasNext} />
        </CardContainer>
      ),
    },
    {
      tabTitle: (
        <TabList
          className={activeIndex === 1 ? 'is-active' : ''}
          onClick={() => tabClickHandler(1)}
        >
          가보자고
        </TabList>
      ),
      tabCont: (
        <CardContainer onScroll={onScroll}>
          <ScrappedCard me={me} hasNext={hasNext} />
        </CardContainer>
      ),
    },
  ];

  return (
    <div>
      <TabListContainer>
        <ul className="mypageTab">
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </ul>
      </TabListContainer>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
};

export default MyPageTab;

const TabListContainer = styled.div`
  background: #ffffff;
  z-index: 1;

  width: calc(100% + 16px * 2);
  margin: 0 16px 0 -16px;
`;

const CardContainer = styled.div`
  padding-bottom: 70px;
  margin-left: 1px;
  border: 1px solid #ffffff;
  overflow: scroll;
  height: 100vh;
`;
const TabList = styled.li`
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 20px;
  float: left;
  width: 187.5px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-bottom: 30px;
  color: #999999;
  border-bottom: 1px solid #999999;

  &:hover {
    cursor: pointer;
  }
  &.is-active {
    font-weight: 800;
    font-size: 20px;
    border-bottom: 3px solid #191919;
    color: #191919;
  }
`;
