import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  padding: 5rem;
  background-color: #071013;
  color: white;
  line-height: 1;

  i {
    font-family: Calibri;
    position: absolute;
    line-height: 1;
    cursor: pointer;
    top: 0;
    right: 0;
    padding: 1rem 4rem;
    font-style: normal;

    :hover {
      background-color: #ff0035;
    }
  }
  header {
    margin-bottom: 5rem;
    strong {
      color: #ffb20f;
      font-weight: 800;
    }
    h3 {
      font-weight: 200;
      margin-bottom: 1rem;
    }
    dd {
      font-size: 3rem;
      font-weight: 100;
      color: #757575;
    }
  }

  .frame-container {
    .frame {
      overflow-x: hidden;
      width: 100%;
      display: flex;
      gap: 5rem;

      justify-content: flex-start;

      > div {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        flex: 1 0 100%;
        transition: all 600ms ease-in;

        &.second-stage {
          transform: translateX(calc(-100% - 5rem));
        }
      }
    }
  }

  input {
    background-color: #303030;
    color: #fff;
    padding: 4rem;
    width: 100%;
    border: 1px solid #757575;
  }

  button {
    color: #fff;
    margin-top: 5rem;
    cursor: pointer;
    background-color: #ff6700;
    width: 100%;
    padding: 4rem;
  }
`
