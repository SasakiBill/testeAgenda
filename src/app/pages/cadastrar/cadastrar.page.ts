import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/class/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private _nome: string;
  private _telefone: number;
  private _genero : string;
  private _dataNascimento : string;

  constructor(public alertController: AlertController, private _router : Router, private _ContatoService : ContatoService) { }

  ngOnInit() {
  }

  private Cadastrar() : void{
    console.log(this._dataNascimento);
    this._dataNascimento = this._dataNascimento.split('T')[0];
    if(this.validar(this._nome) && this.validar(this._telefone)){
      let contato : Contato = new Contato(this._nome, this._telefone, this._genero, this._dataNascimento);
      this._ContatoService.inserir(contato);
      this.presentAlert("Cadastro de Contatos", "", "Cadastro efetuado com sucesso!");
      this._router.navigate(["/home"]);
    }else{
      this.presentAlert("Cadastro de Contatos", "Formulário incorreto", "Todos os campos são obrigatórios!");
    }
  }

  private validar(campo : any) : boolean{
    if(!campo){
      return false;
    }else{
      return true;
    }
  }

  async presentAlert(titulo: string, subtitulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  } 
}
