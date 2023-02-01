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

export const Content = styled.div`
  padding: 3rem;
  background-color: #ff6700;
  border: 1px solid #ff8a3a;
  box-shadow: inset 0px 1px 0 1px #ffffff20, inset 0px -1px 0 1px #00000020;

  border-radius: 4rem;
  color: #222;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Name = styled.p`
  font-size: 6rem;
  font-weight: 600;
  color: #fff;
`

export const Age = styled.p`
  font-size: 7rem;
  font-weight: 900;
  color: #fff;
`

export const Country = styled.p`
  font-size: 3rem;
  font-weight: 400;
  color: #963d00;
`

export const Cep = styled.p`
font-size: 2.5rem;
font-weight: 600;
color: #963d00;
text-align: right;
`
