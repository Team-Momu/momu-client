import { useRouter } from 'next/router';
import styled from 'styled-components';
import MbtiArticle from './MbtiArticle';

const MbtiBody = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);

  const question = [
    '좋아하는 음식 종류를 모두 골라주세요!',
    '보통 식당 고민이 될 때 나의 픽은?',
    '자주 가는 식당에 신메뉴가 나왔다면',
    `음식 맛을 평가할 때\n
    내가 중요하게 생각하는 것은`,
    `맛집 선택 시 중요한 항목들을  
    모두 골라주세요!`,
    '선호하는 식당 공간을 골라주세요!',
    '선호하는 식당 공간을 골라주세요!',
    '선호하는 식당 공간을 골라주세요!',
    '매운 맛 이 정도까지 먹을 수 있어요!',
  ];

  return (
    <>
      {/* {stageNumber === 4 && (
        <>
          <Question>
            {
              <>
                음식 맛을 평가할 때
                <Br />
                내가 중요하게 생각하는 것은
              </>
            }
          </Question>
        </>
      )}
      {stageNumber === 5 && (
        <>
          <Question>
            {
              <>
                맛집 선택 시 중요한 항목들을
                <Br />
                모두 골라주세요!
              </>
            }
          </Question>
        </>
      )} */}

      <Question>{question[stageNumber - 1]}</Question>
      <MbtiArticle></MbtiArticle>
    </>
  );
};

const Question = styled.div`
  position: absolute;
  width: 302px;
  height: 24px;
  left: 16px;
  top: 319px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: var(--grey-color1);
`;

const Question2 = styled.div``;

const Br = styled.br`
  margin-bottom: 6px;
`;

export default MbtiBody;
