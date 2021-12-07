import styled, { keyframes } from 'styled-components'

const Fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const SliderSection = styled.section`
  position: relative;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 2rem;
    color: var(--black-900);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 2rem;
    color: var(--black-900);
    z-index: 10;
    cursor: pointer;
    user-select: none;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
  }

  .slide {
    display: none;

    &.active {
      display: flex;
      padding: 0;
      animation: ${Fade} 1.25s ease;
    }

    .image {
      border-radius: 0.25rem;
    }
  }
`
