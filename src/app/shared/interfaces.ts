export interface User{
	name: string;
	age: number;
	gender: string;
	department: string;
	address: {
		[key: string]: User;
	};
}
