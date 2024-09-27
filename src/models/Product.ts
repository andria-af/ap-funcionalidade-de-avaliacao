import { User } from "./User";
import { Comment } from "./Comment";
import { Rating } from "./Rating";
import { v4 as uuidv4 } from 'uuid';
import { productsDataBase } from "../database/productDatabase";

export class Product {
    private readonly id: string = uuidv4();
    public comments: Comment[]= [];
    public ratings: Rating[]=[]

    constructor(
        public name: string,
        public value: number,
    ){}

    public save(newProduct: Product){
        const verificaProduct = productsDataBase.some((product) => product.name === newProduct.name && product.value === newProduct.value);
        if(verificaProduct) {
            console.log(' Usuário já cadastrado, tente cadastrar um diferente.')
        }
        productsDataBase.push(newProduct)
    }

    public showDetails(){
        console.log(`Id: ${this.id}, Produto: ${this.name}, Valor R$: ${this.value.toFixed(2)}`);
    }

    public show(){
        console.log('-------------------------------------------------')
        console.log(`Produto: ${this.name}, Valor R$: ${this.value.toFixed(2).replace('.', ',')}`);
        this.showComments();
        this.showMediaRatings();
        console.log('-------------------------------------------------')
    }

    public comment (content: string, user: User): void{
        const newComment = new Comment (content, user)
        this.comments.push(newComment);
    }

    public showComments(){
        if (this.comments.length == 0 ){
            console.log("O produto não possui comentários.")
            return
        } else {
           const commentsProducts= this.comments.forEach(comment => console.log(`Comentário do usuário ${comment.user.name}: ${comment.content}`))
           return commentsProducts;
        }
    }

    public rate(rate: number, user: User): void{

        const verificaUser = this.ratings.some((rate) => rate.user === user );
        if(verificaUser) {
            console.log('É permitida somente uma avaliação por usuário.')
        }

        if (rate <0 || rate >5) {
            console.log("Por favor insira uma avaliação com valores entre 0 e 5.")
        } else {
            const newRate = new Rating (rate, user)
            this.ratings.push(newRate)
        }
    }

    public showRatings(){

        if (this.ratings.length == 0 ){
            console.log("O produto não possui avaliações.")
            return
        } else {
            this.ratings.forEach(rating => console.log(`Avaliação do usuário ${rating.user.name}: ${rating.rate}`));
        }
    }


    public showMediaRatings(){

        if (this.ratings.length === 0){
            console.log("O produto não possui avaliações.")
            return
        } else {
            let contador = 0;
        let soma= 0;

        this.ratings.forEach(rating => {
            soma+= rating.rate
            contador++
        })
        const mediaRatings= soma/contador

        console.log(`Média de avaliações: ${mediaRatings}`)

        }    
    }
}