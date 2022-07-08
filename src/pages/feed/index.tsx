import { NextPage } from 'next';
import styled from 'styled-components';
import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';
import FeedHeader from 'components/feed/FeedHeader';
import { useState } from 'react';
import { Affix, Layout, Menu } from 'antd';

const Feed: React.FC = () => {
  const [top, setTop] = useState(0);
  const { Sider, Content } = Layout;

  return (
    <Wrapper>
      <Layout>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet sapien a augue lacinia lobortis. Etiam eleifend neque non nulla
            eleifend rutrum. Nunc dui mi, suscipit eu lacus ut, vehicula
            fringilla nisi. Aliquam bibendum, tortor ut volutpat iaculis, mi
            magna aliquam dui, eget blandit tortor lorem eget risus. Morbi eget
            facilisis nisl. Sed et consectetur tortor. Vivamus venenatis tortor
            ac nulla pulvinar, quis gravida enim gravida. Curabitur lacus arcu,
            commodo eget ultricies et, posuere et ante. Fusce justo nibh,
            vulputate id dignissim quis, fermentum vel neque. Quisque imperdiet
            lectus ut erat porttitor, sed bibendum massa pharetra.
          </p>
          <p>
            Aenean imperdiet nisl sit amet tincidunt varius. Pellentesque varius
            purus id eros sollicitudin dictum pulvinar a est. Morbi augue eros,
            mattis at tellus ut, convallis gravida metus. Sed elementum a arcu
            et pretium. In malesuada nec magna vulputate pretium. Aliquam id
            magna venenatis, commodo nibh eget, ultricies magna. Ut fermentum
            vehicula dapibus. Proin nec fermentum eros. Sed ac enim lobortis
            quam maximus consequat. In interdum ipsum nec magna scelerisque
            mollis. Nullam consectetur arcu mauris, quis efficitur dui gravida
            at. Vestibulum sed sapien tortor. Vivamus tristique gravida est, a
            imperdiet nulla sollicitudin at.
          </p>
          <Affix offsetTop={top}>
            <h1 style={{ backgroundColor: '#fffe' }}>Affixed content</h1>
          </Affix>
          <p>
            Praesent id fringilla sapien, vitae sollicitudin magna. Vestibulum
            scelerisque, orci non rutrum tempus, magna mi vehicula elit, in
            pretium felis lacus aliquet nisi. Pellentesque tempus sapien et
            condimentum imperdiet. Maecenas vel urna eu ligula placerat
            hendrerit. Aenean a quam dictum, molestie ex eu, lobortis odio. Cras
            semper malesuada ante nec ultricies. Aenean semper, augue id varius
            condimentum, ligula neque congue turpis, sed ornare sem ex vel
            massa. Vivamus condimentum magna sit amet augue dictum aliquet.
            Donec volutpat urna elit, ut molestie diam auctor at. Morbi sit amet
            sodales nulla. Integer venenatis nec tellus a luctus. In ac
            elementum arcu, sed mattis ligula. Curabitur tempus aliquet viverra.
            Suspendisse potenti. Cras commodo scelerisque risus, vitae elementum
            quam condimentum non. Phasellus ipsum purus, consectetur sit amet
            nisl ac, dictum ornare odio. Vestibulum dapibus enim sit amet dictum
            interdum.
          </p>
          <p>
            Praesent id fringilla sapien, vitae sollicitudin magna. Vestibulum
            scelerisque, orci non rutrum tempus, magna mi vehicula elit, in
            pretium felis lacus aliquet nisi. Pellentesque tempus sapien et
            condimentum imperdiet. Maecenas vel urna eu ligula placerat
            hendrerit. Aenean a quam dictum, molestie ex eu, lobortis odio. Cras
            semper malesuada ante nec ultricies. Aenean semper, augue id varius
            condimentum, ligula neque congue turpis, sed ornare sem ex vel
            massa. Vivamus condimentum magna sit amet augue dictum aliquet.
            Donec volutpat urna elit, ut molestie diam auctor at. Morbi sit amet
            sodales nulla. Integer venenatis nec tellus a luctus. In ac
            elementum arcu, sed mattis ligula. Curabitur tempus aliquet viverra.
            Suspendisse potenti. Cras commodo scelerisque risus, vitae elementum
            quam condimentum non. Phasellus ipsum purus, consectetur sit amet
            nisl ac, dictum ornare odio. Vestibulum dapibus enim sit amet dictum
            interdum.
          </p>
          <p>
            Praesent id fringilla sapien, vitae sollicitudin magna. Vestibulum
            scelerisque, orci non rutrum tempus, magna mi vehicula elit, in
            pretium felis lacus aliquet nisi. Pellentesque tempus sapien et
            condimentum imperdiet. Maecenas vel urna eu ligula placerat
            hendrerit. Aenean a quam dictum, molestie ex eu, lobortis odio. Cras
            semper malesuada ante nec ultricies. Aenean semper, augue id varius
            condimentum, ligula neque congue turpis, sed ornare sem ex vel
            massa. Vivamus condimentum magna sit amet augue dictum aliquet.
            Donec volutpat urna elit, ut molestie diam auctor at. Morbi sit amet
            sodales nulla. Integer venenatis nec tellus a luctus. In ac
            elementum arcu, sed mattis ligula. Curabitur tempus aliquet viverra.
            Suspendisse potenti. Cras commodo scelerisque risus, vitae elementum
            quam condimentum non. Phasellus ipsum purus, consectetur sit amet
            nisl ac, dictum ornare odio. Vestibulum dapibus enim sit amet dictum
            interdum.
          </p>
          <p>
            Praesent id fringilla sapien, vitae sollicitudin magna. Vestibulum
            scelerisque, orci non rutrum tempus, magna mi vehicula elit, in
            pretium felis lacus aliquet nisi. Pellentesque tempus sapien et
            condimentum imperdiet. Maecenas vel urna eu ligula placerat
            hendrerit. Aenean a quam dictum, molestie ex eu, lobortis odio. Cras
            semper malesuada ante nec ultricies. Aenean semper, augue id varius
            condimentum, ligula neque congue turpis, sed ornare sem ex vel
            massa. Vivamus condimentum magna sit amet augue dictum aliquet.
            Donec volutpat urna elit, ut molestie diam auctor at. Morbi sit amet
            sodales nulla. Integer venenatis nec tellus a luctus. In ac
            elementum arcu, sed mattis ligula. Curabitur tempus aliquet viverra.
            Suspendisse potenti. Cras commodo scelerisque risus, vitae elementum
            quam condimentum non. Phasellus ipsum purus, consectetur sit amet
            nisl ac, dictum ornare odio. Vestibulum dapibus enim sit amet dictum
            interdum.
          </p>
          <p>
            Praesent id fringilla sapien, vitae sollicitudin magna. Vestibulum
            scelerisque, orci non rutrum tempus, magna mi vehicula elit, in
            pretium felis lacus aliquet nisi. Pellentesque tempus sapien et
            condimentum imperdiet. Maecenas vel urna eu ligula placerat
            hendrerit. Aenean a quam dictum, molestie ex eu, lobortis odio. Cras
            semper malesuada ante nec ultricies. Aenean semper, augue id varius
            condimentum, ligula neque congue turpis, sed ornare sem ex vel
            massa. Vivamus condimentum magna sit amet augue dictum aliquet.
            Donec volutpat urna elit, ut molestie diam auctor at. Morbi sit amet
            sodales nulla. Integer venenatis nec tellus a luctus. In ac
            elementum arcu, sed mattis ligula. Curabitur tempus aliquet viverra.
            Suspendisse potenti. Cras commodo scelerisque risus, vitae elementum
            quam condimentum non. Phasellus ipsum purus, consectetur sit amet
            nisl ac, dictum ornare odio. Vestibulum dapibus enim sit amet dictum
            interdum.
          </p>
        </Content>
      </Layout>
    </Wrapper>
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
//};

export default Feed;

const Wrapper = styled.div`
  height: 573px;
  overflow-y: scroll;
`;
const SliderContainer = styled.div`
  height: 593px;
  padding-top: 400px; //padding 593px

  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
`;

const Container = styled.div``;
