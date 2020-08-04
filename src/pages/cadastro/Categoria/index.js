import React, {/*useState*/} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    /*const [categorias, setNomeDaCategoria] = useState(['Valor inicial']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');*/
  

    return (
      <PageDefault>
      <h1>Cadastro de Categoria: {/*nomeDaCategoria*/} </h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            /*value = {nomeDaCategoria}
            onChange = {function funcaoHanle(infoDoEvento){
              setNomeDaCategoria(infoDoEvento.target.value)
            }}*/
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

            <ul>
              {/*categorias.map((categoria) => {
                return (
                  <li key = {categoria}>
                    {categoria}
                  </li>
                )
              })*/}
            </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
    )      
}

export default CadastroCategoria;