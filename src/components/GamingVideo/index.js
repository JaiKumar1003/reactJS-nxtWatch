import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import ContactUs from '../ContactUs/index'

import {
  GamingVideoContainer,
  GamingCard,
  GamingResultCard,
  GamingLogoHeadingCard,
  GamingLogoCard,
  GamingHeading,
  GamingVideoList,
  VideoItemCard,
  VideoThumbnailCard,
  VideoThumbnail,
  VideoLogoTitleViewsCard,
  VideoTitleViewsCard,
  VideoTitle,
  VideoViewsTimeList,
  VideoViews,
  VideoViewsPara,
  FailureCard,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureBtn,
  GameIcon,
} from './styledComponents'

import Header from '../Header'

const apiResultsName = {
  loading: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideo extends Component {
  state = {gamingVideoList: [], apiResult: apiResultsName.loading}

  componentDidMount() {
    this.getVideoList()
  }

  getVideoList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideoList: updatedData,
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
    const {gamingVideoList} = this.state

    return (
      <>
        <GamingLogoHeadingCard isDarkMode={isDarkMode}>
          <GamingLogoCard isDarkMode={isDarkMode}>
            <GameIcon />
          </GamingLogoCard>
          <GamingHeading isDarkMode={isDarkMode}>Gaming</GamingHeading>
        </GamingLogoHeadingCard>
        <GamingVideoList isDarkMode={isDarkMode}>
          {gamingVideoList.map(eachItem => {
            const {id, title, thumbnailUrl, viewCount} = eachItem

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
                    <VideoTitleViewsCard>
                      <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                      <VideoViewsTimeList>
                        <VideoViews>
                          <VideoViewsPara>{`${viewCount} Watching Worldwide`}</VideoViewsPara>
                        </VideoViews>
                      </VideoViewsTimeList>
                    </VideoTitleViewsCard>
                  </VideoLogoTitleViewsCard>
                </Link>
              </VideoItemCard>
            )
          })}
        </GamingVideoList>
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
            <GamingVideoContainer>
              <Header />
              <GamingCard>
                <ContactUs />
                <GamingResultCard data-testid="gaming" isDarkMode={isDarkMode}>
                  {apiResult === apiResultsName.loading
                    ? this.renderLoader(isDarkMode)
                    : this.renderApiSuccessAndFailure(isDarkMode)}
                </GamingResultCard>
              </GamingCard>
            </GamingVideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default GamingVideo
