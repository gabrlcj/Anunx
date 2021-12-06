import styled from 'styled-components'

export const SliderSection = styled.section`
  position: relative;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .left-arrow {
    position: absolute;
    top: 50%;
    left: 1rem;
    color: var(--black-900);
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: 1rem;
    color: var(--black-900);
    z-index: 10;
    cursor: pointer;
    user-select: none;
  }

  .slide {
    display: none;
    opacity: 0;

    &.active {
      display: flex;
      padding: 0.1rem 0;
      opacity: 1;
    }

    .image {
      opacity: 1;
      border-radius: 0.25rem;
    }
  }
`
