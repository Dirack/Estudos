import request from 'supertest';
import app from '../app';
import {User} from '../models/User';

describe('Testing api',()=>{

	let email = 'test@jest.com'
	let password = '1234';
	jest.setTimeout(3*5000);
	beforeAll(async ()=>{
		await User.sync({force:true});
	});

	it('pong',(done)=>{
		request(app)
			.get('/ping')
			.then(response =>{
				expect(response.body.pong).toBeTruthy();
				return done();
			});
	});

	it('register',(done)=>{
		request(app)
			.post('/register')
			.send(`email=${email}&password=${password}`)
			.then(response=>{
				expect(response.body.error).toBeUndefined();
				expect(response.body).toHaveProperty('id');
				return done();
			});
	});

	it('register not allowed',(done)=>{
		request(app)
			.post('/register')
			.send(`email=${email}&password=${password}`)
			.then(response=>{
				console.log(response.body.error);
				expect(response.body.error).not.toBeUndefined();
				return done();
			});
	});

	it('register no password',(done)=>{
		request(app)
			.post('/register')
			.send(`email=${email}`)
			.then(response=>{
				expect(response.body.error).not.toBeUndefined();
				return done();
			});
	});

	it('register no email',(done)=>{
		request(app)
			.post('/register')
			.send(`password=${password}`)
			.then(response=>{
				expect(response.body.error).not.toBeUndefined();
				return done();
			});
	});

	it('register no data',(done)=>{
		request(app)
			.post('/register')
			.send('')
			.then(response=>{
				expect(response.body.error).not.toBeUndefined();
				return done();
			});
	});

});
