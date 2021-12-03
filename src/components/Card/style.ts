import styled from 'styled-components'

export const ProductCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.15rem;

  background: var(--white-900);
  border-radius: 0.25rem;
  padding-bottom: 1rem;
  box-shadow: 0 0.125rem 0.315rem 0 rgba(0, 0, 0, 0.25);

  .product-details {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
    padding-left: 1rem;

    h2 {
      font-weight: 500;
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0 auto;

    button {
      background: transparent;
      color: var(--black-900);
      border: 0;
      margin: 0;

      transition: all 0.3s ease;

      &:hover {
        background: var(--black-900);
        color: var(--white-900);
      }
    }
  }
`
