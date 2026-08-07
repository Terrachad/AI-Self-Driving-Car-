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
    #addKeyboardListeners() {
        const handleKey = (e, pressed) => {
            const key = e.key.toLowerCase();

            switch (key) {
                case "arrowleft":
                case "a":
                    this.left = pressed;
                    break;

                case "arrowright":
                case "d":
                    this.right = pressed;
                    break;

                case "arrowup":
                case "w":
                    this.forward = pressed;
                    break;

                case "arrowdown":
                case "s":
                    this.reverse = pressed;
                    break;
            }
        };

        document.addEventListener("keydown", (e) => handleKey(e, true));
        document.addEventListener("keyup", (e) => handleKey(e, false));
    }
}