import styled from 'styled-components'

export const DashboardSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 3rem;
    font-weight: 300;
    font-size: 3rem;
    text-align: center;
  }

  button {
    background: var(--black-900);
    border: 1px solid var(--black-900);
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    margin-top: 2rem;

    color: var(--white-900);
    font-weight: 500;
    text-transform: uppercase;
  }
`

export const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-auto-rows: 280px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 2.5rem;

  padding: 0 1rem 1rem;
  margin-top: 5rem;
  width: 100%;
`

export const ProductCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  background: var(--white-900);
  border-radius: 0.25rem;
  padding: 1.25rem;
  box-shadow: 0 0.125rem 0.315rem 0 rgba(0, 0, 0, 0.25);

  .product-details {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    margin: 0;

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

      transition: all 0.3s ease;

      &:hover {
        background: var(--black-900);
        color: var(--white-900);
      }
    }
  }
`
