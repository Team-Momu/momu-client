import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  BackButton,
  BackIcon,
  HeaderContainer,
  HeaderLeftSide,
  HeaderTextContainer,
  Line,
} from 'styles/headerstyle/HeaderCommonStyle';

const RequestHeader = () => {
  const router = useRouter();
  return (
    <>
      <HeaderContainer>
        <HeaderLeftSide>
          <BackButton onClick={() => router.back()}>
            <BackIcon src={'/img/header/backbutton.svg'} />
          </BackButton>
        </HeaderLeftSide>
        <SubmitButton>완료</SubmitButton>
      </HeaderContainer>
      <Line></Line>
    </>
  );
};

export default RequestHeader;

const SubmitButton = styled.button`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  color: #999999;
  margin-right: 24px;
`;
