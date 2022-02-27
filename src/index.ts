/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { count } from "console";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	console.log('Desafio 002 - Starts...');

	const nome1:string = 'João Pereira';
	const idade1:number = 24;
	const peso1:number = 74;
	const altura1:number = 1.78;
	const ehdev1:boolean = true;
	const silva1:boolean = false;

	const nome2:string = 'Gustavo Silva';
	const idade2:number = 26;
	const peso2:number = 87;
	const altura2:number = 1.90;
	const ehdev2:boolean = false;
	const silva2:boolean = true;

	const nome3:string = 'Gabriel Oliveira';
	const idade3:number = 18;
	const peso3:number = 67;
	const altura3:number = 1.64;
	const ehdev3:boolean = false;
	const silva3:boolean = false;
	
	const nome4:string = 'Igor Medeiros';
	const idade4:number = 25;
	const peso4:number = 69;
	const altura4:number = 1.56;
	const ehdev4:boolean = true;
	const silva4:boolean = false;

	const nome5:string = 'Pedro Silva';
	const idade5:number = 29;
	const peso5:number = 75;
	const altura5:number = 1.80;
	const ehdev5:boolean = true;
	const silva5:boolean = true;

	const nome6:string = 'Jaime Melo';
	const idade6:number = 21;
	const peso6:number = 80;
	const altura6:number = 1.85;
	const ehdev6:boolean = false;
	const silva6:boolean = false;

	const arr = [ehdev1, ehdev2, ehdev3, ehdev4, ehdev5, ehdev6];
	const count = arr.filter(Boolean).length;
	
	const people = [
		{nome: 'João Pereira'}, 
		{nome: 'Gustavo Silva'}, 
		{nome: 'Gabriel Oliveira'}, 
		{nome: 'Igor Medeiros'},
		{nome: 'Pedro Silva'}, 
		{nome: 'Jaime Melo'}];
	const Silvapeople = people.filter ( p => p.nome.includes ("Silva"));

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	console.log(idade1 + idade2 + idade3 + idade4 + idade5 + idade6);
	console.log(nome1, peso1, altura1, peso1 / (altura1 * altura1));	
	console.log(nome2, peso2, altura2, peso2 / (altura2 * altura2));
	console.log(nome3, peso3, altura3, peso3 / (altura3 * altura3));
	console.log(nome4, peso4, altura4, peso4 / (altura4 * altura4));
	console.log(nome5, peso5, altura5, peso5 / (altura5 * altura5));
	console.log(nome6, peso6, altura6, peso6 / (altura6 * altura6));
	
	console.log(count);

	console.log(Silvapeople);

});
