import antlr4 from 'antlr4';
import LogicaListener from './LogicaListener.js';
import LogicaVisitor from './LogicaVisitor.js';

const serializedATN = [4,1,9,57,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,1,1,1,1,1,3,1,20,8,1,1,2,1,2,1,2,5,2,25,8,2,10,
2,12,2,28,9,2,1,3,1,3,1,3,5,3,33,8,3,10,3,12,3,36,9,3,1,4,1,4,1,4,3,4,41,
8,4,1,5,1,5,1,5,1,5,1,5,3,5,48,8,5,1,6,1,6,5,6,52,8,6,10,6,12,6,55,9,6,1,
6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,7,8,55,0,14,1,0,0,0,2,16,1,0,0,0,4,21,1,
0,0,0,6,29,1,0,0,0,8,40,1,0,0,0,10,47,1,0,0,0,12,49,1,0,0,0,14,15,3,2,1,
0,15,1,1,0,0,0,16,19,3,4,2,0,17,18,5,1,0,0,18,20,3,2,1,0,19,17,1,0,0,0,19,
20,1,0,0,0,20,3,1,0,0,0,21,26,3,6,3,0,22,23,5,2,0,0,23,25,3,6,3,0,24,22,
1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,5,1,0,0,0,28,26,1,0,
0,0,29,34,3,8,4,0,30,31,5,3,0,0,31,33,3,8,4,0,32,30,1,0,0,0,33,36,1,0,0,
0,34,32,1,0,0,0,34,35,1,0,0,0,35,7,1,0,0,0,36,34,1,0,0,0,37,38,5,4,0,0,38,
41,3,8,4,0,39,41,3,10,5,0,40,37,1,0,0,0,40,39,1,0,0,0,41,9,1,0,0,0,42,48,
3,12,6,0,43,44,5,5,0,0,44,45,3,0,0,0,45,46,5,6,0,0,46,48,1,0,0,0,47,42,1,
0,0,0,47,43,1,0,0,0,48,11,1,0,0,0,49,53,5,7,0,0,50,52,7,0,0,0,51,50,1,0,
0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,13,1,0,0,0,55,53,1,0,0,
0,6,19,26,34,40,47,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicaParser extends antlr4.Parser {

    static grammarFileName = "Logica.g4";
    static literalNames = [ null, "'\\u2192'", "'\\u2228'", "'\\u2227'", 
                            "'\\u00AC'", "'\\u0028'", "'\\u0029'" ];
    static symbolicNames = [ null, "IMPL", "OR", "AND", "NOT", "LPAREN", 
                             "RPAREN", "LETTER", "DIGIT", "WS" ];
    static ruleNames = [ "formula", "implication", "disjunction", "conjunction", 
                         "negation", "primary", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogicaParser.ruleNames;
        this.literalNames = LogicaParser.literalNames;
        this.symbolicNames = LogicaParser.symbolicNames;
    }



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogicaParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.implication();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implication() {
	    let localctx = new ImplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogicaParser.RULE_implication);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.disjunction();
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 17;
	            this.match(LogicaParser.IMPL);
	            this.state = 18;
	            this.implication();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogicaParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.conjunction();
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 22;
	            this.match(LogicaParser.OR);
	            this.state = 23;
	            this.conjunction();
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogicaParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.negation();
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 30;
	            this.match(LogicaParser.AND);
	            this.state = 31;
	            this.negation();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogicaParser.RULE_negation);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.match(LogicaParser.NOT);
	            this.state = 38;
	            this.negation();
	            break;
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogicaParser.RULE_primary);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.variable();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.match(LogicaParser.LPAREN);
	            this.state = 44;
	            this.formula();
	            this.state = 45;
	            this.match(LogicaParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LogicaParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(LogicaParser.LETTER);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===8) {
	            this.state = 50;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogicaParser.EOF = antlr4.Token.EOF;
LogicaParser.IMPL = 1;
LogicaParser.OR = 2;
LogicaParser.AND = 3;
LogicaParser.NOT = 4;
LogicaParser.LPAREN = 5;
LogicaParser.RPAREN = 6;
LogicaParser.LETTER = 7;
LogicaParser.DIGIT = 8;
LogicaParser.WS = 9;

LogicaParser.RULE_formula = 0;
LogicaParser.RULE_implication = 1;
LogicaParser.RULE_disjunction = 2;
LogicaParser.RULE_conjunction = 3;
LogicaParser.RULE_negation = 4;
LogicaParser.RULE_primary = 5;
LogicaParser.RULE_variable = 6;

class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_formula;
    }

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_implication;
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	IMPL() {
	    return this.getToken(LogicaParser.IMPL, 0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterImplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitImplication(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitImplication(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_disjunction;
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaParser.OR);
	    } else {
	        return this.getToken(LogicaParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitDisjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitDisjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_conjunction;
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaParser.AND);
	    } else {
	        return this.getToken(LogicaParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitConjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitConjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_negation;
    }

	NOT() {
	    return this.getToken(LogicaParser.NOT, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitNegation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitNegation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_primary;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LPAREN() {
	    return this.getToken(LogicaParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(LogicaParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_variable;
    }

	LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaParser.LETTER);
	    } else {
	        return this.getToken(LogicaParser.LETTER, i);
	    }
	};


	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaParser.DIGIT);
	    } else {
	        return this.getToken(LogicaParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogicaParser.FormulaContext = FormulaContext; 
LogicaParser.ImplicationContext = ImplicationContext; 
LogicaParser.DisjunctionContext = DisjunctionContext; 
LogicaParser.ConjunctionContext = ConjunctionContext; 
LogicaParser.NegationContext = NegationContext; 
LogicaParser.PrimaryContext = PrimaryContext; 
LogicaParser.VariableContext = VariableContext; 
