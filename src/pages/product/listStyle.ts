import styled from 'styled-components'

export const ListSection = styled.section`
  padding: 0 1rem;

  .search-box {
    position: relative;
    width: 100%;
    margin: 0 auto;
    z-index: -1;

    input {
      width: 100%;
      border: 0;
      border-radius: 0.25rem;
      padding: 0.25rem 0.75rem;
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

  .announcement-container {
    background: var(--white-900);
    padding: 2rem;
    border-radius: 0.25rem;
    margin-top: 1rem;

    h4 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    strong {
      text-transform: uppercase;
      font-size: 0.85rem;
    }

    .products-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, 320px);
      grid-auto-rows: 300px;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`
