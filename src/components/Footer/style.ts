import styled from 'styled-components'

export const FooterContainer = styled.footer`
  max-width: 1240px;
  margin: 0 auto;

  .footer-text {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    border-top: 1px solid var(--black-700);

    a {
      padding: 4rem 0;
      color: var(--black-700);

      @media (max-width: 720px) {
        padding: 2rem 0;
      }
    }
  }
`
