export class User {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    reviewer: string;
    admin: string;

    about(): void {
        console.log("Name = "+this.userName+", firstName = "+this.firstName+", lastName="+this.lastName);
    }

    constructor(inId: string, uName: string, pwd: string, fName: string, lName: string,
    						ph: string, em: string, rvw: string, adm: string) {
        this.id = inId;
        this.userName = uName;
        this.password = pwd;
        this.firstName = fName;
        this.lastName = lName;
        this.phone = ph;
        this.email = em;
        this.reviewer = rvw;
        this.admin = adm;
        this.about();
    }
}
