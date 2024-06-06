import { Button, ErrorMessage, Form, Input, LoginFormContainer, Title } from './styles'
import React, { useState, type FC } from 'react'

const Login: FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'user' && password === 'pass') {
      setError('')
      alert('Login successful!')
    } else {
      setError('Invalid username or password')
    }
  }
  return (
    <LoginFormContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Login</Button>
      </Form>
    </LoginFormContainer>
  )
}

export default Login
