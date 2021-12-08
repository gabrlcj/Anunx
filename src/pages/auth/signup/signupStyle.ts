import styled from 'styled-components'

export const SignUpSection = styled.section`
  .title-container {
    text-align: center;

    h3 {
      font-weight: 300;
      margin-top: 1rem;
    }
  }
`

export const InputBox = styled.div`
  width: min(850px, 95%);
  margin: 2.5rem auto 0;
  background: var(--white-900);
  box-shadow: 0 0.125rem 0.315rem 0 rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .input-container {
    width: 100%;
    margin-bottom: 1rem;

    input {
      border: 0;
      outline: none;
      border-bottom: 1px solid var(--black-900);
      width: 100%;
      height: 1.75rem;
      font-size: 1.025rem;
      margin-bottom: 0.5rem;
    }

    span.error {
      color: red;
    }

    .error {
      border-color: rgba(255, 0, 0, 0.75);

      &::placeholder {
        color: rgba(255, 0, 0, 0.75);
      }
    }
  }

  button {
    width: 100%;
    background: var(--black-900);
    color: var(--white-900);
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--black-900);
    border-radius: 0.25rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
