import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#181818'
    }
    return '#f9f9f9'
  }};
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

export const LoginCard = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#000000'
    }
    return '#ffffff'
  }};
  border: none;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 44%;
  }
`

export const LoginLogoImg = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 180px;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`

export const FormLabel = styled.label`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#94a3b8'
  }};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-top: 26px;
`

export const FormInput = styled.input`
  background-color: transparent;
  border: ${props => {
    if (props.isDarkMode) {
      return '2px solid #383838'
    }
    return '2px solid #d7dfe9'
  }};
  border-radius: 4px;
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#1e293b'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  heigth: 44px;
  width: 100%;
  padding: 12px;
  padding-left: 14px;
  margin-top: 8px;
`

export const InputCheckboxCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 12px;
`

export const FormInputCheckbox = styled.input`
  border: ${props => {
    if (props.isDarkMode) {
      return '1px solid #000000'
    }
    return '1px solid #1e293b'
  }};
  height: 16px;
  width: 16px;
  cursor: pointer;
  outline: none;
`

export const InputCheckboxLabel = styled.label`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#0f0f0f'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 6px;
  cursor: pointer;
  outline: none;
`

export const FormButton = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  margin-top: 26px;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 14px;
  align-self: flex-start;
`
