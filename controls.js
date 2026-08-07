class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;


        this.#addKeyboardListeners();
    }

    //hash for private method as we dont need it to be acessible to public
    #addKeyboardListeners(){
        //use arrow func to keep "this" refering to outside scope
        document.onkeydown=(e)=>{
            switch(e.key){
                case 'a':
                case 'ArrowLeft' :
                    this.left=true;
                    break;
                case 'd':
                case 'ArrowRight':
                    this.right=true;
                    break;
                case 'w':
                case 'ArrowUp':
                    this.forward=true;
                    break;
                case 's':
                case 'ArrowDown':
                    this.reverse=true;
                    break;
            }
            console.table(this)
        }
        //use arrow func to keep "this" refering to outside scope
        document.onkeyup=(e)=>{
            switch(e.key){
                case 'a':
                case 'ArrowLeft' :
                    this.left=false;
                    break;
                case 'd':
                case 'ArrowRight':
                    this.right=false;
                    break;
                case 'w':
                case 'ArrowUp':
                    this.forward=false;
                    break;
                case 's':
                case 'ArrowDown':
                    this.reverse=false;
                    break;
            }
            console.table(this)
        }
        
    }
}