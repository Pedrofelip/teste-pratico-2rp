import Header from '../../components/header/header' 
import {Component, React} from 'react'
import axios from 'axios';

import '../../pages/style.css'
import '../cadastrar/cadastrar.css'

class Cadastrar extends Component{
    constructor(props){
        super(props);
        this.state = {
            idTipoUsuario : 0,
            idStatus : 0,
            nome : '',
            email : '',
            senha : '', 
            listaTipoUsuario : [],
            listaStatus : [],
            isLoading : false
        }
    }


    buscarTipoUsuario = () => {

        axios('http://localhost:5113/api/tipoUsuario', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            if (resposta.status === 200) {

                this.setState({ listaTipoUsuario : resposta.data })
              
                console.log(this.state.listaTipoUsuario)
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


       
        atualizaStateCampo = (campo) => {
            this.setState({ [campo.target.name] : campo.target.value })
        };

        cadastrarUsuario = (event) =>{

        event.preventDefault();

        this.setState({ isLoading : true });

        let infos = {
            nome  : this.state.nome,
            email  : this.state.email,
            senha : this.state.senha,
            idTipoUsuario  : this.state.idTipoUsuario,
            idStatus  : this.state.idStatus
        };

       
        axios.post('http://localhost:5113/api/usuarios', infos, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

      
        .then(resposta => {
        
            if (resposta.status === 201) {
        
                console.log('usuario cadastrado!');
        
                this.setState({ isLoading : false });
            }
        })

        .catch(erro => {
            console.log(erro);
         
            this.setState({ isLoading : false });
        })
    };
        
        componentDidMount(){
            this.buscarStatus();
            this.buscarTipoUsuario();
        };
        
        render () {
            return (
            <div>
                <Header/>
                <main>
                    <div>
                        <section className='posicao_itens'>
                                <div className='form_fundo'>
                                    <form onSubmit={this.cadastrarUsuario}>
                                        <div className='form_posicao'>
                                            <div className='inputs_posicao'>
                                                <label className='login_label'>nome:</label>
                                                <input className='cadastro_input' name='nome' type="text" value={this.state.nome} onChange={this.atualizaStateCampo}/>

                                                <label className='login_label'>email:</label>
                                                <input className='cadastro_input' name='email' type="text" value={this.state.email} onChange={this.atualizaStateCampo}/>

                                                <label className='login_label'>senha:</label>
                                                <input className='cadastro_input' name='senha' type="text" value={this.state.senha} onChange={this.atualizaStateCampo} />
                                            </div>

                                            <div className='selects_posicao'>
                                                <label className='login_label'>permissão:</label>
                                                <select
                                               
                                                    name="idTipoUsuario"
                                                  
                                                    value={this.state.idTipoUsuario}
                                      
                                                    onChange={this.atualizaStateCampo}
                                                    className='select_cadastro'

                                                >
                                                    <option value="0">Selecione o tipo do usuario</option>

                                                

                                                    {
                                                       
                                                        this.state.listaTipoUsuario.map( tema => {
                                                            return(
                                                                <option key={tema.idTipoUsuario} value={tema.idTipoUsuario}>
                                                                    {tema.tipoUsuario1}
                                                                </option>
                                                            );
                                                        } )
                                                    }
                                                </select>

                                                <label className='login_label'>status:</label>
                                                <select
                                 
                                                    name="idStatus"
                                            
                                                    value={this.state.idStatus}
                                                    
                                                    onChange={this.atualizaStateCampo}
                                                    className='select_cadastro'

                                                >
                                                    <option value="0">Selecione o status do usuario</option>

                                              

                                                    {
                                            
                                                        this.state.listaStatus.map( tema => {
                                                            return(
                                                                <option key={tema.idStatus} value={tema.idStatus}>
                                                                    {tema.status1}
                                                                </option>
                                                            );
                                                        } )
                                                    }
                                                </select>
                                            </div>
                                            
                                        </div>
                                             {
                                    
                                                this.state.isLoading === true &&
                                                <div className='btn_posicao'>
                                                    <button className='cadastro_loading' type="submit" disabled>
                                                        Loading...
                                                    </button>
                                                </div>
                                            }

                                            {
                                                this.state.isLoading === false &&
                                                <div className='btn_posicao'>
                                                    <button className='btn_cadastro' type="submit">
                                                        Cadastrar
                                                    </button> 
                                                </div>
                                            }           
                                    </form>
                                </div>
                        </section>
                    </div>
                </main>
            </div>
        
        
        );
    }
}   


export default Cadastrar;
