import styled from '@emotion/styled'

export const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 60%;
height: 100vh;
overflow-y: hidden;
background-color: #EEEEEE;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 600px) {
  .container {
    width: 75%;
    height: 50vh;
  }
`