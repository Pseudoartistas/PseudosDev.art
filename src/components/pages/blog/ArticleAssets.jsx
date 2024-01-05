import React from 'react';

export function Categorias({ data }) {
    const listaCategorias = data.map((item, index) => (
      <React.Fragment key={index}>
        <span>{item}</span>
        {index < data.length - 1 && <span> | </span>}
      </React.Fragment>
    ));
  
    return <span className="text-center text-xs">{listaCategorias}</span>;
}

export function Autores({ data }) {
    const resultadoFormatado = `${data.origem} | ${data.autores.length > 1 ? data.autores.slice(0, -1).join(', ') + ' e ' : ''}${data.autores.slice(-1)}`;
  return <span className="text-sm font-medium">{resultadoFormatado}</span>
}
export function DataHora({ data }) {
  return <span className="text-xs font-thin">{data.data}, {data.hora}</span>
}
