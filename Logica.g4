grammar Logica;

// Reglas del parser
formula
    : implication 
    ;

implication
    : disjunction (IMPL implication)?
    ;

disjunction
    : conjunction (OR conjunction)*
    ;

conjunction
    : negation (AND negation)*
    ;

negation
    : NOT negation
    | primary
    ;

primary
    : variable
    | LPAREN formula RPAREN
    ;

variable
    : LETTER (LETTER | DIGIT)*
    ;

// Tokens léxicos explícitos
IMPL   : '\u2192'; // →
OR     : '\u2228'; // ∨
AND    : '\u2227'; // ∧
NOT    : '\u00AC'; // ¬
LPAREN : '\u0028';
RPAREN : '\u0029';

// Letras y dígitos
LETTER : [a-zA-Z];
DIGIT  : [0-9];

// Ignorar espacios, tabs y saltos de línea
WS     : [ \t\r\n]+ -> skip;
