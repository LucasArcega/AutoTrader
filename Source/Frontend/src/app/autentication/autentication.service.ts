import { AppEventDispatcher } from './../utils/AppEventDispatcher';
import { User } from './models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './Auth';
import { environment } from '../../environments/environment';
import { Account } from './models/account';

@Injectable()
export class AutenticationService {

	constructor(private http: HttpClient) { }

	/**
	 * Lista as contas do usuário via post, após login.
	 *
	 * TODO: Este método é mockado, deve ser adaptado ao serviço real.
	 *
	 * @param cpf:String
	 * @param handler:Function
	 */
	loadAccounts(cpf: string, pass: string , handler: any) {
		this.http.post( environment.apiUrl + 'contas/login', {cpf: cpf, senha: pass} ).subscribe((data: any) => {

			if (data.Sucesso) {

				const accounts: Array<Account> = [];

				for ( let i = 0; i < data.Retorno.Adesoes.length; i++ ) {

					const newUser = new User();
							newUser.agency = data.Retorno.Adesoes[i].Dados.Agencia;
							newUser.accountName = data.Retorno.Adesoes[i].Dados.NomeConta;
							newUser.accountType = data.Retorno.Adesoes[i].Dados.TipoConta;
							newUser.accountNumber = data.Retorno.Adesoes[i].Dados.NumeroConta;
							newUser.name 				= data.Retorno.Adesoes[i].Dados.NomeTitular;
							newUser.cpfCnpj 		= data.Retorno.Adesoes[i].Dados.CpfCnpj;
							newUser.personType 	= data.Retorno.Adesoes[i].Dados.TipoPessoa;

					const newAcc = new Account();
							newAcc.rights = data.Retorno.Adesoes[i].Poder;
							newAcc.systemCode = data.Retorno.Adesoes[i].CodSistema;
							newAcc.user = newUser;

					accounts.push(newAcc);
				}

				Auth.getInstance().setAccountsList(accounts);
			}

			handler(data);

		}, (data) => {

			handler(data.error);

		});
	}

	/**
	 * Retorna se o susuário tem senha ou não
	 *
	 * TODO: Este método é mockado, deve ser adaptado ao serviço real.
	 *
	 * @param cpf:String
	 * @param handler:Function
	 */
	getUserByCpf(cpf: string , handler: any) {
		this.http.get('assets/mockup/has-pass.json').subscribe((data: any) => {

			if (data.Sucesso) {
				Auth.firstCPF = cpf;
			}

			handler(data.Sucesso);

		});
	}

	/**
	 * Cria a senha passando CPF, PASSWORD e uma função de retorno.
	 *
	 * TODO: Este método é mockado, deve ser adaptado ao serviço real.
	 *
	 * @param cpf:string
	 * @param pass:string
	 * @param handler:Function
	 */
	createPass(cpf: string, pass: string, handler: any) {
		this.http.get('assets/mockup/create-pass.json').subscribe((data: any) => {

			if (data.Sucesso) {
				handler(data);
			}

		});
	}


}
