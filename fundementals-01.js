//https://playcode.io/javascript/

/*

MULTILINE COMMENT

*/


// Single line comments


// Rozdiel medzi hodnotou a premennou

const premenna = 'Hodnota premennej';

console.log('Hodnota')
console.log(premenna)

// Datove typy

/*
    PRIMITÍVNE DÁTOVÉ TYPY
    * Boolean true/false
    * Null
    * Undefined
    * Number 
    * BigInt
    * String
    * Symbol
    * NaN
    
    OBJEKTY
    * Objekty majú svoje vlastnosti - value, writable, enumerable, configurable
    * Dátum 12.12.1212
    * Pole ['QA', 'Coding', 'Sales']
    * Mapa  {key: value} const capitalCity = {'SK': 'BA', 'CZ' : 'PRA'}
    * JSON person = {"name":"John", "age":30, "car":null}
*/

// Spôsob vytvárania premenných

/*
    * let -- scope within brackets
    * var -- Global scope
    * const
*/

// CYKLUS FOR WHILE DO WHILE

// KNIZNICE

// String and template Literals

// Podmienky

// Rozdiel medzi == a === 

// Boolean logic

// Ternary operator

// Funkcie 

// Function declaration vs expressions //PROBLEM VOLANIA FNC EXPRESS PRED DEKLARACIOU

// ARROW FUNCTION

// FUNKCIE VOLAJUCE INE FUNKCIE

// REKURZÍVNE FUNKCIE
let clickNext = () => {
    cy.get('body').then(() => {
        cy.wait(10000).then(() => {
            const $dashBoard = cy.$$('.introjs-tooltiptext')
            if ($dashBoard.length) {
                cy.get('.introjs-tooltiptext').should('be.visible')
                cy.get('@next').click().then(() => {
                    clickNext()
                })
            }
        })   
    })
}
clickNext()

// IMPORT
