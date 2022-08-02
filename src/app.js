import { LightningElement, api } from "lwc";

export default class App extends LightningElement {

nome = "Paulo Lopes";
telefone = "48 999-8888";
cpf = "123.456.789-10";
idade = 34;

email = "p@p.com";
lkd = "@paulo.lopes";
insta ="@teste";

visible = true;

//quando o botão é clicado, trocar o valor de visible de true pra false
trocarDiv()
  {
    this.visible = !this.visible;
  }
  alteraValores(){
    this.nome = "Clark Kent";
    this.telefone = "48 9999-9999";
    this.cpf = "109.876.543.21";
    this.idade = 35;

  }
}
