import React, { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { useHistory } from "react-router-dom";



import '../../pages/style.css'
import './login.css'



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            errorMensage : '',
            isLoading : false
        }
    };
     

    efetuaLogin = (event) => {

        const data = {email : this.state.email,
            senha : this.state.senha }
        
        event.preventDefault();

       
        this.setState({ erroMensagem : '', isLoading : true });

        
        axios.post('http://localhost:5113/api/login', {
            email : this.state.email,
            senha : this.state.senha
        })

    
        .then(resposta => {
         
            if (resposta.data.token === 200) {
        
                localStorage.setItem('usuario-login', resposta.data.token);
              
                console.log('Meu token é: ' + resposta.data.token);
              
                this.setState({ isLoading : false })

                console.log('meu token2' + parseJwt)

                
                // Verifica se o tipo de usuário logado é Administrador
                // Se for, redireciona para a página de Tipos Eventos
                if (parseJwt().role === '3') {
                    this.props.history.push('/home');
                    console.log('estou logado: ' + usuarioAutenticado());
                }

                // Se não for, redireciona para a página home
                else {
                    this.props.history.push('/perfil')
                }
            }
        })

        // Caso haja um erro,
        .catch(() => {
            // define o state erroMensagem com uma mensagem personalizada e que a requisição terminou
            this.setState({ errorMensage : 'E-mail ou senha inválidos! Tente novamente.', isLoading : false });
        })
    }


    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };

    render(){
        return(
            <div>
                <main className='fundo_site'>
                    <div className='fundo_login'>
                        <div className='img_login'>
                            
                        </div>

                        <div className='fundo_form'>
                         

                             <form className='fundo_input' onSubmit={this.efetuaLogin}>
                             <div className='posicao_inputs'>
                                    <div className="item">
                                        <label className='label_login'>E-mail:</label>
                                        <input
                                            id="login__email"
                                            className="input_login"
                                          
                                            type="text"
                                            name="email"
                                         
                                            value={this.state.email}
                                    
                                            onChange={this.atualizaStateCampo}
                                        />
                                    </div>

                                    <div className="item">
                                        <label className='label_login'>Senha:</label>
                                        <input 
                                            id="login__password"
                                            className="input_login"
                                        
                                            type="password"
                                            name="senha"
                                     
                                            value={this.state.senha}
                                       
                                            onChange={this.atualizaStateCampo}
                                        />
                                    </div>
                                    
                        
                                    <p className='error_massage'>{this.state.errorMensage}</p>
                             </div>


                           

                                    {
                              
                                        this.state.isLoading === true &&
                                        <div className="item posicao_btn">
                                            <button className="btn_loading" id="btn__login" type="submit" disabled>Loading...</button>
                                        </div>
                                    }

                                    {
                       
                                        this.state.isLoading === false &&
                                        <div className="item posicao_btn">
                                            <button
                                                className="btn_login" id="btn__login"
                                                type="submit"
                                                disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}>
                                                entrar
                                            </button>
                                        </div>
                                    }
                                </form>
                        </div>
                    </div>
                </main>
            </div>   
        )
    }
};

export default Login;