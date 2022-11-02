import {useRef, useState} from 'react';

enum Operators {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const lastOperation = useRef<Operators>();

  const cleaner = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const buildNumber = (numberText: string) => {
    if (numberText === '.' && numero.includes('.')) {
      return;
    }
    setNumero(
      numero !== '0' || numberText === '.' ? numero + numberText : numberText,
    );
  };

  const positiveNegative = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const deleteLastEntry = () => {
    if (
      numero.length === 1 ||
      (numero.startsWith('-') && numero.length === 2)
    ) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };

  const changeNumByLastNum = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnOperation = (operator: string) => {
    changeNumByLastNum();

    switch (operator) {
      case '/':
        lastOperation.current = Operators.dividir;
        break;
      case 'x':
        lastOperation.current = Operators.multiplicar;
        break;
      case '-':
        lastOperation.current = Operators.restar;
        break;
      case '+':
        lastOperation.current = Operators.sumar;
        break;
    }
  };

  const calculate = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (lastOperation.current) {
      case Operators.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operators.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operators.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operators.dividir:
        num1 !== 0 && setNumero(`${num2 / num1}`);
        break;
      default:
        break;
    }

    setNumeroAnterior('0');
  };

  return {
    numeroAnterior,
    numero,
    cleaner,
    buildNumber,
    positiveNegative,
    deleteLastEntry,
    btnOperation,
    calculate,
  };
};
