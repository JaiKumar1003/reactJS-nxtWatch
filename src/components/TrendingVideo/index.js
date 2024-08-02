import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import ContactUs from '../ContactUs/index'

import {
  TrendingVideoContainer,
  TrendingLogoHeadingCard,
  TrendingCard,
  TrendingResultCard,
  TrendingLogoCard,
  TrendingHeading,
  TredingVideoList,
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
  FailureCard,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureBtn,
  FireIcon,
} from './styledComponents'

import Header from '../Header'

const apiResultsName = {
  loading: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideo extends Component {
  state = {trendingVideoList: [], apiResult: apiResultsName.loading}

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: eachItem.channel,
        title: eachItem.title,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingVideoList: updatedData,
        apiResult: apiResultsName.success,
      })
    } else {
      this.setState({apiResult: apiResultsName.failure})
    }
  }

  onClickRetry = () => {
    this.setState({apiResult: apiResultsName.loading}, this.getVideoList)
  }

  renderFailure = isDarkMode => {
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
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <FailureBtn type="button" onClick={this.onClickRetry}>
          Retry
        </FailureBtn>
      </FailureCard>
    )
  }

  renderSuccess = isDarkMode => {
    const {trendingVideoList} = this.state

    return (
      <>
        <TrendingLogoHeadingCard isDarkMode={isDarkMode}>
          <TrendingLogoCard isDarkMode={isDarkMode}>
            <FireIcon />
          </TrendingLogoCard>
          <TrendingHeading isDarkMode={isDarkMode}>Trending</TrendingHeading>
        </TrendingLogoHeadingCard>
        <TredingVideoList isDarkMode={isDarkMode}>
          {trendingVideoList.map(eachItem => {
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
        </TredingVideoList>
      </>
    )
  }

  renderApiSuccessAndFailure = isDarkMode => {
    const {apiResult} = this.state

    if (apiResult === apiResultsName.success) {
      return this.renderSuccess(isDarkMode)
    }

    return this.renderFailure(isDarkMode)
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

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const {apiResult} = this.state
          return (
            <TrendingVideoContainer>
              <Header />
              <TrendingCard>
                <ContactUs />
                <TrendingResultCard
                  data-testid="trending"
                  isDarkMode={isDarkMode}
                >
                  {apiResult === apiResultsName.loading
                    ? this.renderLoader(isDarkMode)
                    : this.renderApiSuccessAndFailure(isDarkMode)}
                </TrendingResultCard>
              </TrendingCard>
            </TrendingVideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default TrendingVideo
