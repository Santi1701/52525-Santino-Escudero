const LogicaVisitor = require('./LogicaVisitor').LogicaVisitor;

class TraductorJS extends LogicaVisitor {
    visitFormula(ctx) {
        return this.visit(ctx.implication());
    }

    visitImplication(ctx) {
        const left = this.visit(ctx.disjunction());
        const rightCtx = ctx.implication();
        if (rightCtx) {
            const right = this.visit(rightCtx);
            // A → B se traduce como (!A || B)
            return `(!${left} || ${right})`;
        }
        return left;
    }

    visitDisjunction(ctx) {
        const conjunctions = ctx.conjunction();
        return conjunctions.map(child => this.visit(child)).join(' || ');
    }

    visitConjunction(ctx) {
        const negations = ctx.negation();
        return negations.map(child => this.visit(child)).join(' && ');
    }

    visitNegation(ctx) {
        if (ctx.negation()) {
            // ¬A se traduce como !A
            return `!${this.visit(ctx.negation())}`;
        } else {
            return this.visit(ctx.primary());
        }
    }

    visitPrimary(ctx) {
        if (ctx.variable()) {
            return this.visit(ctx.variable());
        } else {
            // paréntesis: (expr)
            return `(${this.visit(ctx.formula())})`;
        }
    }

    visitVariable(ctx) {
        return ctx.getText(); // devuelve el nombre de la variable
    }
}

module.exports = TraductorJS;
