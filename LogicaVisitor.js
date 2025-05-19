import antlr4 from 'antlr4';


export default class LogicaVisitor extends antlr4.tree.ParseTreeVisitor {

	visitFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	visitImplication(ctx) {
	  return this.visitChildren(ctx);
	}


	visitDisjunction(ctx) {
	  return this.visitChildren(ctx);
	}


	visitConjunction(ctx) {
	  return this.visitChildren(ctx);
	}


	visitNegation(ctx) {
	  return this.visitChildren(ctx);
	}


	visitPrimary(ctx) {
	  return this.visitChildren(ctx);
	}


	visitVariable(ctx) {
	  return this.visitChildren(ctx);
	}



}