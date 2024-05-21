import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const PremiumCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
`

export const PremiumLogoDespBtnCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
`

export const PremiunLogoImg = styled.img`
  width: 140px;
`

export const PremiumDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
  margin-bottom: 22px;
`

export const PremiumBtn = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  border: 1px solid #1e293b;
  height: 40px;
  width: 120px;
  cursor: pointer;
  outline: none;
`

export const PremiumCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const HomeCard = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
`

export const HomeRightBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => {
    console.log(props.isDarkMode)
    if (props.isDarkMode) {
      return '#181818'
    }
    return '#f1f1f1'
  }};
  min-height: 100vh;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 576px) {
    padding-left: 26px;
    padding-right: 26px;
  }
  @media screen and (min-width: 768px) {
    width: 76%;
  }
`

export const SearchVideoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    width: 70%;
    align-self: flex-start;
  }
`

export const SearchInput = styled.input`
  background-color: ${props => {
    if (props.isDarkMode) {
      return 'transparent'
    }
    return '#ffffff'
  }};
  border: ${props => {
    if (props.isDarkMode) {
      return '1px solid #424242'
    }
    return '1px solid #cccccc'
  }};
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#1e293b'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  width: 76%;
  padding: 10px;
  padding-left: 12px;
`

export const SearchBtn = styled.button`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#231f20'
    }
    return '#f1f1f1'
  }};
  border: ${props => {
    if (props.isDarkMode) {
      return '1px solid #424242'
    }
    return '1px solid #cccccc'
  }};
  height: 32px;
  width: 24%;
`

export const SuccessListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const UnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 46px;
  }
`

export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin-top: 56px;
`

export const FailureImg = styled.img`
  width: 80%;
`

export const FailureHeading = styled.h1`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#1e293b'
  }};
  font-family: 'Roboto';
  font-size: 20px;
  font-weigth: bold;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 0px;
`

export const FailureDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin-bottom: 26px;
  line-height: 1.7;
`

export const FailureBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  background-color: #4f46e5;
  height: 46px;
  width: 90px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`

export const NoSearchResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin-top: 56px;
`

export const NoSearchResultImg = styled.img`
  width: 80%;
`

export const NoSearchResultHeading = styled.h1`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#1e293b'
  }};
  font-family: 'Roboto';
  font-size: 20px;
  font-weigth: bold;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 0px;
`

export const NoSearchResultDesp = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin-bottom: 26px;
  line-height: 1.7;
`

export const NoSearchResultBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  background-color: #4f46e5;
  height: 46px;
  width: 90px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
