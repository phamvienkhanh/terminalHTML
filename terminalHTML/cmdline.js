class CommandLine
{
    constructor()
    {
        this._headLine      = '<span> KittyKeith $  </span>'
        this._contentLine  = ""
    }

    getLine()
    {
        return '<p>' + this._headLine + this._contentLine + '</p>'
    }
};

export default CommandLine;