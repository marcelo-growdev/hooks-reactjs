import { Axios, AxiosResponse } from 'axios';
import { MD5 } from 'crypto-js';
import { privateKey, publicKey } from './config';

class Marvel {
  private hash: string;

  private client: Axios;

  private ts: number;

  private authentication: string;

  constructor() {
    this.ts = new Date().getTime();

    this.client = new Axios({
      baseURL: 'https://gateway.marvel.com/v1/public/',
    });
    this.hash = this.generateHash();

    this.authentication = `?ts=${this.ts}&apikey=${publicKey}&hash=${this.hash}`;
  }

  generateHash(): string {
    const hash: string = MD5(this.ts + privateKey + publicKey).toString();

    return hash;
  }

  async get(route: string): Promise<AxiosResponse> {
    const response = await this.client.get(`${route}${this.authentication}`);

    return response.data;
  }
}

export default new Marvel();
