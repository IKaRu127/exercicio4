//DECLARANDO A CLASSE

class Livro {
    constructor(nome, autor, generoTextual, publicado ) {
        this.nome = nome
        this.autor = autor
        this.generoTextual = generoTextual
        this.publicado = false
    }
    publicar() {
        this.publicado = true
    }
    descrever() {
        if (this.publicado == true) {
            console.log("O Livro '" + this.nome + "' foi escrito por " + this.autor + ", e é um livro de " + this.generoTextual + "!\nO livro já foi publicado aqui no Brasil e está disponível em lojas físicas e digitais por todo país.")
        } else {
            console.log("O Livro '" + this.nome + "' foi escrito por " + this.autor + ", e é um livro de " + this.generoTextual + "!\nAtualmente o livro está em fase de desenvolvimento, e não foi publicado.")
        } 
    }
}

//Declarando Objetos

const livro1 = new Livro("Amanhecer", "Amalia Jaz","terror")
const livro2 = new Livro("Sonho de padaria", "Luiz Robert", "romance")
const livro3 = new Livro("Diga a lua", "Sabrine Aluca", "comédia")
const livro4 = new Livro("Alice e os feijões", "Kiki Silva", "aventura")

//CHAMANDO MÉTODOS 

livro1.publicar()
livro1.descrever()
livro2.descrever()
livro3.descrever()
livro4.publicar()
livro4.descrever()
livro3.publicar()
livro3.descrever()
