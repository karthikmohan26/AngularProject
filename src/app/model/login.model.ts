export class User {

    userId: string ;
    userName:string;
    password : string ;
    role: string ;

 constructor(userId: string , userName:string,password : string,role: string ) {
    this.userId=userId;
    this.userName=userName;
    this.password=password;
    this.role=role;


}
}
