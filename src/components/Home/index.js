import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {IoIosClose, IoIosSearch} from 'react-icons/io'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header/index'
import VideoItem from '../VideoItem/index'
import ContactUs from '../ContactUs/index'

import {
  HomeContainer,
  PremiumContainer,
  PremiumCard,
  PremiumLogoDespBtnCard,
  PremiunLogoImg,
  PremiumDescription,
  PremiumBtn,
  PremiumCloseButton,
  HomeCard,
  HomeRightBody,
  SearchVideoCard,
  SearchInput,
  SearchBtn,
  SuccessListContainer,
  UnorderList,
  FailureCard,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureBtn,
  NoSearchResultCard,
  NoSearchResultImg,
  NoSearchResultHeading,
  NoSearchResultDesp,
  NoSearchResultBtn,
} from './styledComponents'

const apiResultsName = {
  loading: 'LOADER',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    apiResult: apiResultsName.loading,
    showPremium: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedVideoList = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: eachItem.channel,
        title: eachItem.title,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiResult: apiResultsName.success,
        videosList: updatedVideoList,
      })
    } else {
      this.setState({apiResult: apiResultsName.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  onClickClosePremium = () => {
    this.setState({showPremium: false})
  }

  renderPremiumCard = () => (
    <PremiumContainer data-testid="banner">
      <PremiumCard>
        <PremiumLogoDespBtnCard>
          <PremiunLogoImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <PremiumDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </PremiumDescription>
          <PremiumBtn>GET IT NOW</PremiumBtn>
        </PremiumLogoDespBtnCard>
        <PremiumCloseButton
          data-testid="close"
          type="button"
          onClick={this.onClickClosePremium}
        >
          <IoIosClose fontSize="28px" />
        </PremiumCloseButton>
      </PremiumCard>
    </PremiumContainer>
  )

  onClickRetry = () => {
    this.setState({apiResult: apiResultsName.loading}, this.getVideosList)
  }

  renderFailureView = isDarkMode => (
    <FailureCard>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
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

  renderNoSearchResult = isDarkMode => (
    <NoSearchResultCard>
      <NoSearchResultImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultHeading isDarkMode={isDarkMode}>
        No Search results found
      </NoSearchResultHeading>
      <NoSearchResultDesp>
        Try different key words or remove search filter
      </NoSearchResultDesp>
      <NoSearchResultBtn type="button" onClick={this.onClickRetry}>
        Retry
      </NoSearchResultBtn>
    </NoSearchResultCard>
  )

  renderSuccessView = isDarkMode => {
    const {videosList} = this.state

    if (videosList.length === 0) {
      return this.renderNoSearchResult(isDarkMode)
    }

    return (
      <SuccessListContainer>
        <UnorderList>
          {videosList.map(eachItem => (
            <VideoItem key={eachItem.id} videoObject={eachItem} />
          ))}
        </UnorderList>
      </SuccessListContainer>
    )
  }

  renderApiSuccessAndFailure = isDarkMode => {
    const {apiResult} = this.state

    if (apiResult === apiResultsName.success) {
      return this.renderSuccessView(isDarkMode)
    }

    return this.renderFailureView(isDarkMode)
  }

  onClickSearchBtn = () => {
    this.setState({apiResult: apiResultsName.loading}, this.getVideosList)
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
          const {apiResult, showPremium, searchInput} = this.state

          return (
            <HomeContainer>
              <Header />
              <HomeCard isDarkMode={isDarkMode}>
                <ContactUs />
                <HomeRightBody data-testid="home" isDarkMode={isDarkMode}>
                  {showPremium && this.renderPremiumCard()}
                  <SearchVideoCard>
                    <SearchInput
                      isDarkMode={isDarkMode}
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      type="search"
                      placeholder="Search"
                    />
                    <SearchBtn
                      onClick={this.onClickSearchBtn}
                      isDarkMode={isDarkMode}
                      type="button"
                      data-testid="searchButton"
                    >
                      <IoIosSearch
                        style={{
                          color: '#64748b',
                          fontSize: '16px',
                          cursor: 'pointer',
                          outline: 'none',
                        }}
                      />
                    </SearchBtn>
                  </SearchVideoCard>
                  {apiResultsName.loading === apiResult
                    ? this.renderLoader(isDarkMode)
                    : this.renderApiSuccessAndFailure(isDarkMode)}
                </HomeRightBody>
              </HomeCard>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
