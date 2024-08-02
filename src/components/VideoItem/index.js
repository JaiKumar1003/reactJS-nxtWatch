import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemCard,
  VideoThumbnail,
  VideoLogoTitleViewsCard,
  ChannelLogo,
  VideoTitleViewsCard,
  VideoTitle,
  VideoViewsTimeList,
  VideoChannelName,
  VideoViews,
  VideoTime,
  VideoChannelNamePara,
  VideoViewsPara,
  VideoTimePara,
} from './styledComponents'

const VideoItemDetails = props => {
  const {videoObject} = props
  const {id, channel, publishedAt, title, thumbnailUrl, viewCount} = videoObject

  const {name} = channel
  const profileImageUrl = channel.profile_image_url

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <VideoItemCard>
            <Link
              to={`/videos/${id}`}
              style={{textDecoration: 'none', width: '100%'}}
            >
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />

              <VideoLogoTitleViewsCard>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <VideoTitleViewsCard>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <VideoViewsTimeList>
                    <VideoChannelName>
                      <VideoChannelNamePara isDarkMode={isDarkMode}>
                        {name}
                      </VideoChannelNamePara>
                    </VideoChannelName>
                    <VideoViews>
                      <VideoViewsPara
                        isDarkMode={isDarkMode}
                      >{`${viewCount} views`}</VideoViewsPara>
                    </VideoViews>
                    <VideoTime>
                      <VideoTimePara isDarkMode={isDarkMode}>
                        {publishedAt}
                      </VideoTimePara>
                    </VideoTime>
                  </VideoViewsTimeList>
                </VideoTitleViewsCard>
              </VideoLogoTitleViewsCard>
            </Link>
          </VideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItemDetails
