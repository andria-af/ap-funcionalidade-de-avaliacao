import { User } from "./User";
import { v4 as uuidv4 } from 'uuid';

User

export class Comment {
    private readonly _id: string = uuidv4()
    
    constructor(
        public content: string,
        public user: User,
    ){}
}