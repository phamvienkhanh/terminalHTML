class CommandLine
{
    constructor(parent, idline)
    {
        this._headLine      = '<span> &nbsp  KittyKeith $  </span>';
        this._id            = idline;
        this._parent        = parent;
        this._parent.innerHTML += '<p ' + 'id=line' +  this._id + '>' + this._headLine + '</p>';
        this._intanceHTML   = parent.lastChild;
    }

    addContent(_letter)
    {
        this._intanceHTML.innerHTML += _letter;
    }
};

class TextArea
{
    constructor()
    {
        this._countLine     = 0;
        this._intanceHTML   = document.querySelector("#textArea");
        this._currentLine   = new CommandLine( this._intanceHTML, this._countLine);
        this.countChar      = 0;
    }

    keyPress(e)
    {
        // if(this.countChar === 70)
        // {
        //     this._currentLine.addContent("<br/>");
        //    this.countChar = 0;
        // }
        
        if(e.keyCode == 13)
        {
            this._countLine += 1;
            this._currentLine = new CommandLine(this._intanceHTML, this._countLine);
            this._intanceHTML.scrollTop =this._intanceHTML.scrollHeight;
        }
        else
        {
            this._currentLine.addContent(e.key);
            this.countChar += 1;
        }
    }
};

class ConsoleHandle
{
    constructor()
    {
        this._titlebar  = document.querySelector("#titlebar");
        this._console   = document.querySelector("#console");
        this._container = document.querySelector(".container");
        this._textArea  = new TextArea();

        this._onConsoleMove     = false;
        this._focusTextArea     =  true;
        this._consolePosX       = this._console.offsetLeft - 100; // number is init position
        this._consolePosY       = this._console.offsetTop - 100;
        this._consoleOffsetX    = 0;
        this._consoleOffsetY    = 0;
        this._focus             = false;

        console.log(this._console.offsetLeft);
        console.log(this._console.offsetTop);
    }

    Start()
    {
        this._titlebar.onmousedown = (e) => {
            //console.log("press" + this._consolePosX + "   " + this._consolePosY);
            this._onConsoleMove     = true;
            this._consoleOffsetX    = e.clientX - this._consolePosX;
            this._consoleOffsetY    = e.clientY - this._consolePosY;
            this._focus             = true;
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

    }


    _removeChar()
    {

    }

    OnKeyPress(e)
    {
        this._textArea.keyPress(e); 
    }
}


var _IConsole = new ConsoleHandle();
_IConsole.Start();

document.onkeypress = (e) => {
    if(_IConsole._focus == true)
    {
        _IConsole.OnKeyPress(e);
    }
};