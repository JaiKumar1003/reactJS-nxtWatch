import {Component} from 'react'

import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddFill} from 'react-icons/ri'

import NxtWatchContext from '../../context/NxtWatchContext'

import ContactUs from '../ContactUs/index'

import {
  VideoDetailsContainer,
  VideoDetailsCard,
  VideoResultCard,
  VideoSuccessContainer,
  VideoSuccessCard,
  VideoUrlCard,
  ChannelLogo,
  VideoTitle,
  VideoTimeViewsLikeCard,
  VideoViewsTimeList,
  VideoChannelName,
  VideoViews,
  VideoTime,
  VideoViewsPara,
  VideoTimePara,
  VideoLikeDislikeSaveList,
  VideoLikeDislikeItem,
  VideoLikeBtn,
  VideoDislikeBtn,
  VideoSaveBtn,
  HorizontalLine,
  ChannelLogoNameSubCard,
  ChannelNameSubCard,
  ChannelSubscribe,
  VideoDescriptionLg,
  FailureCard,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureBtn,
} from './styledComponents'

import Header from '../Header/index'

const apiResultsName = {
  loading: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetailsObject: {},
    apiResult: apiResultsName.loading,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const videoDetial = data.video_details
      const updatedData = {
        id: videoDetial.id,
        description: videoDetial.description,
        channel: videoDetial.channel,
        title: videoDetial.title,
        publishedAt: videoDetial.published_at,
        videoUrl: videoDetial.video_url,
        thumbnailUrl: videoDetial.thumbnail_url,
        viewCount: videoDetial.view_count,
      }
      this.setState({
        videoDetailsObject: updatedData,
        apiResult: apiResultsName.success,
      })
    } else {
      this.setState({apiResult: apiResultsName.failure})
    }
  }

  renderLoader = isDarkMode => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkMode ? '#ffffff' : '#1e293b'}
        height="50"
        width="50"
      />
    </div>
  )

  onClickRetry = () => {
    this.setState({apiResult: apiResultsName.loading}, this.getVideoDetails)
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {toAddSavedVideo, savedVideoList, isDarkMode} = value

          const {apiResult, videoDetailsObject} = this.state

          const onClickLikeBtn = () => {
            const {isDisliked} = this.state
            if (isDisliked === true) {
              this.setState(prevState => ({
                isDisliked: !prevState.isDisliked,
                isLiked: !prevState.isLiked,
              }))
            } else {
              this.setState(prevState => ({isLiked: !prevState.isLiked}))
            }
          }

          const onClickDislikeBtn = () => {
            const {isLiked} = this.state
            if (isLiked === true) {
              this.setState(prevState => ({
                isDisliked: !prevState.isDisliked,
                isLiked: !prevState.isLiked,
              }))
            } else {
              this.setState(prevState => ({isDisliked: !prevState.isDisliked}))
            }
          }

          const onClickSaveBtn = () => {
            toAddSavedVideo(videoDetailsObject)
          }

          const renderVideoLikeDislikeSaveCard = () => {
            const {isLiked, isDisliked} = this.state

            const {id} = videoDetailsObject
            const findSavedVideo = savedVideoList.find(
              eachItem => eachItem.id === id,
            )
            let isSaved = false
            if (findSavedVideo !== undefined) {
              isSaved = true
            }

            return (
              <VideoLikeDislikeSaveList>
                <VideoLikeDislikeItem key="like">
                  <VideoLikeBtn
                    isLiked={isLiked}
                    onClick={onClickLikeBtn}
                    type="button"
                  >
                    <BiLike style={{fontSize: '20px', marginRight: '6px'}} />{' '}
                    Like
                  </VideoLikeBtn>
                </VideoLikeDislikeItem>
                <VideoLikeDislikeItem key="dislike">
                  <VideoDislikeBtn
                    isDisliked={isDisliked}
                    onClick={onClickDislikeBtn}
                    type="button"
                  >
                    <BiDislike style={{fontSize: '20px', marginRight: '6px'}} />{' '}
                    Dislike
                  </VideoDislikeBtn>
                </VideoLikeDislikeItem>
                <VideoLikeDislikeItem key="save">
                  <VideoSaveBtn
                    isSaved={isSaved}
                    onClick={onClickSaveBtn}
                    type="button"
                  >
                    <RiMenuAddFill
                      style={{fontSize: '14px', marginRight: '6px'}}
                    />{' '}
                    {isSaved ? 'Saved' : 'Save'}
                  </VideoSaveBtn>
                </VideoLikeDislikeItem>
              </VideoLikeDislikeSaveList>
            )
          }

          const renderFailure = () => {
            const failureImg = isDarkMode
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            return (
              <FailureCard>
                <FailureImg src={failureImg} alt="failure view" />
                <FailureHeading isDarkMode={isDarkMode}>
                  Oops! Something Went Wrong
                </FailureHeading>
                <FailureDescription>
                  We are having some trouble to complete your request. Please
                  try again.
                </FailureDescription>
                <FailureBtn type="button" onClick={this.onClickRetry}>
                  Retry
                </FailureBtn>
              </FailureCard>
            )
          }

          const renderSuccess = () => {
            const {
              channel,
              description,
              videoUrl,
              publishedAt,
              title,
              viewCount,
            } = videoDetailsObject

            const {name} = channel
            const profileImageUrl = channel.profile_image_url
            const subscriberCount = channel.subscriber_count

            return (
              <VideoSuccessContainer>
                <VideoUrlCard>
                  <ReactPlayer width="100%" url={videoUrl} controls />
                </VideoUrlCard>
                <VideoSuccessCard>
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                  <VideoTimeViewsLikeCard>
                    <VideoViewsTimeList>
                      <VideoViews>
                        <VideoViewsPara>{`${viewCount} views`}</VideoViewsPara>
                      </VideoViews>
                      <VideoTime>
                        <VideoTimePara>{publishedAt}</VideoTimePara>
                      </VideoTime>
                    </VideoViewsTimeList>
                    {renderVideoLikeDislikeSaveCard()}
                  </VideoTimeViewsLikeCard>
                  <HorizontalLine isDarkMode={isDarkMode} />
                  <ChannelLogoNameSubCard>
                    <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    <ChannelNameSubCard>
                      <VideoChannelName isDarkMode={isDarkMode}>
                        {name}
                      </VideoChannelName>
                      <ChannelSubscribe>{`${subscriberCount} subscribers`}</ChannelSubscribe>
                      <VideoDescriptionLg isDarkMode={isDarkMode}>
                        {description}
                      </VideoDescriptionLg>
                    </ChannelNameSubCard>
                  </ChannelLogoNameSubCard>
                </VideoSuccessCard>
              </VideoSuccessContainer>
            )
          }

          const renderApiSuccessAndFailure = () => {
            if (apiResult === apiResultsName.success) {
              return renderSuccess()
            }

            return renderFailure()
          }

          return (
            <VideoDetailsContainer>
              <Header />
              <VideoDetailsCard>
                <ContactUs />
                <VideoResultCard
                  data-testid="videoItemDetails"
                  isDarkMode={isDarkMode}
                >
                  {apiResult === apiResultsName.loading
                    ? this.renderLoader(isDarkMode)
                    : renderApiSuccessAndFailure(isDarkMode)}
                </VideoResultCard>
              </VideoDetailsCard>
            </VideoDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
