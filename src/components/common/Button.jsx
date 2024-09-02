import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, ...rest }) => {
    return (
        <StyledButton onClick={onClick} {...rest}>
            {children}
        </StyledButton>
    );
};

export default Button;

const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ $backgroundColor }) => ($backgroundColor ? $backgroundColor : "white")};
    border: ${({ $border }) => ($border ? $border : "none")};
    font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : "16px")};
    line-height: ${({ $fontSize }) => ($fontSize ? $fontSize : "16px")};
    color: ${({ $color }) => ($color ? $color : "black")};
    border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : "10px")};
    width: ${({ $width }) => ($width ? $width : "100px")};
    height: ${({ $height }) => $height};
    &:hover {
        filter: brightness(0.8);
    }
`;
