import antlr4 from 'antlr4';
import LogicaListener from './LogicaListener.js';
import LogicaVisitor from './LogicaVisitor.js';

const serializedATN = [4,1,9,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,1,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,5,2,26,8,
2,10,2,12,2,29,9,2,1,3,1,3,1,3,5,3,34,8,3,10,3,12,3,37,9,3,1,4,1,4,1,4,3,
4,42,8,4,1,5,1,5,1,5,1,5,1,5,3,5,49,8,5,1,6,1,6,5,6,53,8,6,10,6,12,6,56,
9,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,7,8,56,0,14,1,0,0,0,2,17,1,0,0,0,4,
22,1,0,0,0,6,30,1,0,0,0,8,41,1,0,0,0,10,48,1,0,0,0,12,50,1,0,0,0,14,15,3,
2,1,0,15,16,5,0,0,1,16,1,1,0,0,0,17,20,3,4,2,0,18,19,5,1,0,0,19,21,3,2,1,
0,20,18,1,0,0,0,20,21,1,0,0,0,21,3,1,0,0,0,22,27,3,6,3,0,23,24,5,2,0,0,24,
26,3,6,3,0,25,23,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,5,
1,0,0,0,29,27,1,0,0,0,30,35,3,8,4,0,31,32,5,3,0,0,32,34,3,8,4,0,33,31,1,
0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,7,1,0,0,0,37,35,1,0,0,
0,38,39,5,4,0,0,39,42,3,8,4,0,40,42,3,10,5,0,41,38,1,0,0,0,41,40,1,0,0,0,
42,9,1,0,0,0,43,49,3,12,6,0,44,45,5,5,0,0,45,46,3,0,0,0,46,47,5,6,0,0,47,
49,1,0,0,0,48,43,1,0,0,0,48,44,1,0,0,0,49,11,1,0,0,0,50,54,5,7,0,0,51,53,
7,0,0,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,13,1,
0,0,0,56,54,1,0,0,0,6,20,27,35,41,48,54];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicaParser extends antlr4.Parser {

    static grammarFileName = "Logica.g4";
    static literalNames = [ null, "'\\u2192'", "'\\u2228'", "'\\u2227'", 
                            "'\\u00AC'", "'('", "')'" ];
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
	        this.state = 15;
	        this.match(LogicaParser.EOF);
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
	        this.state = 17;
	        this.disjunction();
	        this.state = 20;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 18;
	            this.match(LogicaParser.IMPL);
	            this.state = 19;
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
	        this.state = 22;
	        this.conjunction();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 23;
	            this.match(LogicaParser.OR);
	            this.state = 24;
	            this.conjunction();
	            this.state = 29;
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
	        this.state = 30;
	        this.negation();
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 31;
	            this.match(LogicaParser.AND);
	            this.state = 32;
	            this.negation();
	            this.state = 37;
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
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 38;
	            this.match(LogicaParser.NOT);
	            this.state = 39;
	            this.negation();
	            break;
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
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
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.variable();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.match(LogicaParser.LPAREN);
	            this.state = 45;
	            this.formula();
	            this.state = 46;
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
	        this.state = 50;
	        this.match(LogicaParser.LETTER);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===8) {
	            this.state = 51;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 56;
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

	EOF() {
	    return this.getToken(LogicaParser.EOF, 0);
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
