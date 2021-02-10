/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import avatar from '../../IMG/avatar.png';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 10% auto;
`;
const Avatar = styled.div`
  width: 150px;
  height: 150px;
  margin: auto;

  img {
    border-radius: 50%;
    width: 100%;
  }
`;
const AboutContent = styled.div`
  margin: 20px auto;
  & + & {
    margin: 10px 0;
  }
`;
export default function AboutPage() {
  return (
    <AboutContainer>
      <Avatar>
        <img src={avatar} alt="avatar" />
      </Avatar>
      <AboutContent>
        <p>我是 Bryan，目前參加程式導師計畫第四期，學習前端技術。</p>
        <p>這裡會記錄我在程式導師計畫裡的心得與一些筆記。</p>
      </AboutContent>
    </AboutContainer>
  );
}
