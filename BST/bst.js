class node{
    constructor(id,data) {
        this.id=id;
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null
    }

    insert(id,data){
        const newnode= new node(id,data);
        if(!(this.root)) this.root=newnode;
        else{
            this.ins_node(this.root,newnode)
        }
    }

    ins_node(node,newnode){
        if(newnode.id<node.id) {if(node.left==null)node.left=newnode; else this.ins_node(node.left,newnode);}
        else if(newnode.id>node.id){if(node.right==null)node.right=newnode; else this.ins_node(node.right,newnode);}
    }

    search(id){
        return this.srch(this.root,id)
    }

    srch(root,id){
        if(!root) return null;
        if(id==root.id) return root;
        if(id<root.id) return this.srch(root.left,id);
        if(id>root.id) return this.srch(root.right,id)
    }
    test(){
        return "PGS"
    }
    traverse(){
        const data=[]
        this.iotr(this.root,data)
        return data
    }
    iotr(root,data){
        if(root){
            this.iotr(root.left,data)
            data.push({
                name: root.data.name,
                id: root.id,
                score: root.data.score
            })
            this.iotr(root.right,data)
        }
    }
}

module.exports={
    BST
}