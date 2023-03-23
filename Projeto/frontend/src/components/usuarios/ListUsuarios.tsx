import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import api from "../../services/api"
import '../componentes.css'

export interface PessoaInterface {
    id: number;
    nome: string;
    cidade_id: number;
    tipo_id: number;
    created_at: string;
    updated_at: string;
}

const ListPessoas = () => {

    const [ pessoas, setPessoas ] = useState<PessoaInterface[]>([]);  
    
    useEffect(() =>{

        api.get('/pessoas')
            .then(response => {
                console.log(response.data);
                setPessoas(response.data);
            })

    }, [])

    const handleDeletePessoa = async (id: number) => {

        // Validações
        if ( !window.confirm( "Confirma exclusão da Pessoa?" ) ) {
            return
        }

        try {
            await api.delete('/pessoas', 
            {
                data: {
                    id
                }
            });

            alert("Pessoa excluída com sucesso!");

            // Atualizar?
            setPessoas( pessoas.filter(pessoa => pessoa.id != id) );

        } catch(error) {
            alert("Erro ao excluir Pessoa!");
            console.error(error);
        }

    }


    return(

        <div className="fundo">

            <h2>Pessoas</h2>

            <div className="button">
                <Link to="/">Voltar</Link>
            </div>
            <div className="button">
                <Link to="/pessoas/create">Cadastrar Pessoa</Link>
            </div>

            <table>

                <thead>
                    <tr className="titulo">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>Tipo Sanguineo</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                
                <tbody>
                    {pessoas.map(pessoa => (
                        <tr key={pessoa.id}>
                            <td>{pessoa.id}</td>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.created_at}</td>
                            <td>{pessoa.updated_at}</td>
                            <td><Link 
                                to={`/pessoas/update/${pessoa.id}`}>Atualizar</Link></td>
                            <td><button onClick={()=>{ 
                                handleDeletePessoa(pessoa.id)
                             }}>Excluir</button> </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>

        </div>

    )

}

export default ListPessoas;