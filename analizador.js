import antlr4 from 'antlr4';
import LogicaLexer from './LogicaLexer.js';
import LogicaParser from './LogicaParser.js';
import LogicaVisitor from './LogicaVisitor.js';
import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8');

// Configura el analizador léxico y sintáctico
const chars = new antlr4.InputStream(input);
const lexer = new LogicaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill(); // ¡Necesario para mostrar los tokens!
const parser = new LogicaParser(tokens);

// Muestra la tabla de tokens
console.log("Tabla de tokens:");
console.log("| LEXEMA | TOKEN TYPE | LÍNEA |");
tokens.tokens.forEach(token => {
    if (token.type !== -1) {
        console.log(`| ${token.text} | ${parser.symbolicNames[token.type]} | ${token.line} |`);
    }
});

// Analiza la fórmula
parser.buildParseTrees = true;
const tree = parser.formula();

// Muestra el árbol en texto
function printTree(node, indent = "") {
    if (node.children) {
        console.log(indent + parser.ruleNames[node.ruleIndex]);
        node.children.forEach(child => printTree(child, indent + "  "));
    } else {
        console.log(indent + `'${node.getText()}'`);
    }
}

console.log("\nÁrbol de análisis sintáctico:");
printTree(tree);

// Traducción a JavaScript
class TraductorJS extends LogicaVisitor {
    visitFormula(ctx) {
        return this.visit(ctx.implication());
    }

    visitImplication(ctx) {
        const izq = this.visit(ctx.disjunction());
        if (ctx.implication()) {
            const der = this.visit(ctx.implication());
            return `(!${izq} || ${der})`; // A → B equivale a ¬A ∨ B
        }
        return izq;
    }

    visitDisjunction(ctx) {
        return ctx.conjunction().map(this.visit.bind(this)).join(' || ');
    }

    visitConjunction(ctx) {
        return ctx.negation().map(this.visit.bind(this)).join(' && ');
    }

    visitNegation(ctx) {
        if (ctx.negation()) {
            return `!${this.visit(ctx.negation())}`;
        } else {
            return this.visit(ctx.primary());
        }
    }

    visitPrimary(ctx) {
        if (ctx.variable()) return this.visit(ctx.variable());
        return `(${this.visit(ctx.formula())})`;
    }

    visitVariable(ctx) {
        return ctx.getText();
    }
}

// Traducción a JavaScript
const visitor = new TraductorJS();
const jsCode = visitor.visit(tree);

console.log("Código generado en JS:", jsCode);

// Función para evaluar la expresión con valores de verdad
function evaluar(expresion, valores) {
    return new Function(...Object.keys(valores), `return ${expresion};`)(...Object.values(valores));
}

// Definir valores de verdad
const valores = { p: true, q: false, r: true, s: false };

// Evaluar la expresión generada
const resultado = evaluar(jsCode, valores);

console.log("Evaluación segura:", resultado);

console.log(JSON.stringify(jsCode, null, 2));
console.log(jsCode);
