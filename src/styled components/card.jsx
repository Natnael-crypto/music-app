import styled from '@emotion/styled'

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
padding: 5px;
margin: 10px;
width: 300px;
border-radius: 10px;
text-align: left;
padding-left: 10px;
background-color: #5C5470;
cursor: pointer;
transition: box-shadow 0.3s ease;
color:white;
  &:hover {
    color: black;
    background-color:#B9B4C7;
  }
`