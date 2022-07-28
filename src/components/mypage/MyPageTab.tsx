import { useState } from 'react';
import ScrappedCard from './ScrappedCard';
import WrittenByUser from './WrittenByUser';

const MyPageTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(0)}
        >
          내 게시글
        </li>
      ),
      tabCont: <WrittenByUser />,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? 'is-active' : ''}
          onClick={() => tabClickHandler(1)}
        >
          가보자고
        </li>
      ),
      tabCont: <ScrappedCard />,
    },
  ];

  return (
    <div>
      <ul className="tabs is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
};

export default MyPageTab;
