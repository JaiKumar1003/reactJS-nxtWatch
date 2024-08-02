import styled from 'styled-components'

export const VideoItemCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 26px;
  @media screen and (min-width: 576px) {
    width: 48%;
    margin-bottom: 56px;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
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
`

export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  margin-right: 16px;
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
    return '#00306e'
  }};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.7;
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
    font-weight: 500;
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
    margin-right: 22px;
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
