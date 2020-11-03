import React from 'react';



class App extends React.Component {
 constructor(props) {
 super(props);
 this.state = { produtos: [] };
 }
 handleAddClick() {
 const { produtos } = this.state;
 const novoProduto = { id: 0, descricao: 'Banana' };
 produtos.push(novoProduto);
 this.setState({ produtos });
 }
 render() {
 const { produtos } = this.state;
 return (
 <div>
 <ul>
 {produtos.map(p => <li>{p.descricao}</li>)}
 </ul>
 <button onClick={this.handleAddClick}>+</button>
 </div>
 );
 }
} export default App;