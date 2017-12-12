import { User } from './models/user';
import { Account } from './models/account';

export class Auth {

	public static firstCPF = '';
	public static rememberMyUser = false;
	private static _instance: Auth;

	/**
	 * Dados do usuário
	 */
	private user: User;

	/**
	 * Dados das contas
	 */
	private accounts: Array<Account>;

	constructor() {
		if (Auth._instance) {
			throw new Error('Error: Instantiation failed: Use Auth.getInstance() instead of new.');
		}

		Auth._instance = this;
	}

	public static getInstance() {
		return this._instance || (this._instance = new this());
	}
	/**
	 * Seta a lista de contas do usuário.
	 * @param accounts Array<Account>
	 */
	public setAccountsList(accounts: Array<Account>) {
		this.accounts = accounts;
		console.log('Contas Setadas:', this.accounts);
	}

	/**
	 * Retorna a lista de contas do usuário.
	 */
	public getAccountsList(): Array<Account> {
		return this.accounts;
	}

	/**
	 * Seta o usuário na memória e no localStorage
	 * @param userData Objeto com todos os dados do usuário
	 */
	public setUser(userData: User ) {
		this.user = userData;
	}

	/**
	 * Retorna o objeto do usuário do localStorage
	 */
	public getUser(): User {

		return this.user;
	}

}
