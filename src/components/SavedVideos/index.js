import {Link} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import ContactUs from '../ContactUs/index'

import {
  SavedVideoContainer,
  SavedVideoCard,
  SavedVideoResult,
  SavedLogoHeadingCard,
  SavedLogoCard,
  SavedHeading,
  SavedVideoList,
  VideoItemCard,
  VideoThumbnailCard,
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
  NoSavedVideoCard,
  NoSavedVideoImg,
  NoSavedVideoHeading,
  NoSavedVideoDescription,
  FireIcon,
} from './styledComponents'

import Header from '../Header'

const SavedVideo = () => {
  const renderNoSavedCard = isDarkMode => (
    <NoSavedVideoCard>
      <NoSavedVideoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedVideoHeading isDarkMode={isDarkMode}>
        No saved videos found
      </NoSavedVideoHeading>
      <NoSavedVideoDescription isDarkMode={isDarkMode}>
        You can save your videos while watching them
      </NoSavedVideoDescription>
    </NoSavedVideoCard>
  )

  const renderSuccess = (savedVideoList, isDarkMode) => (
    <>
      <SavedLogoHeadingCard isDarkMode={isDarkMode}>
        <SavedLogoCard isDarkMode={isDarkMode}>
          <FireIcon />
        </SavedLogoCard>
        <SavedHeading isDarkMode={isDarkMode}>Saved Videos</SavedHeading>
      </SavedLogoHeadingCard>
      <SavedVideoList isDarkMode={isDarkMode}>
        {savedVideoList.map(eachItem => {
          const {
            id,
            channel,
            publishedAt,
            title,
            thumbnailUrl,
            viewCount,
          } = eachItem
          const {name} = channel
          const profileImageUrl = channel.profile_image_url

          return (
            <VideoItemCard key={id}>
              <Link
                to={`/videos/${id}`}
                style={{textDecoration: 'none', width: '100%'}}
              >
                <VideoThumbnailCard>
                  <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
                </VideoThumbnailCard>
                <VideoLogoTitleViewsCard>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <VideoTitleViewsCard>
                    <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                    <VideoViewsTimeList>
                      <VideoChannelName>
                        <VideoChannelNamePara>{name}</VideoChannelNamePara>
                      </VideoChannelName>
                      <VideoViews>
                        <VideoViewsPara>{`${viewCount} views`}</VideoViewsPara>
                      </VideoViews>
                      <VideoTime>
                        <VideoTimePara>{publishedAt}</VideoTimePara>
                      </VideoTime>
                    </VideoViewsTimeList>
                  </VideoTitleViewsCard>
                </VideoLogoTitleViewsCard>
              </Link>
            </VideoItemCard>
          )
        })}
      </SavedVideoList>
    </>
  )

  const renderSuccessAndNoSaved = (savedVideoList, isDarkMode) => {
    if (savedVideoList.length !== 0) {
      return renderSuccess(savedVideoList, isDarkMode)
    }

    return renderNoSavedCard(isDarkMode)
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideoList, isDarkMode} = value

        return (
          <SavedVideoContainer>
            <Header />
            <SavedVideoCard>
              <ContactUs />
              <SavedVideoResult
                data-testid="savedVideos"
                isDarkMode={isDarkMode}
              >
                {renderSuccessAndNoSaved(savedVideoList, isDarkMode)}
              </SavedVideoResult>
            </SavedVideoCard>
          </SavedVideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideo
