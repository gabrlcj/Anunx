import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: var(--black-900);
  margin: 0 auto;
  padding: 1rem 0;
  box-shadow: 0 0 0.25rem 0.15rem var(--black-900);

  p {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--white-900);
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    .user-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      cursor: pointer;

      img {
        clip-path: circle();
      }

      strong {
        color: var(--white-900);
        margin-left: 0.75rem;
      }
    }
  }

  button {
    font-size: 0.875rem;
    background: transparent;
    border: 1px solid var(--grey-900);
    border-radius: 0.25rem;
    color: var(--white-900);
    padding: 0.5rem 0.75rem;
    text-transform: uppercase;

    transition: border 0.2s ease;

    &:hover {
      border: 1px solid var(--white-900);
    }
  }
`
