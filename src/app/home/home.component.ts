import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lol-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario: FormGroup;
  invocador: any;
  API_KEY = 'RGAPI-b31e1209-9af1-4bad-b1ff-267a9532909c';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.formulario = new FormGroup({
      nomeInvocador: new FormControl('', Validators.required),
    });
  }

  pesquisar() {
    const nomeInvocador = this.formulario.get('nomeInvocador').value;
    this.userService.buscarInvocador(nomeInvocador).subscribe((response) => {
      this.userService.buscarLigasDoInvocador(response.id).subscribe((responseRank) => {
        console.log(responseRank);
        this.invocador = {
          nome: response.name,
          liga: responseRank[0].tier,
          level: response.summonerLevel,
          icone: `https://cdn.mobalytics.gg/stable/profileicon/${response.profileIconId}.png`
        };
      });
      console.log(response);

    });
  }


}
