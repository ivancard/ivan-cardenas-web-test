import React from 'react';
import styled from 'styled-components';

const Modal = ({ children, estado, cambiarEstado, titulo, scroll }) => {
    return (
        <>
            {estado && (
                <Overlay>
                    <ContenedorModal scroll={scroll}>
                        <EncabezadoModal>
                            <h2>{titulo}</h2>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => cambiarEstado(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-x"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </BotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            )}
        </>
    );
};

export default Modal;

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0005;
    z-index: 99;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContenedorModal = styled.div`
    width: 70%;
    border: 4px solid #707070;
    min-height: 400px;

    margin-top: -100px;
    background-color: #efece6;
    overflow: ${(props) => (props.scroll ? 'scroll' : 'auto')};
    position: relative;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* padding: 10px; */
    padding-bottom: 20px;
`;

const EncabezadoModal = styled.div`
    /* background-color: rebeccapurple; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    min-height: 50px;
    /* padding-bottom: 15px; */
    border-bottom: 2px solid #707070;
    margin-right: 0;

    h2 {
        font-weight: bold;
        font-size: 20px;
        color: #707070;
        margin-left: 20px;
    }
`;

const BotonCerrar = styled.span`
    position: absolute;
    top: 5px;
    right: 10px;
    padding: 4px;
    border-radius: 5px;
    width: 30px;
    color: #707070;
    &:hover {
        cursor: pointer;
        background-color: #f2f2f2;
    }
    svg {
        width: 100%;
        height: 100%;
    }
`;
