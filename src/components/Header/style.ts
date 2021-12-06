import styled from 'styled-components'
import { FadeIn } from '../../../styles/animations'

export const HeaderContainer = styled.header`
  background: var(--black-900);
  padding: 1rem 0;
  box-shadow: 0 0 0.25rem 0.15rem var(--black-900);

  .header-nav {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--white-900);
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      .user-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2rem;
        cursor: pointer;
        position: relative;

        img {
          clip-path: circle();
        }

        strong {
          color: var(--white-900);
          margin-left: 0.75rem;
        }

        span {
          animation: ${FadeIn} 0.4s ease;
        }

        .menu-links {
          background: var(--white-900);
          border-radius: 0.25rem;

          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;

          position: absolute;
          bottom: -500%;
          right: -10%;
          animation: ${FadeIn} 0.3s ease;

          @media (max-width: 1080px) {
            bottom: -480%;
            right: -0%;
          }

          @media (max-width: 720px) {
            bottom: -460%;
            right: 0%;
          }

          a {
            color: var(--black-900);
            width: 100%;
            padding: 0.75rem;
            border-radius: 0.25rem;

            &:hover {
              background: var(--grey-100);
            }
          }

          hr {
            background: var(--black-900);
            width: 100%;
          }
        }

        .arrow {
          position: absolute;
          bottom: -115%;
          width: 1.125rem;
          height: 1.125rem;
          display: block;
          background: var(--white-900);
          transform: translateY(-50%) rotate(45deg);
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
  }
`
