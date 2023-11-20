import './style.css'
import AppHeaderBannerDesktop from '../../assets/images/bg-header-desktop.svg'
import AppHeaderBannerMobile from '../../assets/images/bg-header-mobile.svg'

const AppHeaderBanner = (appHeaderBannerType) => {
  if (appHeaderBannerType.BannerType === 'desktop') {
    return (
      <div className="AppHeaderBanner">
        <img
          src={AppHeaderBannerDesktop}
          className="app-header-banner"
          alt="app-header-banner-desktop"
        />
      </div>
    )
  } else if (appHeaderBannerType.BannerType === 'mobile') {
    return (
      <div className="AppHeaderBanner">
        <img
          src={AppHeaderBannerMobile}
          className="app-header-banner"
          alt="app-header-banner-mobile"
        />
      </div>
    )
  } else {
    return <div>Something went wrong!</div>
  }
}

export default AppHeaderBanner
