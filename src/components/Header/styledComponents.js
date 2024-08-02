import styled from 'styled-components'

import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {IoMdMenu, IoIosClose, IoMdHome} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import {WiDaySunny} from 'react-icons/wi'

export const HeaderContainer = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#181818'
    }
    return '#ffffff'
  }};
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    height: 70px;
    padding-left: 38px;
    padding-right: 38px;
  }
`

export const LinkComponent = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
`

export const LogoLinkComponent = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const PopupIconNameCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
`

export const WebsiteLogoBtn = styled.button`
  background-color: transparent;
  border: none;
`

export const WebsiteLogo = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const HeaderIconCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const HeaderIconBtn = styled.button`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return ''
  }};
  background-color: transparent;
  border: none;
`

export const PopupCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#181818'
    }
    return '#ffffff'
  }};
`

export const HeaderPopupCloseBtn = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
`

export const PopupBodyList = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  padding: 0px;
  list-style-type: none;
`

export const PopupCategoryItem = styled.li`
  background-color: ${props => {
    const bgColor = props.isDarkMode ? '#313131' : '#f1f1f1'
    const color = props.isCurrentCategory ? bgColor : 'transparent'

    return color
  }};
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  width: 100%;
`

export const CategoryName = styled.p`
  color: ${props => {
    const nonCurrentColor = props.isDarkMode ? '#ebebeb' : '#383838'
    const currentColor = props.isDarkMode ? '#ffffff' : '#1e293b'
    const color = props.isCurrentCategory ? currentColor : nonCurrentColor

    return color
  }};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => {
    const weight = props.isCurrentCategory ? 'bold' : ''

    return weight
  }};
  cursor: pointer;
  outline: none;
`

export const CategoryBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
`

export const LogoutPopupContainer = styled.div`
  background-color: #0f0f0f33;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export const LogoutPopupCard = styled.div`
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#181818'
    }
    return '#ffffff'
  }};
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 40vh;
  padding: 26px;
  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 40vh;
  }
`

export const LogoutPopupCloseBtn = styled.button`
  background-color: transparent;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  height: 44px;
  width: 100px;
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 16px;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
`

export const LogoutPopupDesp = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#00306e'
  }};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 30px;
`

export const LogoutPopupBtnCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`

export const LogoutPopupConfirmBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  height: 44px;
  width: 100px;
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 16px;
  cursor: pointer;
  outline: none;
`

export const MoonIcon = styled(FaMoon)`
  cursor: pointer;
  outline: none;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    margin-top: 4px;
  }
`

export const HomeIcon = styled(IoMdHome)`
  margin-right: 20px;
  font-size: 18px;
  color: ${props => props.iconColor};
`

export const TrendingIcon = styled(HiFire)`
  margin-right: 20px;
  font-size: 18px;
  color: ${props => props.iconColor};
`

export const GameIcon = styled(SiYoutubegaming)`
  margin-right: 20px;
  font-size: 16px;
  color: ${props => props.iconColor};
`

export const SavedIcon = styled(RiMenuAddFill)`
  margin-right: 20px;
  font-size: 16px;
  color: ${props => props.iconColor};
`

export const LogoutIcon = styled(FiLogOut)`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  cursor: pointer;
  outline: none;
  font-size: 20px;
  display: inline;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled(IoMdMenu)`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#000000')};
  margin-left: 4px;
  margin-right: 4px;
  font-size: 30px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SunnyIcon = styled(WiDaySunny)`
  color: #ffffff;
  cursor: pointer;
  outline: none;
  font-size: 32px;
  @media screen and (min-width: 768px) {
    font-size: 38px;
    margin-top: 4px;
  }
`

export const CloseIcon = styled(IoIosClose)`
  font-size: 44px;
  font-weight: bold;
  margin: 20px;
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }

    return '#000000'
  }};
`

export const ReactMenuPopup = styled(Popup)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ReactLogoutPopup = styled(Popup)``

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    color: ${props => {
      if (props.isDarkMode) {
        return '#ffffff'
      }
      return '#3b82f6'
    }};
    border: ${props => {
      if (props.isDarkMode) {
        return '2px solid #ffffff'
      }
      return '2px solid #3b82f6'
    }};
    border-radius: 4px;
    height: 32px;
    width: 90px;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    outline: none;
  }
`

export const SpanLogout = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
  }
`

export const UserProfileLogo = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    height: 34px;
    width: 34px;
    margin-left: 20px;
    margin-right: 18px;
  }
`
