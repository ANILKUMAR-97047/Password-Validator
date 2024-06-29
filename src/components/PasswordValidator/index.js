// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  PasswordContainer,
  Heading,
  Description,
  InputContainer,
  PasswordInput,
  AlertMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const alertMessage =
    password.length < 8 ? 'Your password must be at least 8 characters' : ''
  return (
    <BgContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputContainer>
          <PasswordInput
            value={password}
            type="password"
            onChange={onChangePassword}
          />
          <AlertMessage>{alertMessage}</AlertMessage>
        </InputContainer>
      </PasswordContainer>
    </BgContainer>
  )
}

export default PasswordValidator
