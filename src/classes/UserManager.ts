import { IUsers } from "../interfaces/IUsers"

export class UserManager{
    constructor(){}

    async crateUser (id:number, name:string, email: string, avatar: string, url: string ): Promise<void>{
        const newUser: IUsers = {
            id: id,
            name: name,
            email: email,
            avatar: avatar
        }

        await fetch(url,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
    }
}