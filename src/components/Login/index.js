import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginContainer,
  LoginCard,
  LoginLogoImg,
  LoginForm,
  FormLabel,
  FormInput,
  InputCheckboxCard,
  FormInputCheckbox,
  InputCheckboxLabel,
  FormButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    isInvalid: false,
    errorMsg: '',
  }

  getAuthentication = async () => {
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isInvalid: true, errorMsg: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = event => {
    event.preventDefault()

    this.getAuthentication()
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, showPassword, isInvalid, errorMsg} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const websiteLogoImg = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDarkMode={isDarkMode}>
              <LoginCard isDarkMode={isDarkMode}>
                <LoginLogoImg src={websiteLogoImg} alt="website logo" />
                <LoginForm onSubmit={this.onSubmitForm}>
                  <FormLabel isDarkMode={isDarkMode} htmlFor="username">
                    USERNAME
                  </FormLabel>
                  <FormInput
                    isDarkMode={isDarkMode}
                    value={username}
                    onChange={this.onChangeUsername}
                    type="text"
                    placeholder="Username"
                    id="username"
                  />
                  <FormLabel htmlFor="password" isDarkMode={isDarkMode}>
                    PASSWORD
                  </FormLabel>
                  <FormInput
                    isDarkMode={isDarkMode}
                    value={password}
                    onChange={this.onChangePassword}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    id="password"
                  />
                  <InputCheckboxCard>
                    <FormInputCheckbox
                      isDarkMode={isDarkMode}
                      onClick={this.onClickCheckbox}
                      id="showPassword"
                      type="checkbox"
                    />
                    <InputCheckboxLabel
                      isDarkMode={isDarkMode}
                      htmlFor="showPassword"
                    >
                      Show Password
                    </InputCheckboxLabel>
                  </InputCheckboxCard>
                  <FormButton type="submit">Login</FormButton>
                  {isInvalid && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
                </LoginForm>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
