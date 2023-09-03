class Comment{
    constructor(text){
        this.text = text;
        this.votesQty = 0
    }

    upvote(){
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')


class ExtendedArray extends Array{
    info(){
        return `Array has ${this.length} elements`;
    }
}

const myArray = new ExtendedArray(2,5,7)
console.log(myArray.info());