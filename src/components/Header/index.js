import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HeaderContainer,
  LinkComponent,
  LogoLinkComponent,
  PopupIconNameCard,
  WebsiteLogo,
  HeaderIconCard,
  HeaderIconBtn,
  PopupCard,
  HeaderPopupCloseBtn,
  PopupBodyList,
  PopupCategoryItem,
  CategoryName,
  LogoutPopupContainer,
  LogoutPopupCard,
  LogoutPopupDesp,
  LogoutPopupBtnCard,
  LogoutPopupCloseBtn,
  LogoutPopupConfirmBtn,
  ReactMenuPopup,
  ReactLogoutPopup,
  MoonIcon,
  HomeIcon,
  TrendingIcon,
  GameIcon,
  SavedIcon,
  LogoutIcon,
  MenuIcon,
  SunnyIcon,
  CloseIcon,
  LogoutBtn,
  SpanLogout,
  UserProfileLogo,
} from './styledComponents'

const categoryList = [
  {
    id: '1',
    name: 'Home',
    icon: isCurrentCategory => {
      const iconColor = isCurrentCategory ? '#ff0000' : '#616e7c'

      return <HomeIcon iconColor={iconColor} />
    },
  },
  {
    id: '2',
    name: 'Trending',
    icon: isCurrentCategory => {
      const iconColor = isCurrentCategory ? '#ff0000' : '#616e7c'
      return <TrendingIcon iconColor={iconColor} />
    },
  },
  {
    id: '3',
    name: 'Gaming',
    icon: isCurrentCategory => {
      const iconColor = isCurrentCategory ? '#ff0000' : '#616e7c'

      return <GameIcon iconColor={iconColor} />
    },
  },
  {
    id: '4',
    name: 'Saved videos',
    icon: isCurrentCategory => {
      const iconColor = isCurrentCategory ? '#ff0000' : '#616e7c'

      return <SavedIcon iconColor={iconColor} />
    },
  },
]

class Header extends Component {
  state = {currentCategoryId: categoryList[0].id}

  componentDidMount() {
    const {match} = this.props
    const {path} = match
    if (path === '/') {
      this.setState({currentCategoryId: categoryList[0].id})
    } else if (path === '/trending') {
      this.setState({currentCategoryId: categoryList[1].id})
    } else if (path === '/gaming') {
      this.setState({currentCategoryId: categoryList[2].id})
    } else if (path === '/saved-videos') {
      this.setState({currentCategoryId: categoryList[3].id})
    } else {
      this.setState({currentCategoryId: ''})
    }
  }

  onClickConfirm = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  renderLogoutPopup = isDarkMode => (
    <ReactLogoutPopup
      modal
      trigger={
        <LogoutBtn type="button" isDarkMode={isDarkMode}>
          <LogoutIcon isDarkMode={isDarkMode} />
          <SpanLogout>Logout</SpanLogout>
        </LogoutBtn>
      }
    >
      {close => (
        <LogoutPopupContainer>
          <LogoutPopupCard isDarkMode={isDarkMode}>
            <LogoutPopupDesp isDarkMode={isDarkMode}>
              Are you sure, you want to logout
            </LogoutPopupDesp>
            <LogoutPopupBtnCard>
              <LogoutPopupCloseBtn type="button" onClick={() => close()}>
                Cancel
              </LogoutPopupCloseBtn>
              <LogoutPopupConfirmBtn
                onClick={this.onClickConfirm}
                type="button"
              >
                Confirm
              </LogoutPopupConfirmBtn>
            </LogoutPopupBtnCard>
          </LogoutPopupCard>
        </LogoutPopupContainer>
      )}
    </ReactLogoutPopup>
  )

  renderMenuPopup = isDarkMode => {
    const {currentCategoryId} = this.state

    return (
      <>
        <UserProfileLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <ReactMenuPopup
          modal
          trigger={
            <HeaderIconBtn type="button">
              <MenuIcon isDarkMode={isDarkMode} />
            </HeaderIconBtn>
          }
        >
          {close => (
            <PopupCard isDarkMode={isDarkMode}>
              <HeaderPopupCloseBtn type="button" onClick={() => close()}>
                <CloseIcon isDarkMode={isDarkMode} />
              </HeaderPopupCloseBtn>
              <PopupBodyList>
                {categoryList.map(eachItem => {
                  const {id, name, icon} = eachItem
                  const isCurrentCategory = currentCategoryId === id
                  const routeName = () => {
                    if (id === '1' || id === '4') {
                      if (id === '4') {
                        return 'saved-videos'
                      }
                      return ''
                    }
                    return name.toLowerCase()
                  }

                  return (
                    <PopupCategoryItem
                      isDarkMode={isDarkMode}
                      isCurrentCategory={isCurrentCategory}
                      key={id}
                    >
                      <LinkComponent to={`/${routeName()}`}>
                        <PopupIconNameCard>
                          {icon(isCurrentCategory)}
                          <CategoryName
                            isDarkMode={isDarkMode}
                            isCurrentCategory={isCurrentCategory}
                          >
                            {name}
                          </CategoryName>
                        </PopupIconNameCard>
                      </LinkComponent>
                    </PopupCategoryItem>
                  )
                })}
              </PopupBodyList>
            </PopupCard>
          )}
        </ReactMenuPopup>
      </>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, darkLightMode} = value
          const websiteLogo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const onClickDarkMode = () => {
            darkLightMode(!isDarkMode)
          }

          return (
            <HeaderContainer isDarkMode={isDarkMode}>
              <LogoLinkComponent to="/">
                <WebsiteLogo src={websiteLogo} alt="website logo" />
              </LogoLinkComponent>
              <HeaderIconCard>
                <HeaderIconBtn
                  data-testid="theme"
                  type="button"
                  onClick={onClickDarkMode}
                  isDarkMode={isDarkMode}
                >
                  {isDarkMode ? <SunnyIcon /> : <MoonIcon />}
                </HeaderIconBtn>
                {this.renderMenuPopup(isDarkMode)}
                {this.renderLogoutPopup(isDarkMode)}
              </HeaderIconCard>
            </HeaderContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
