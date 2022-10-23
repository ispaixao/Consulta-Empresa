import { ConsultarEmpresaService } from './../../services/consultar-empresa.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Empresa } from 'src/app/models/Empresa';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-consultar-empresa',
  templateUrl: './consultar-empresa.component.html',
  styleUrls: ['./consultar-empresa.component.css'],
})
export class ConsultarEmpresaComponent implements OnInit {
  cnpj!: string;
  form!: FormGroup;
  message: any;
  @ViewChild('alert') alert: any;

  constructor(
    private consultaEmpresa: ConsultarEmpresaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cnpj: [{ value: '', disabled: true }],
      razao_social: [{ value: '', disabled: true }],
      nome_fantasia: [{ value: '', disabled: true }],
      dataCadastro: [{ value: '', disabled: true }],
      descricao_tipo_logradouro: [{ value: '', disabled: true }],
      logradouro: [{ value: '', disabled: true }],
      numero: [{ value: '', disabled: true }],
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      uf: [{ value: '', disabled: true }],
      cep: [{ value: '', disabled: true }],
    });
  }

  buscar(): void {
    this.consultaEmpresa.getEmpresa(this.cnpj).subscribe(
      (empresa) => {
        this.cnpj = empresa.cnpj;
        this.message = {'status:': 200},
        this.form.setValue({
          cnpj: empresa.cnpj,
          razao_social: empresa.razao_social ?? null,
          nome_fantasia: empresa.nome_fantasia ?? 'Não declarado',
          dataCadastro: empresa.data_situacao_cadastral,
          descricao_tipo_logradouro:
            empresa.descricao_tipo_logradouro ?? 'Não declarado',
          logradouro: empresa.logradouro,
          numero: empresa.numero,
          bairro: empresa.bairro,
          cidade: empresa.municipio,
          uf: empresa.uf,
          cep: empresa.cep,
        });
      },
      (error: Error) => {
        this.message = error;
      }
    );
  }

  limpar(): void{
    this.cnpj = '';
    this.form.setValue({
      cnpj: '',
      razao_social: '',
      nome_fantasia: '',
      dataCadastro: '',
      descricao_tipo_logradouro: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
      cep: '',
    });
  }

}
