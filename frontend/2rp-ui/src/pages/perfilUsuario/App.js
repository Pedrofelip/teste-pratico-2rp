import Header from '../../components/header/header' 
import {Component, React} from 'react'
import axios from 'axios'
import { parseJwt, usuarioAutenticado } from '../../services/auth';

import iconUsuario from '../../imgs/user.png'

import '../../pages/style.css'
import '../perfilUsuario/App.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome : 'pedro',
            email : 'teste@teste.com',
            senha : '12345678',
            idTipoUsuario : 3,
            idStatus : 1
        }
    }


   
    infosUsuario = () => {

        axios('http://localhost:5113/api/usuarios/' + parseJwt().idUsuario,{
            method : 'GET'
        })

        .then(resposta => {

            if (resposta.status === 200) {
                
                this.setState({nome : resposta.data})

                console.log(this.state.nome)

            }
        })

        .catch(erro => console.log(erro))
    }


    componentDidMount(){
        this.infosUsuario();
    }

    render(){
      return(
        <div>
            <Header/>
            <main>
                <section className='fundo'>
                    <div className='card_fundo'>
                        <div>
                            <img src={iconUsuario} className='img_user'/>
                        </div>

                        <h1 className='h1_card'>{this.state.nome}</h1>

                        <div className='info_card'>
                            <h2 className='h2_card'>email</h2>
                            <p className='txt_card'>{this.state.email}</p>
                        </div>
                            <hr className='linha'/>

                        <div className='info_card'>
                            <h2 className='h2_card'>senha</h2>
                            <p className='txt_card'>{this.state.senha}</p>
                        </div>
                            <hr className='linha'/>

                        <div className='info_card'>
                            <h2 className='h2_card'>permissão</h2>
                            <p className='txt_card'>{this.state.idTipoUsuario}</p>
                        </div>
                            <hr className='linha'/>

                        <div className='info_card'>
                            <h2 className='h2_card'>status</h2>
                            <p className='txt_card'>{this.state.idStatus}</p>
                        </div>
                            <hr className='linha'/>
                    </div>
                </section>
            </main>
        </div>
      );
    }
}

export default App
