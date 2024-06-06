import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
`

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 15px;
  text-align: center;
`
