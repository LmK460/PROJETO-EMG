import axios from 'axios';

const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/',
});


export default class Api {
 	static async getNormalData(){
		const {data} = await api.get('/data');
		return data.slice(1,1000);
	}

	static async getFourierData(){
		const {data} = await api.get('/furrier');
		return data.slice(1,1000);
	}

	static async getWaveletData(){
		const  {data} = await api.get('/wavelet');
		return data.slice(1,1000);
	}

	static async getAllData() {
		const response = await Promise.all([this.getNormalData(), this.getFourierData(), this.getWaveletData()]);
		return response;
	}
}