import { useNavigate } from 'react-router-dom'

import { ConteinerNovoProjeto } from './styles'

import ProjectForms from '../../components/project/ProjectForms'

function NovoProjeto(){

    const historico = useNavigate();

    function criarProjeto(projeto){
        //inicializar custo e o serviços
        projeto.custo = 0;
        projeto.servico = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
        }) 
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error));
    }

    return(
        <ConteinerNovoProjeto>
            <h1>Criar Projeto</h1>
            <p>Crie seus projetos para depois adicionar os serviços.</p>
           <ProjectForms handleSubmit={criarProjeto} />
        </ConteinerNovoProjeto>
    )
}

export default NovoProjeto