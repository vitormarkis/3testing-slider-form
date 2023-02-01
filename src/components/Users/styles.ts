import styled from "styled-components"

export const Container = styled.div`
  padding: 5rem;
  background-color: #071013;
  color: white;
  line-height: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const UserContainer = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;

  background-color: #ffb20f;
  border: 1px solid #8d6819;
  box-shadow: inset 0px 1px 0 1px #ffffff20, inset 0px -1px 0 1px #00000020;

  p {
    font-size: 3.5rem;
    color: #8d6819;
  }
`
