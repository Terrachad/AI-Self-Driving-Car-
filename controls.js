class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;


        this.#addKeyboardListeners();
    }

    //hash for private method as we dont need it to be acessible to public 
    //refactor, clean, improve with combined version
    //swith to e.code use for wasd controls on any keyboard
    #addKeyboardListeners() {
        const handleKey = (e, pressed) => {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    this.left = pressed;
                    break;

                case "ArrowRight":
                case "KeyD":
                    this.right = pressed;
                    break;

                case "ArrowUp":
                case "KeyW":
                    this.forward = pressed;
                    break;

                case "ArrowDown":
                case "KeyS":
                    this.reverse = pressed;
                    break;
            }
        };

        document.addEventListener("keydown", (e) => handleKey(e, true));
        document.addEventListener("keyup", (e) => handleKey(e, false));
    }
}