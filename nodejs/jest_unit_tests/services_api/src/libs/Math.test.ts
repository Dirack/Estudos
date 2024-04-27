import {Math} from './Math';

describe('test group',()=>{
	it('sum n1 and n2',()=>{
		const response = Math.sum(5,10);
		expect(response).toBe(15);
	}),
	it('sub n1 and n2',()=>{
		const response = Math.sub(10,5);
		expect(response).toBe(5);
	}),
	it('mul n1 and n2',()=>{
		const response = Math.mul(5,5);
		expect(response).toBe(25);
	}),
	it('div n1 and n2',()=>{
		const response = Math.div(5,5);
		expect(response).toBe(1);
	}),
	it('string length',()=>{
		const response = 'DENIED';
		expect(response).toHaveLength(6);
	});
	it('search property',()=>{
		const response = {
			email: 'rodolfo_profissional@hotmail.com',
			idade: 30
		}

		expect(response).toHaveProperty('email');
	});
	it('false and true test',()=>{
		expect(false).toBeFalsy();
		expect(true).toBeTruthy();
	});
	it('undefined and null',()=>{
		expect(true).not.toBeUndefined();
		expect(false).not.toBeNull();
	});
});
