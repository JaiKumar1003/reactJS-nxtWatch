import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const VideoDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 100%;
`

export const VideoResultCard = styled.div`
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
    padding-left: 24px;
    padding-right: 24px;
  }
`

export const VideoSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const VideoSuccessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-top: 16px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const VideoUrlCard = styled.div`
  margin-top: 26px;
  width: 100%;
`

export const VideoTitleViewsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
  padding-right: 24px;
`

export const VideoTitle = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#d7dfe9'
    }
    return '#00306e'
  }};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
`

export const VideoTimeViewsLikeCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const VideoViewsTimeList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0px;
  color: #64748b;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const VideoViews = styled.li`
  list-style-type: none;
  line-height: 1.5;
  margin-right: 20px;
`

export const VideoTime = styled.li`
  list-style-type: disc;
  line-height: 1.5;
`

export const VideoViewsPara = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoTimePara = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoLikeDislikeSaveList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    width: 50%;
  }
`

export const VideoLikeDislikeItem = styled.li`
  list-style-type: none;
`

export const VideoLikeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${props => {
    if (props.isLiked === true) {
      return '#2563eb'
    }
    return '#64748b'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-right: 16px;
`

export const VideoDislikeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${props => {
    if (props.isDisliked === true) {
      return '#2563eb'
    }
    return '#64748b'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-right: 16px;
`

export const VideoSaveBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${props => {
    if (props.isSaved === true) {
      return '#4f46e5'
    }
    return '#616e7c'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-right: 16px;
`

export const HorizontalLine = styled.hr`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#64748b'
    }
    return '#cbd5e1'
  }};
  height: 1px;
  border: 0;
  width: 100%;
`

export const ChannelLogoNameSubCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    margin-top: 22px;
  }
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 50px;
    border-radius: 36px;
  }
`

export const ChannelNameSubCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoChannelName = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#d7dfe9'
    }
    return '#1e293b'
  }};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 0px;
  }
`

export const ChannelSubscribe = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-weight: 500;
  }
`

export const VideoDescriptionLg = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#d7dfe9'
    }
    return '#00306e'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.7;
`

export const VideoDescriptionSm = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#d7dfe9'
    }
    return '#00306e'
  }};
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.7;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const FailureCard = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 80%;
  margin-top: 56px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 66px;
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
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 26px;
  line-height: 1.7;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
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
