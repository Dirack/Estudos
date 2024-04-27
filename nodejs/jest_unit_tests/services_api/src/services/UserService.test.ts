import {User, UserInstance} from '../models/User';
import * as UserService from './UserService';

describe('Service test',()=>{
	let email = 'test@jest.com';
	let password = '1234';

	beforeAll(async ()=>{
		await User.sync({force: true});
	});

	it('should create a new user',async ()=>{
		const newUser = await UserService.createUser(email,password) as UserInstance;
		expect(newUser).not.toBeInstanceOf(Error);
		expect(newUser).toHaveProperty('id');
		expect(newUser.email).toBe(email);
	});

	it('existing email',async ()=>{
		const newUser = await UserService.createUser(email,password) as UserInstance;
		expect(newUser).toBeInstanceOf(Error);
	});

	it('should find a user by email',async ()=>{
		const user = await UserService.findByEmail(email) as UserInstance;
		expect(user.email).toBe(email);
	});

	it('should match the password from database', async ()=>{
		const user = await UserService.findByEmail(email) as UserInstance;
		const match = UserService.matchPassword(password,user.password);
		expect(match).toBeTruthy();
	});

	it('should not match the password from database',async ()=>{
		const user = await UserService.findByEmail(email) as UserInstance;
		const match = await UserService.matchPassword('11111',user.password);
		expect(match).toBeFalsy();
	});

	it('should get a list of users',async ()=>{
		const users = await UserService.all();
		expect(users.length).toBeGreaterThanOrEqual(1);
		for(let i in users)
			expect(users[i]).toBeInstanceOf(User);
	});
});
