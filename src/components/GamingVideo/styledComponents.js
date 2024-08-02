import styled from 'styled-components'

import {SiYoutubegaming} from 'react-icons/si'

export const GamingVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const GamingCard = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
`

export const GamingResultCard = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#0f0f0f'
    }
    return '#f1f1f1'
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 76%;
  }
`

export const GamingLogoHeadingCard = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#0f0f0f'
    }
    return '#ebebeb'
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  padding-left: 26px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    height: 120px;
    padding-left: 46px;
  }
`

export const GamingLogoCard = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#000000'
    }
    return '#d7dfe9'
  }};
  border: none;
  border-radius: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  heigth: 44px;
  width: 44px;
  padding: 6px;
  @media screen and (min-width: 768px) {
    height: 68px;
    width: 68px;
    border-radius: 36px;
  }
`

export const GamingHeading = styled.h1`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#0f0f0f'
  }};
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin-left: 16px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const GamingVideoList = styled.ul`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#000000'
    }
    return '#f1f1f1'
  }};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-heigth: 100vh;
  width: 100%;
  padding: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
  list-style-type: none;
  margin-top: 0px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 46px;
  }
`

export const VideoItemCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  margin-bottom: 46px;
  @media screen and (min-width: 576px) {
    width: 32%;
    margin-bottom: 56px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 66px;
  }
`

export const VideoThumbnailCard = styled.div`
  width: 100%;
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoLogoTitleViewsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
`

export const VideoTitleViewsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const VideoTitle = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ebebeb'
    }
    return '#0f0f0f'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  line-height: 1.7;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const VideoViewsTimeList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0px;
  margin-top: 0px;
`

export const VideoViews = styled.li`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  list-style-type: none;
  line-height: 1.7;
  margin-right: 20px;
  margin-top: 0px;
`

export const VideoViewsPara = styled.p`
  margin: 0px;
`

export const FailureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin-top: 56px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 76px;
    justify-content: center;
  }
`

export const FailureImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
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
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const FailureDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
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

export const GameIcon = styled(SiYoutubegaming)`
  color: #ff0b37;
  font-size: 28px;
`
