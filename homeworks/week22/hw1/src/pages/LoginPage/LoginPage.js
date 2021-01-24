/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { getMe, login } from '../../webApi';
import { setAuthToken } from '../../utils';
import { AuthContext } from '../../Contexts';

const LoginContainer = styled.form`
  max-width: 1440px;
  margin: 0 auto;
`;
const LoginBox = styled.div`
  position: absolute;
  width: 400px;
  height: 330px;
  border: 1px solid black;
  margin: 0 auto;
  padding: 45px 20px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Title = styled.div`
  text-align: center;

  span {
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
    margin: 15px;
  }
`;
const LoginButton = styled.button`
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

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    login(username, password).then((data) => {
      console.log(data);
      if (data.ok !== 1) {
        setErrorMessage(data.message);
      }
      setAuthToken(data.token);

      // 進行身分驗證
      getMe().then((res) => {
        if (res.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(res.message);
        }
        setUser(res.data);
        history.push('/');
      });
    });
  };

  const handleInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword('Lidemy');
  };
  return (
    <LoginContainer onSubmit={handleSubmit}>
      <LoginBox>
        <Title>
          <h2>Welcome back</h2>
          <span>Enter the account and password</span>
        </Title>
        <Info>
          <InputBox>
            <input
              type="text"
              placeholder="please enter your account"
              value={username}
              onChange={handleInputUsername}
            />
            <input
              type="password"
              placeholder="please enter your password"
              value={password}
              onChange={handleInputPassword}
            />
          </InputBox>
          <LoginButton type="submit">Login</LoginButton>
        </Info>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </LoginBox>
    </LoginContainer>
  );
}
