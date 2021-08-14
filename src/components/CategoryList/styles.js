import styled from "styled-components";

export const CategoryContainer = styled.TouchableOpacity`
width: 130px;
height: 230px;
margin-left: 15px;
`;
export const CategoryImage = styled.Image`
height: 80%;
width: 100%;
`;
export const CategoryName = styled.Text`
font-size: 20px;
font-family: Roboto-Medium;
color: #efeff1;
`;
export const CategoryStatus = styled.View`
flex-direction: row;
align-items: center;
`;
export const RedCircle = styled.View`
width: 10px;
height: 10px;
background: #e80f00;
border-radius: 50px;
`;
export const ViewsNumber = styled.Text`
font-size: 15px;
color: #7f7f8b;
font-family: Roboto-Medium;
text-transform: uppercase;
left: 5px;
padding-bottom: 1px;
`;