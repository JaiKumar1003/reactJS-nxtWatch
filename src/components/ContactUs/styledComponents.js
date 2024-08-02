import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

export const ContactUsContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    background-color: ${props => {
      if (props.isDarkMode) {
        return '#181818'
      }
      return '#ffffff'
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 24%;
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

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;
  min-height: 80vh;
  width: 100%;
  padding: 0px;
  list-style-type: none;
  margin-top: 0px;
`

export const LinkRoute = styled(Link)`
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
  width: 100%;
  text-decoration: none;
`

export const CategoryItem = styled.li`
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
  padding-left: 20px;
  height: 46px;
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

export const ContactUsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
`

export const ContactUsHeading = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#00306e'
  }};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
`

export const ContactUsImgCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const ContactUsImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
`

export const ContactUsDescription = styled.p`
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff'
    }
    return '#00306e'
  }};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
  margin-right: 20px;
`
