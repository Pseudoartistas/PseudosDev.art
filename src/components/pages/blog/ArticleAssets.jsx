import React from 'react';

export function Categorias({ data: dados }) {
    const listaCategorias = dados.map((item, index) => (
      <React.Fragment key={index}>
        <span>{item}</span>
        {index < dados.length - 1 && <span> | </span>}
      </React.Fragment>
    ));
  
    return <span className="text-center text-xs">{listaCategorias}</span>;
}

export function Autores({ data: dados }) {
    const resultadoFormatado = `${dados.origem} | ${dados.autores.length > 1 ? dados.autores.slice(0, -1).join(', ') + ' e ' : ''}${dados.autores.slice(-1)}`;
  return <span className="text-sm font-medium">{resultadoFormatado}</span>
}

export function DataHora({ data: dados }) {
  return <span className="text-xs font-thin">{dados.data}, {dados.hora}</span>
}
