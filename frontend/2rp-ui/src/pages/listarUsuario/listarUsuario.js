import Header from '../../components/header/header' 
import {Component, React} from 'react'
import axios from 'axios'

import '../listarUsuario/listarUsuario.css'
import '../../pages/style.css'

import iconDelete from '../../imgs/lixeira_excluir.png'

class Listar extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaUsuarios : [],
            listaStatus : [],
            listaTipoUsuario : []
        }
    }

    buscarUsuarios = () => {
       
        axios('http://localhost:5113/api/usuarios', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
         
            if (resposta.status === 200) {
    
                this.setState({ listaUsuarios : resposta.data })
            
                console.log(this.state.listaUsuarios);
            }
        })

        .catch(erro => console.log(erro))
    };

    buscarStatus = () => {
    
        axios('http://localhost:5113/api/status', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {

            if (resposta.status === 200) {
         
                this.setState({ listaStatus : resposta.data })
            
                console.log(this.state.listaStatus);
            }
        })
   
        .catch(erro => console.log(erro))
    };

    buscarTipoUsuario = () => {

        axios('http://localhost:5113/api/tipoUsuario', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
        
            if (resposta.status === 200) {
         
                this.setState({ listaTipoUsuario : resposta.data })
       
                console.log(this.state.listaTipoUsuario);
            }
        })

        .catch(erro => console.log(erro))
    };

    excluirUsuario = (event) =>{
        fetch('http://localhost:5113/api/usuarios/' + event.idUsuario,{
            method : 'DELETE'
        })

        .catch(erro => console.log(erro))

        .then(this.buscarUsuarios())
    }

    componentDidMount(){
        this.buscarUsuarios();
        this.buscarStatus();
        this.buscarTipoUsuario();
    }

    render(){
      return(
        <div>
            <Header/>
            <main >
                <section className='secao_form_lista'>
                    <div className='fundo_tabela'>
                        <table className='tabela'>
                            <thead className='cabecalho_tabela'>
                                <tr className='alinhamento_colunas'>
                                    <div className="coluna coluna_ponta_esquerda"><th className="titulo_coluna">nome</th></div>
                                    <div className="coluna"><th className="titulo_coluna">email</th></div>
                                    <div className="coluna"><th className="titulo_coluna">senha</th></div>
                                    <div className="coluna"><th className="titulo_coluna">permissão</th></div>
                                    <div className="coluna coluna_ponta_direita"><th className="titulo_coluna">Status</th></div>
                                </tr>
                            </thead>

                            <tbody className='corpo_tabela'>
                 
                                {
                                    this.state.listaUsuarios.map( event => {
                                        return(
                                                <tr key={event.idUsuario} className='alinhamento_colunas'>
                                                    <div className='input_form coluna_ponta_esquerda'>
                                                        <td className='inputs_form coluna_ponta_esquerda'>{event.nome}</td>
                                                    </div>

                                                    <div className='input_form'>
                                                        <td className='inputs_form'>{event.email}</td>
                                                    </div>

                                                    <div className='input_form'>
                                                        <td className='inputs_form'>{event.senha}</td>
                                                    </div>

                                                    <div className='input_form'>
                                                        <td className='inputs_form'>{event.idTipoUsuario}</td>
                                                    </div>

                                                    <div className='input_form coluna_ponta_direita' id='tabela_ponta_direita'>
                                                        <td className='inputs_form' id='tabela_ponta_direita'> 1 </td>
                                                    </div>


                                                    <td><button onClick={() => this.excluirUsuario(event)} className='btn_delete'><img className='iconDelete' src={iconDelete}/></button></td>
                                                </tr>
                                        );
                                    } )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
      );
    }
}

export default Listar