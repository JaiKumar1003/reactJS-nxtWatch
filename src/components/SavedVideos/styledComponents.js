import styled from 'styled-components'

import {HiFire} from 'react-icons/hi'

export const SavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const SavedVideoCard = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
`

export const SavedVideoResult = styled.div`
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

export const SavedLogoHeadingCard = styled.div`
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

export const SavedLogoCard = styled.div`
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
  heigth: 48px;
  width: 48px;
  padding: 6px;
  @media screen and (min-width: 768px) {
    height: 68px;
    width: 68px;
    border-radius: 36px;
  }
`

export const SavedHeading = styled.h1`
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

export const SavedVideoList = styled.ul`
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
  padding: 0px;
  padding-top: 30px;
  padding-bottom: 30px;
  list-style-type: none;
  margin-top: 0px;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 56px;
    padding-left: 56px;
  }
`

export const VideoItemCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 36px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 56px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 66px;
  }
`

export const VideoThumbnailCard = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 48%;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoLogoTitleViewsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  @media screen and (min-width: 576px) {
    width: 48%;
    margin-top: 0px;
    margin-left: 20px;
  }
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  margin-right: 16px;
  @media screen and (min-width: 576px) {
    display: none;
  }
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
  @media screen and (min-width: 576px) {
    margin-top: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const VideoViewsTimeList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0px;
  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
  }
`

export const VideoChannelName = styled.li`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  list-style-type: none;
  line-height: 1.5;
  margin-right: 20px;
  @media screen and (min-width: 576px) {
    width: 100%;
    margin-bottom: 6px;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const VideoViews = styled.li`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  list-style-type: disc;
  line-height: 1.5;
  margin-right: 20px;
  @media screen and (min-width: 576px) {
    list-style-type: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoTime = styled.li`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  list-style-type: disc;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoChannelNamePara = styled.p`
  margin: 0px;
`

export const VideoViewsPara = styled.p`
  margin: 0px;
`

export const VideoTimePara = styled.p`
  margin: 0px;
`

export const NoSavedVideoCard = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin-top: 56px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`

export const NoSavedVideoImg = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 46%;
  }
`

export const NoSavedVideoHeading = styled.h1`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#1e293b'
  }};
  font-family: 'Roboto';
  font-size: 24px;
  font-weigth: bold;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 0px;
`

export const NoSavedVideoDescription = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#d7dfe9'
    }
    return '#475569'
  }};
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  margin-bottom: 26px;
  line-height: 1.7;
`

export const FireIcon = styled(HiFire)`
  color: #ff0b37;
  font-size: 36px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
