class nodeData{
    constructor(elem){
        this.element = elem;
        this.nextleft = null;
        this.nextright = null;
    }
}

class binarySerchTree{
    constructor(){
        this.root=null;

    }
    addRecursive(current,elem){
        if(current==null){
          return new nodeData(elem);
        }
        if(elem<current.element){
            current.nextleft = this.addRecursive(current.nextleft,elem);
        }
        else if(elem>current.element){
            current.nextright = this.addRecursive(current.nextright,elem);
        }
        else{
            return current;
        }
        return current;
    }
    add(elem){
        this.root=this.addRecursive(this.root,elem);
    }
    inOrder(n,str){
        if(n!=null){
            this.inOrder(n.nextleft,str);
            // console.log(n.element);
            str= str + n.element+"";
            this.inOrder(n.nextright,str);
            str = this.inOrder(n.nextright,str);

        }
        return str;
    }
    postOrder(n){
        if(n!=null){
            this.postOrder(n.nextleft);
            this.postOrder(n.nextright);
            console.log(n.element);
        }
    }
}


// main
let bst =new binarySerchTree(6)
console.log(bst);
bst.add(6);
bst.add(4);
bst.add(8);
bst.add(3);
bst.add(5);
bst.add(7);
bst.add(9);
let str = ""

console.log("in order : ",bst.inOrder(bst.root,str));
bst.inOrder(bst.root);

