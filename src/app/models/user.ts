export interface iUser {
  id: number | string,
  name: string,
  email: string,
  passwd: string,
}

export class User implements iUser {
	// id: number | string
	constructor(
    public id: number | string = 0,
    public name: string = '',
    public email: string = '',
    public passwd: string = '') {
		// this.id = id
	}
}

