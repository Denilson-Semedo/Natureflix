import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(["Tester"]);

  const valoresIniciais = {
    nome: "Categoria Inicial",
    descricao: "desc inicial",
    cor: "#bbb",
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function HandleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
        }}
      >
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              name="nome"
              onChange={HandleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={HandleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={HandleChange}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
