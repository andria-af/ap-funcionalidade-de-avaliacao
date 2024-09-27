import { usersDataBase } from '../database/userDatabase';
import { Product } from './Product';
import { v4 as uuidv4 } from 'uuid';

export class User {
    private readonly id: string = uuidv4()
    public cart: Product[]= []

    constructor(
        public name: string,
        public username: string,
        public email: string,
    ){}

    public save(newUser: User){
        const verificaUser = usersDataBase.some((user) => user.username === newUser.username || user.email === newUser.email );
        if(verificaUser) {
            console.log(' Usuário já cadastrado, tente cadastrar um diferente.')
        }
        usersDataBase.push(newUser)
    }

    public addToCard(product: Product): void{   
        this.cart.push(product)
    }

    public removeFromCard(product: Product): void{
        this.cart = this.cart.filter(produto => produto !== product);
    }

    public showProducts(){
        if (this.cart.length === 0) {
            return `O carrinho de ${this.name} está vazio.`
        }

        console.log('-------------------------------------------------')
        console.log(`Carrinho de produtos de ${this.name}:`)
        console.log('-------------------------------------------------')

        let total= 0;
        this.cart.forEach(produto => {
            produto.show()
            total += produto.value
            console.log('-------------------------------------------------')
        })

        console.log(`Valor total: R$ ${total.toFixed(2).replace('.', ',')}`)
        console.log('-------------------------------------------------')
    }
}