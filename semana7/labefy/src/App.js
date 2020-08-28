import React from "react";
import axios from "axios";
import Botao from "./components/Botao"

export default class App extends React.Component {
  state = {
    playlists: [],
    musicas: []
  };

  pegarPlaylists = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
              headers: {
                Authorization: "guilherme-guy-jackson"
              }
            })
      .then((resposta) => {
        console.log(resposta.data)
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  pegarMusicas = (id) => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
        headers: {
          Authorization: "guilherme-guy-jackson"
        }
      })
      .then((resposta) => {
        console.log("Oi")
        this.setState({ musicas: resposta.data.result.tracks });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  selecionouPlaylist = (evento) => {
    const nomePlaylist = evento.target.value;
    this.pegarMusicas(nomePlaylist);
  };

  componentDidMount() {
    this.pegarPlaylists();
  }

  criarPlaylist = () => {
  const body = {
    name: this.state.nomePlaylist
  };

  axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    body,
    {
      headers: {
        Authorization: "guilherme-guy-jackson"
      }
    }
  ).then((resposta) => {
      alert(`A playlist ${this.state.nomePlaylist} foi criada com sucesso`);
      this.pegarPlaylists();
      this.setState({ nomePlaylist: "" });
    })
    .catch((erro) => {
      alert('Já existe uma playlist com esse nome')
      console.log("Erro");
    });
};


deletePlaylist = (playlistId) => {
  axios.delete(
    `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
    {
      headers: {
        Authorization: "guilherme-guy-jackson"
      }
    }
  )
    .then((response) => {
      this.pegarPlaylists();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

  onChangeCriarPlaylist = (event) => {
  this.setState({ nomePlaylist: event.target.value });
}

  render() {

    return (
      <div>

        <input onChange={this.onChangeCriarPlaylist}></input>
        <button onClick={this.criarPlaylist}>Criar!</button>


        <select onChange={this.selecionouPlaylist}>
          <option value={""}></option>
          {this.state.playlists.map((list) => {
            return (
              <option key={list.id} value={list.id}> 
                {list.name}
              </option>
            );
          })}
        </select>

        <h1>Gerenciar Playlists</h1>
        {this.state.playlists.map((item) => {
          return <p onClick={this.pegarMusicas} key={item.id}>{item.name}{`   `}
          <button onClick={() => this.deletePlaylist(item.id)}>Deletar Playlist</button>
          </p>;
        })}

   

              <h1>Musicas da Playlist Selecionada</h1>

               {this.state.musicas.map((list) => {
                return (
                  <div>
              
                 <p key={list.id} value={list.id}>
                {list.name}
                

                
               
                 </p>
                 </div>
                 );
                 })}
  
  
      </div>
    );
  }
}







// import React from "react";
// import axios from "axios";

// export default class App extends React.Component {
// state = {
//   playlists: [],
//   nomePlaylist: "",
//   musicas: [],
// }


// pegarPlaylists = () => {
//  axios.get(
//     "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
//     {
//       headers: {
//         Authorization: "guilherme-guy-jackson"
//       }
//     }
//   ).then((resposta) => {
//     console.log(resposta.data.result.list.result)
//       this.setState({ playlists: resposta.data.result.list});
//     })
//     .catch((erro) => {
//       console.log("Ocorreu um erro");
//     });
// };

// pegarMusicas = () => {
//   axios.get(
//      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
//      {
//        headers: {
//          Authorization: "guilherme-guy-jackson"
//        }
//      }
//    ).then((resposta) => {
//      console.log("oi")
//      console.log(resposta.data.result.tracks)
//        this.setState({musicas: resposta.data.result.tracks});
//      })
//      .catch((erro) => {
//        console.log("Ocorreu um erro");
//      });
//  };

// criarPlaylist = () => {
//   const body = {
//     name: this.state.nomePlaylist
//   };

//   axios.post(
//     "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
//     body,
//     {
//       headers: {
//         Authorization: "guilherme-guy-jackson"
//       }
//     }
//   ).then((resposta) => {
//       alert(`A playlist ${this.state.nomePlaylist} foi criada com sucesso`);
//       this.pegarPlaylists();
//       this.setState({ nomePlaylist: "" });
//     })
//     .catch((erro) => {
//       alert('Já existe uma playlist com esse nome')
//       console.log("Erro");
//     });
// };


// deletePlaylist = (playlistId) => {
//   axios.delete(
//     `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
//     {
//       headers: {
//         Authorization: "guilherme-guy-jackson"
//       }
//     }
//   )
//     .then((response) => {
//       this.pegarPlaylists();
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };




// componentDidMount() {
//   this.pegarPlaylists();
//   this.pegarMusicas()
// }

// onChangeCriarPlaylist = (event) => {
//   this.setState({ nomePlaylist: event.target.value });
// }



//   render() {
//     return (
//       <div>
//         <input onChange={this.onChangeCriarPlaylist}></input>
//         <button onClick={this.criarPlaylist}>Criar!</button>

//         <h1>Minhas Playlists</h1>
//         {this.state.playlists.map((item) => {
//           return <p onClick={this.pegarMusicas} key={item.id}>{item.name}
//           <button onClick={() => this.deletePlaylist(item.id)}>X</button>
//           </p>;
//         })}
//         <h1>Minhas Musicas</h1>
//         {this.state.musicas.map((item) => {
//           return <p key={item.id}>
//            <strong>{`Artista: `}</strong>
//           {item.artist} {` `}
//           <strong>{`Musica: `}</strong>
//           {item.name}
//           </p>;
//         })}
        
  
//       </div>
//     );
//   }
// }


