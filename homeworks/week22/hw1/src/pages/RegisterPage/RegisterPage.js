/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { register, getMe } from '../../webApi';
import { setAuthToken } from '../../utils';
import { AuthContext } from '../../Contexts';

const RegisterContainer = styled.form`
  max-width: 1440px;
  margin: 0 auto;
`;
const RegisterBox = styled.div`
  position: absolute;
  width: 400px;
  height: 330px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 20px 20px 125px 20px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.div`
  text-align: center;

  span {
    display: block;
    margin-bottom: 10px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  marin: 0 auto;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  input {
    width: 200px;
    border-radius: 4px;
    padding: 6px;
    margin: 18px;
  }
`;
const RegisterButton = styled.button`
  margin: 15px auto;
  width: 140px;
  border-radius: 4px;
  background-color: rgba(34, 34, 34);
  color: white;
  text-align: center;
  line-height: 45px;
  font-size: 18px;
  letter-spacing: 0.1em;
  cursor: pointer;

  &:hover {
    color: rgba(26, 137, 23, 1);
    font-weight: 700;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: red;
`;

export default function RegisterPage() {
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

  const handleInputNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword('Lidemy');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(nickname, username, password).then((data) => {
      if (data.ok !== 1) {
        setErrorMessage(data.message);
      }
      // 把 token 存進去 localstorage
      setAuthToken(data.token);

      // call getMe api 進行身分驗證
      getMe().then((res) => {
        if (res.ok !== 1) {
          setErrorMessage(res.message);
        }
        setUser(res.data);
        history.push('./login');
      });
    });
  };
  return (
    <RegisterContainer onSubmit={handleSubmit}>
      <RegisterBox>
        <Title>
          <h2>Welcome to register</h2>
          <span>Enter the account and password to register</span>
        </Title>
        <Info>
          <InputBox>
            nikname:
            <input
              type="text"
              placeholder="please enter your nickname"
              value={nickname}
              onChange={handleInputNickname}
            />
            account:
            <input
              type="text"
              placeholder="please enter your account"
              value={username}
              onChange={handleInputUsername}
            />
            password:
            <input
              type="password"
              placeholder="please enter your password"
              value={password}
              onChange={handleInputPassword}
            />
          </InputBox>
          <RegisterButton type="submit">Register</RegisterButton>
        </Info>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </RegisterBox>
    </RegisterContainer>
  );
}
