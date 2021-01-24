/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import banner from '../IMG/bannerr.jpg';

const BannerContainer = styled.div`
  height: 500px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;
export default function Banner() {
  return (
    <BannerContainer>
      <img src={banner} alt="banner" />
    </BannerContainer>
  );
}
