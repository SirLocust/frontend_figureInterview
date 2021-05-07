export class Profile {
  firstName: string;
  lastName: string;
  username: string;
  rol: string;
  createdDate: string;
  constructor( profileObj: ProfileObj) {
    this.firstName = profileObj.firstName;
    this.lastName = profileObj.lastName;
    this.username = profileObj.username;
    this.rol = profileObj.rol;
    this.createdDate = profileObj.createdDate;
  }
}

export interface ProfileObj{
  firstName: string;
  lastName: string;
  username: string;
  rol: string;
  createdDate: string;
}
