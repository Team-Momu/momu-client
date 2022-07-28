import { useState } from 'react';
import ScrappedCard from './ScrappedCard';
import WrittenByUser from './WrittenByUser';
import styled from 'styled-components';

const MyPageTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        <div>
          <WrittenByUser />
        </div>
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
        <div>
          <ScrappedCard />
        </div>
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
  width: 340px;
`;
const TabList = styled.li`
  float: left;
  width: 170px;
`;
