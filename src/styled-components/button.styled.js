import styled from "styled-components"
import "../style/globalstyles.css"

export const DefaultButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.5rem);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: rgb(226, 203, 167, 0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;

  @media (min-width: 0rem) and (max-width: 35rem) {
    padding-inline: 1.5rem;
    padding-block: 1.5rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-around;

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  div {
    width: 2.5rem;
    height: 0.25rem;
    background: hsl(36, 63%, 76%);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  & :hover {
    div {
      color: #561d01;
      background: hsl(20, 98%, 66%);
      width: 2.65rem;
      height: 0.45rem;
    }
  }
`
