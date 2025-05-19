import antlr4 from 'antlr4';


const serializedATN = [4,0,9,42,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,
1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,4,8,37,8,8,11,8,12,8,38,1,8,1,8,0,0,9,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,3,2,0,65,90,97,122,1,0,48,57,3,
0,9,10,13,13,32,32,42,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,
0,3,21,1,0,0,0,5,23,1,0,0,0,7,25,1,0,0,0,9,27,1,0,0,0,11,29,1,0,0,0,13,31,
1,0,0,0,15,33,1,0,0,0,17,36,1,0,0,0,19,20,5,8594,0,0,20,2,1,0,0,0,21,22,
5,8744,0,0,22,4,1,0,0,0,23,24,5,8743,0,0,24,6,1,0,0,0,25,26,5,172,0,0,26,
8,1,0,0,0,27,28,5,40,0,0,28,10,1,0,0,0,29,30,5,41,0,0,30,12,1,0,0,0,31,32,
7,0,0,0,32,14,1,0,0,0,33,34,7,1,0,0,34,16,1,0,0,0,35,37,7,2,0,0,36,35,1,
0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,6,8,
0,0,41,18,1,0,0,0,2,0,38,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicaLexer extends antlr4.Lexer {

    static grammarFileName = "Logica.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\\u2192'", "'\\u2228'", "'\\u2227'", "'\\u00AC'", 
                         "'\\u0028'", "'\\u0029'" ];
	static symbolicNames = [ null, "IMPL", "OR", "AND", "NOT", "LPAREN", "RPAREN", 
                          "LETTER", "DIGIT", "WS" ];
	static ruleNames = [ "IMPL", "OR", "AND", "NOT", "LPAREN", "RPAREN", "LETTER", 
                      "DIGIT", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicaLexer.EOF = antlr4.Token.EOF;
LogicaLexer.IMPL = 1;
LogicaLexer.OR = 2;
LogicaLexer.AND = 3;
LogicaLexer.NOT = 4;
LogicaLexer.LPAREN = 5;
LogicaLexer.RPAREN = 6;
LogicaLexer.LETTER = 7;
LogicaLexer.DIGIT = 8;
LogicaLexer.WS = 9;



