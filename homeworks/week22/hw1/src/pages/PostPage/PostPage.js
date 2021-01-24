/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getPostPage } from '../../webApi';
import avatar from '../../IMG/avatar.png';

const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: colum;
  align-items: center;
`;
const Information = styled.div`
  position: fixed;
  top: 50%;
  margin: 0px 5%;
  align-items: center;

  h2 {
    font-weight: bold;
    text-align: center;
  }

  span {
    display: block;
    text-align: center;
  }
`;
const SinglePage = styled.ul`
  margin: 0 auto;
`;
const Avatar = styled.div`
  width: 150px;
  height: 150px;
  img {
    border-radius: 50%;
    width: 100%;
  }
`;
const About = styled(Link)`
  display: block;
  font-size: 16px;
  color: rgba(21, 87, 23, 1);
  text-decoration none;
  margin: 20px 0;
  text-align: center;
`;
const PostContainer = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
  margin-bottom: 20px;
  padding: 25px 0px;
  max-width: 500px;
`;
const TiTle = styled.h2`
  letter-spacing: 0.1em;
  font-size: 35px;
  overflow-wrap: break-word;
`;
const Content = styled.div`
  overflow: hidden;
  width: 800px;
  font-size: 22px;
`;
const CreatedAt = styled.div`
  margin: 5px 0px;
  color: #6c6c6c;
  font-size: 16px;
`;

function Post({ post }) {
  return (
    <PostContainer>
      <CreatedAt>{new Date(post.createdAt).toLocaleString()}</CreatedAt>
      <TiTle>
標題:
        {post.title}
      </TiTle>
      <Content>{post.body}</Content>
    </PostContainer>
  );
}

export default function PostPage() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getPostPage(id).then(post => setPost(post));
  }, [id]);
  return (
    <Container>
      <Information>
        <Avatar>
          <img src={avatar} alt="avatar" />
        </Avatar>
        <h2>My Blog</h2>
        <About to="/about">關於我</About>
      </Information>
      <SinglePage>
        <Post post={post} key={post.id} />
      </SinglePage>
    </Container>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
