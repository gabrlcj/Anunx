import styled from 'styled-components'

export const HomeMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    margin-top: 3rem;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
    margin-top: 5rem;
    text-align: center;
    font-weight: 500;
  }

  .search-box {
    position: relative;
    width: min(670px, 95%);

    input {
      width: 100%;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.25rem 0.75rem;
      margin-top: 1.75rem;
      box-shadow: 0 0.2rem 0.2rem 0 rgba(0, 0, 0, 0.35);
      height: 3rem;
    }

    svg {
      position: absolute;
      right: 1.25rem;
      bottom: 0.8rem;
      color: var(--grey-900);
      cursor: pointer;

      &:hover {
        background: var(--grey-100);
        border-radius: 50%;
      }
    }
  }
`
