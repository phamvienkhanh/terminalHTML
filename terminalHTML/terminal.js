class ConsoleHandle
{
    constructor()
    {
        this._titlebar  = document.querySelector("#titlebar");
        this._console   = document.querySelector("#console");
        this._container = document.querySelector(".container");
        this._textArea  = document.querySelector("#textArea");
        this._onConsoleMove     = false;
        this._focusTextArea     =  true;
        this._consolePosX       = this._console.offsetLeft;
        this._consolePosY       = this._console.offsetTop;
        this._consoleOffsetX    = 0;
        this._consoleOffsetY    = 0;
    }

    Start()
    {
        this._titlebar.onmousedown = (e) => {
            //console.log("press" + this._consolePosX + "   " + this._consolePosY);
            this._onConsoleMove     = true;
            this._consoleOffsetX    = e.clientX - this._consolePosX;
            this._consoleOffsetY    = e.clientY - this._consolePosY;
        };
        
        this._titlebar.onmouseup = (e) => {
            //console.log("over " + this._consolePosX + "   " + this._consolePosY);
            this._onConsoleMove = false;
        };
        
        this._container.onmousemove = (e) => {
            //console.log("mouse move");
            if(this._onConsoleMove === true)
            {
                let _x = e.clientX - this._consoleOffsetX;
                let _y = e.clientY - this._consoleOffsetY;
                this._consolePosX = _x;
                this._consolePosY = _y;
                this._console.style.transform = "translate3d(" + _x + "px, " + _y + "px, 0 )";
            }
        };

        // this._console.onfocus = (e) => {
        //     console.log("focus");
        // };

        // this._console.onblur = (e) => {
        //     console.log("blur");
        // };

        document.onkeypress = (e) => {
            console.log("onkeypress  " + e.code);
        };
    }
}


var _IConsole = new ConsoleHandle();
_IConsole.Start();