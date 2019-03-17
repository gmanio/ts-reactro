import * as React from 'react';
import * as Styled from './style';
import Swiper from 'swiper';
import './css/swiper.min.css';

interface MapDispatchToProps {
  getMainBanner: () => void;
}

type Props = MapDispatchToProps;

export default class MainBanner extends React.PureComponent<Props> {
  componentDidMount() {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }

  handleBannerClick = (linkUrl: string) => () => {
    window.location.href = linkUrl;
  }

  render() {
    return (
      <Styled.Wrapper className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 5</div>
          <div className="swiper-slide">Slide 6</div>
          <div className="swiper-slide">Slide 7</div>
          <div className="swiper-slide">Slide 8</div>
          <div className="swiper-slide">Slide 9</div>
          <div className="swiper-slide">Slide 10</div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Styled.Wrapper>
    );
  }
}
