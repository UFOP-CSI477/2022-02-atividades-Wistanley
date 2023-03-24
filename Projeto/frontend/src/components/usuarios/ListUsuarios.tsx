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

    const [pessoas, setPessoas] = useState<PessoaInterface[]>([]);

    useEffect(() => {

        api.get('/pessoas')
            .then(response => {
                console.log(response.data);
                setPessoas(response.data);
            })

    }, [])

    const handleDeletePessoa = async (id: number) => {

        // Validações
        if (!window.confirm("Confirma exclusão da Pessoa?")) {
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
            setPessoas(pessoas.filter(pessoa => pessoa.id != id));

        } catch (error) {
            alert("Erro ao excluir Pessoa!");
            console.error(error);
        }

    }


    return (

        <div className="fundo">

            <h2>Serviços Oferecidos</h2>

            <ul className="lista">
                <li>Fabricação de Peças</li>
                <li>Usinagem de Peças</li>
                <li>Recuperação de Peças</li>
                <li>Venda de Matéria Prima</li>
                <li>Soldagem</li>
                <li>Torneamento</li>
            </ul>



            <div className="button">
                <Link to="/">Voltar</Link>
            </div>

        </div>

    )

}

export default ListPessoas;