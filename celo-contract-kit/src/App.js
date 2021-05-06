import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ContractKit,newKitFromWeb3,CeloContract} from '@celo/contractkit'
import Web3 from 'web3'

class App extends Component {
  
transferirClickHandler = async () => {
  if(window.celo) {
    await window.celo.enable()
  }

  const web3 = new Web3(window.celo)
  let kit = newKitFromWeb3(web3)

  const accounts= await kit.web3.eth.getAccounts()
  kit.defaultAccount= accounts[0]
  console.log(accounts)

  kit.web3.eth.getBlockNumber().then(
    (temp)=>{
      console.log(temp)
    }

  )

  const goldtoken = await kit._web3Contracts.getGoldToken()
  const oneGold = kit.web3.utils.toWei('1', 'ether')

  const tx= goldtoken.methods.transfer("0xC8ba8Bb927cBEd4ED5fDaf00bAfd952eCB553407",oneGold).send({from:accounts[0]})
    .on('receipt',function() {
      alert("transferencia realizada")
    })



/* 
  const goldtokencontract = new web3.eth.Contract(goldtoken._jsonInterface,goldtoken._address)
  
  const txo= goldtoken.methods.transfer("0xC8ba8Bb927cBEd4ED5fDaf00bAfd952eCB553407",oneGold).send({from:accounts[0]})
    .on('receipt',function() {
      alert("transferencia realizada")
    })
 */
}

  render() {
    return (
<div className="App">
<div>
<h1>Esto es un contrato de prueba</h1>
</div>
<div>
<button onClick={()=>this.transferirClickHandler()}>Hacer una transferencia</button>
</div>
</div>
);
}
}

export default App;
