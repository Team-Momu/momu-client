import { useRouter } from 'next/router';

const MbtiBody = () => {
  const router = useRouter();
  const stageNumber: number = Number(router.asPath.split('/')[2]);

  const question = [
    '좋아하는 음식 종류를 모두 골라주세요!',
    '보통 식당 고민이 될 때 나의 픽은?',
    '자주 가는 식당에 신메뉴가 나왔다면',
    '음식 맛을 평가할 때\n내가 중요하게 생각하는 것은',
    '맛집 선택 시 중요한 항목들을\n모두 골라주세요!',
    '선호하는 식당 공간을 골라주세요!',
    '매운 맛 이 정도까지 먹을 수 있어요!',
  ];

  return (
    <>
      <div></div>
    </>
  );
};

export default MbtiBody;
