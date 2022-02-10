import React from "react";

class App extends React.Component {
  state ={
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
  }

  handleBlur = () => {
    fetch(`https://ws.apicep.com/cep/${this.state.cep}.json`)
    .then((response) => response.json())
    .then((data) => {

      this.setState({
        rua: data.address,
        bairro: data.district,
        cidade: data.city,
        estado: data.state
      })
    })
  }

  render() {
      const {cep, rua, bairro, cidade, estado} = this.state
    return (
      <div>
        <h1>{this.state.cep}</h1>
        <label>
            cep:
          <input value={cep} onChange={(event) => this.setState({
            cep: event.target.value
          })}
        onBlur={this.handleBlur}
          />
        </label>
        <label>
            rua:
          <input value={rua} readOnly />
        </label>
        <label>
          bairro:
          <input value={bairro} readOnly />
        </label>
        <label>
          cidade:
          <input value={cidade} readOnly/>
        </label>
        <label>
          estado:
          <input value={estado} readOnly/>
        </label>
      </div>
    );
  }
}

export default App;
