import { User } from "./User";
import { v4 as uuidv4 } from 'uuid';

export class Rating {
    private readonly id :string = uuidv4()

    constructor(
        public rate: number, 
        public user: User)
    {}
}

