import styled from 'styled-components'

const ButtonWrapperGMP = styled.div`
  position: relative;
  width: 155px;
  height: 50px;
  margin: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: ${props => props.bgColor || rgb(255, 59, 48)};
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: ${props => props.bgColor || rgb(255, 59, 48)};
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0s;
  }

  &:hover::before {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  &:hover::after {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
    transition-delay: 0.5s;
  }

  &:hover a {
    letter-spacing: 3px;
    /* transition-delay: 0.5s; */
  }

  &:hover a::before {
    transform: skewX(45deg) translateX(200%);
  }

  &::before,
  &::after {
    background: ${props => props.bgColor || rgb(255, 59, 48)};
    box-shadow: 0 0 5px ${props => props.bgColor || rgb(255, 59, 48)},
      0 0 15px ${props => props.bgColor || rgb(255, 59, 48)},
      0 0 30px ${props => props.bgColor || rgb(255, 59, 48)},
      0 0 60px ${props => props.bgColor || rgb(255, 59, 48)};
  }
`

const ButtonLinkGMP = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: rgba(0, 0, 0, 0.2);
  border-top: rgba(255, 255, 255, 0.1);
  border-bottom: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: rgb(242, 242, 247);
  z-index: 1;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }
`

export const ButtonGMP = ({ label, bgColor }) => {
  return (
    <ButtonWrapperGMP bgColor={bgColor}>
      <ButtonLinkGMP>{label}</ButtonLinkGMP>
    </ButtonWrapperGMP>
  )
}
