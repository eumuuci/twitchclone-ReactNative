import styled from "styled-components";

export const Background = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin: 14px
`;
export const Avatar = styled.TouchableOpacity`
width: 32px;
height: 32px;
border-radius: 16px;
background: #303136;
`;
export const OnlineStatus = styled.View`
width: 10px;
height: 10px;
background: #198b68;
border-radius: 10px;
border: 2px;
position: absolute;
bottom: 0;
right: 0;
`;
export const RightButtons = styled.View`
flex-direction: row;
align-items: center;
`;
export const Button = styled.TouchableOpacity`
margin-left: 20px;
`;