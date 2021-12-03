import styled from 'styled-components'

export const DashboardSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    background: var(--black-900);
    border: 1px solid var(--black-900);
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    margin-top: 1.25rem;

    color: var(--white-900);
    font-weight: 500;
    text-transform: uppercase;
  }
`

export const ProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  grid-auto-rows: 350px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 2rem;

  padding: 0 0.75rem 1rem;
  margin-top: 3rem;
  width: 100%;
`
