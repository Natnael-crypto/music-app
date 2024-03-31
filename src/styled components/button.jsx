import styled from '@emotion/styled'

export const SubmitButton = styled.button`
padding: 10px 20px;
background-color: #4CAF50; 
border-radius: 20px;
border: none;
color: white;
cursor: pointer;
margin-right:10px;
transition: background-color 0.3s ease;
  // &:hover {
  //   color: #4CAF50;
  //   background-color:#0CAF50;
  // }
`

export const CancelButton = styled.button`
padding: 10px 20px;
background-color: Red;
border-radius: 20px;
margin-left:10px;
border: none;
color: white;
cursor: pointer;
transition: background-color 0.3s ease;
  // &:hover {
  //   color: #4CAF50;
  //   background-color:#0CAF50;
  // }
`

export const FloatingButton = styled.button`
padding: 10px 20px;
position:fixed;
bottom: 50px;
background-color: #76ABAE; 
border-radius: 20px;
border: none;
color: white;
cursor: pointer;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;
  &:hover {
    color:#31363F ;
    <background-color: #5D8C8F;
  }
`

export const EditButton = styled.button`
padding: 10px 20px;
position:absolute;
bottom: 10px;
left : 10px;
background-color: transparent;
border-radius: 20px;
border: none;
color: white;
cursor: pointer;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;
  &:hover {
    color:#5D8C8F ;
  }
`

export const DeleteButton = styled.button`
padding: 10px 20px;
position:absolute;
bottom: 10px;
right: 10px; 
border-radius: 20px;
border: none;
color: white;
cursor: pointer;
background-color: transparent;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
transition: background-color 0.3s ease;
  &:hover {
    color:RED;
  }
`


