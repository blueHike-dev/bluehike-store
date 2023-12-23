import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>
          Best online store in KENYA!
        </SmallMessage>
        <BigMessage>
          when it comes to fashion, confirm with us!!!
          We don't do fashion, we are fashion
        </BigMessage>
      </Message>
    </HomeWrapper>  )
}

const HomeWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 6rem;
margin-bottom: 20rem;

@media (max-width:1024px) {
  justify-content: center;
}

@media (max-width: 768px) {
  margin-top: 1rem;
}
`
const Message = styled.div`
display: flex;
flex-direction: column;
width: 50rem;

animation: fadeIn ease 2s;

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  align-items: center;
}
`
const SmallMessage = styled.div`
color: ${({theme}) => theme.colors.grey.dark};
font-size: 1.9rem;
font-weight: bold;
letter-spacing: 0.5rem;
text-transform:uppercase ;

@media (max-width: 450px) {
  font-size: 1.4rem;
}
`
const BigMessage = styled.div``

export default Home