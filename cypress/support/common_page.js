
class CommonPages {
    getByClass (value){
        return cy.get(`[class="${value}"]`)
    }                        
}