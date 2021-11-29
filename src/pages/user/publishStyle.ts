import styled from 'styled-components'

export const PublishSection = styled.section`
  margin-bottom: 1rem;

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      margin-top: 3rem;
      font-size: 3rem;
      font-weight: 300;
    }

    p {
      font-size: 1.15rem;
    }
  }

  .button-div {
    width: min(880px, 95%);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      margin-top: 1.5rem;
      background: var(--black-900);
      color: var(--white-900);
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--black-900);
      border-radius: 0.25rem;
      font-weight: 500;
      text-transform: uppercase;

      transition: all 0.2s ease;

      &:hover {
        background: var(--white-900);
        border: 1px solid var(--white-900);
        color: var(--black-900);
      }
    }
  }
`

export const InputBox = styled.div`
  width: min(880px, 95%);
  margin: 3rem auto 0;
  background: var(--white-900);
  box-shadow: 0 0.125rem 0.315rem 0 rgba(0, 0, 0, 0.25);
  padding: 1.15rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 300;
  }

  label {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  input {
    border: 0;
    outline: none;
    border-bottom: 1px solid var(--black-900);
    width: 100%;
    height: 1.5rem;
    font-size: 1.025rem;
  }

  select {
    width: 100%;
    border: 0;
    outline: none;
    border-bottom: 1px solid var(--black-900);
    font-size: 1.025rem;
    padding-bottom: 0.15rem;

    &:focus {
      background: var(--grey-100);
    }
  }

  textarea {
    width: 100%;
    resize: none;

    &:hover {
      border: 1px solid var(--black-900);
    }
  }
`
