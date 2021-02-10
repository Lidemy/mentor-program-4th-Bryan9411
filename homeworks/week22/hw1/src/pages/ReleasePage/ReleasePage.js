/* eslint-disable consistent-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addPost } from '../../webApi';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;

  h2 {
    text-align: center;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid black;
  border-radius: 4px;
  width: 70%;
  padding: 20px;

  input {
    width: 40%;
    padding: 5px;
    margin: 10px 0;
  }
  span {
  }
  textarea {
    width: 80%;
    height: 300px;
    padding: 5px;
    margin: 10px 0;
  }
  button {
    width: 5%;
    padding: 5px;
    margin: 10px 0;
  }
`;
const Error = styled.div`
  color: red;
  margin: 10px auto;
  font-size: 16px;
`;
export default function ReleasePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 呼叫 addPost api
    addPost(title, content).then((data) => {
      console.log(data);
      if (data.ok === 0) {
        return setErrorMessage(data.message.toString());
      }
      history.push('/');
    });
  };

  return (
    <FormContainer>
      <h2>新增文章</h2>
      <Form>
        <h4>標題:</h4>
        <input type="text" value={title} onChange={handleInputTitle} />
        <h4>內容:</h4>
        <textarea type="text" value={content} onChange={handleInputContent} />
        <button type="submit" onClick={handleSubmit}>
          送出
        </button>
      </Form>
      {errorMessage && <Error>資料有缺</Error>}
    </FormContainer>
  );
}
