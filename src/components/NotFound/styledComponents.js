import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NotFoundCard = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 90%;
  margin-top: 56px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`

export const NotFoundResult = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#000000'
    }
    return '#f1f1f1'
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    justify-content: center;
    width: 76%;
  }
`

export const NotFoundImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#1e293b'
  }};
  font-family: 'Roboto';
  font-size: 20px;
  font-weigth: bold;
  margin-top: 30px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 16px;
  }
`

export const NotFoundDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
