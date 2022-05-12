class Uber{
    constructor(userName,kilometer,price){
        this.userName=userName
        this.kilometer=kilometer,
        this.price=price
    }
    getcalculate(){
        return this.kilometer*this.price;
    }
}

let praveen=new Uber("Praveenkumar",45,56);
console.log(praveen.getcalculate());