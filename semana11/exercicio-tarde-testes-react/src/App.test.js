import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";


test("Ao clicar em somar, deve aparecer 1 na tela", () => {
    const { getByText } = render(<App />);
    const botaoAdicionar= getByText(/Adicionar/i);
    fireEvent.click(botaoAdicionar);
    let contadorTexto = getByText(/Nao pode/i);
    expect(contadorTexto).toHaveTextContent("Nao pode");

  });

  test("Ao clicar em somar, deve aparecer 1 na tela", () => {
    const { getByText } = render(<App />);
    const botaoAdicionar= getByText(/Adicionar/i);
    fireEvent.click(botaoAdicionar);
    let contadorTexto = getByText(/Nao pode/i);
    expect(contadorTexto).toHaveTextContent("Nao pode");

  });