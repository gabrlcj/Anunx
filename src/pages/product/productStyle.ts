import styled from 'styled-components'

export const ProductSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;

  div {
    border-radius: 0.25rem;
    background: var(--white-900);
    padding: 2rem;
    margin: 1rem 0;
  }

  section {
    width: min(868px, 70%);

    .carousel-container {
      padding: 0;
    }

    .product-title {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1.25rem;

      span {
        font-size: 0.75rem;
      }

      h3 {
        font-weight: 300;
        font-size: 2rem;
      }

      h4 {
        font-size: 2rem;
      }

      small {
        background: var(--grey-500);
        width: fit-content;
        padding: 0.5rem 0.85rem;
        border-radius: 1rem;
      }
    }

    .product-description {
      h4 {
        margin-bottom: 0.5rem;
      }
    }
  }

  aside {
    width: min(372px, 30%);

    .product-owner {
      display: flex;
      align-items: center;

      div {
        padding: 0;
        padding-left: 1rem;
        margin: 0;

        small {
          color: var(--grey-900);
        }
      }
    }
  }
`
