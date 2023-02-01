import { FavoriteBorderSVG, FavoriteSVG } from "@icons/index"
import styled, { css } from "styled-components"

export const Container = styled.div`
  overflow-y: scroll;
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

  & .buttons-container {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  p {
    font-size: 3.5rem;
    color: #8d6819;
  }

  & button {
    cursor: pointer;
    line-height: 1;
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      transform: translateY(-1px);
      color: #ffb20f;
    }
  }

  & button.favorite {
    background-color: #8d6819;
  }
`
const iconsCSS = css({
  width: '5.75rem',
  height: '5.75rem',
  color: '#8d6819',
  cursor: 'pointer'
})

export const FavoriteBorder = styled(FavoriteBorderSVG)`${iconsCSS}`
export const Favorite = styled(FavoriteSVG)`${iconsCSS}`