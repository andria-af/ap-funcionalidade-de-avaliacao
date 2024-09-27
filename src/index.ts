import { usersDataBase } from "./database/userDatabase";
import { User} from "./models/User";
import { Product } from "./models/Product";
import { productsDataBase } from "./database/productDatabase";

//criar usuario e adicionar ao banco de dados
const usuario1= new User("Ana", "Ana1", "ana@ana.com")
usuario1.save(usuario1)

const usuario3= new User("Ana", "Aninha", "ana@gmail.com")
usuario3.save(usuario3)

const usuario2= new User("Zé", "Zé1", "ze@ze.com")
usuario2.save(usuario2)

//criar produtos e salvar no banco de dados
const banana= new Product("banana", 5)
banana.save(banana)

const couve= new Product("couve", 2)
couve.save(couve)

const abacaxi= new Product("abacaxi", 6)
abacaxi.save(abacaxi)

//adicionar produtos ao carrinho
usuario1.addToCard(abacaxi)
usuario1.addToCard(banana)
usuario1.addToCard(couve)

//adicionar comentario e avaliação ao produto
banana.comment("Estava muito madura!",usuario1);
banana.rate(3,usuario1);
banana.rate(2, usuario2);


//remover produto do carrinho
usuario1.removeFromCard(couve);

//ver produto com comentarios e média de avaliações
//couve.show();
//banana.show();

//ver detalhes de um produto
//couve.showDetails();

//ver comentarios de um produto
//couve.showComments(); //sem comentário
//banana.showComments();  //com comentario

//ver avaliações de um produto
//banana.showRatings();

//ver produtos do carrinho do usuario
//usuario1.showProducts();

//validação para realizar apenas uma avaliação por usuário
//banana.rate(5,usuario1);

//console.log(usersDataBase);
console.log(productsDataBase)





