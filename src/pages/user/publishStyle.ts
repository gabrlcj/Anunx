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
    width: min(950px, 95%);
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
      margin-top: 1.5rem;
      background: transparent;
      color: var(--black-900);
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--black-900);
      border-radius: 0.25rem;
      font-weight: 500;
      text-transform: uppercase;

      transition: all 0.2s ease;

      &:hover {
        background: var(--black-900);
        color: var(--white-900);
      }
    }
  }
`

export const InputBox = styled.div`
  width: min(950px, 95%);
  margin: 3rem auto 0;
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

  fieldset {
    width: 100%;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    position: relative;

    display: flex;
    align-items: center;

    &:hover,
    &:focus-within {
      border-color: var(--black-900);
    }

    legend {
      font-size: 0.75rem;
      padding: 0 0.25rem;
    }

    input {
      border: 0;
      margin-left: 1rem;
    }

    svg {
      position: absolute;
      left: 0.35rem;
      color: var(--grey-900);
    }
  }

  .thumbs-container {
    display: flex;
    flex-wrap: wrap;

    .dropzone {
      width: 12.5rem;
      height: 9.35rem;
      background: var(--grey-100);
      border: 2px dashed var(--black-900);

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;
      margin-right: 1rem;
      text-align: center;
      cursor: pointer;
    }

    .thumb {
      width: 12.5rem;
      height: 9.35rem;
      background-size: cover;
      background-position: center center;
      position: relative;
      margin: 0 1rem 1rem 0;

      &:hover .mask {
        display: flex;
      }

      .mask {
        background: rgba(0, 0, 0, 0.7);
        height: 100%;

        display: none;
        align-items: center;
        justify-content: center;

        .delete-icon {
          font-size: 2.5rem;
          color: var(--white-900);
          cursor: pointer;

          &:hover {
            background: rgba(255, 255, 255, 0.15);
            border-radius: 50%;
          }
        }
      }

      .main-image {
        color: var(--white-900);
        background: var(--red-500);
        padding: 0.25rem 0.75rem;
        font-weight: 700;

        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`
