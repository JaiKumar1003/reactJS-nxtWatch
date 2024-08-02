import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ContactUsContainer,
  HomeIcon,
  TrendingIcon,
  GameIcon,
  SavedIcon,
  CategoryList,
  LinkRoute,
  CategoryItem,
  ContactUsCard,
  ContactUsHeading,
  ContactUsImgCard,
  ContactUsImg,
  ContactUsDescription,
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

class ContactUs extends Component {
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

  renderContactUs = isDarkMode => (
    <ContactUsCard>
      <ContactUsHeading isDarkMode={isDarkMode}>CONTACT US</ContactUsHeading>
      <ContactUsImgCard>
        <ContactUsImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <ContactUsImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <ContactUsImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </ContactUsImgCard>
      <ContactUsDescription isDarkMode={isDarkMode}>
        Enjoy! Now to see your channels and recommendations!
      </ContactUsDescription>
    </ContactUsCard>
  )

  renderCategoryList = isDarkMode => {
    const {currentCategoryId} = this.state
    return (
      <CategoryList>
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
            <CategoryItem
              isDarkMode={isDarkMode}
              isCurrentCategory={isCurrentCategory}
              key={id}
            >
              <LinkRoute
                isDarkMode={isDarkMode}
                isCurrentCategory={isCurrentCategory}
                key={id}
                to={`/${routeName()}`}
              >
                {icon(isCurrentCategory)}
                {name}
              </LinkRoute>
            </CategoryItem>
          )
        })}
      </CategoryList>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <ContactUsContainer isDarkMode={isDarkMode}>
              {this.renderCategoryList(isDarkMode)}
              {this.renderContactUs(isDarkMode)}
            </ContactUsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(ContactUs)
