let el
describe('Rick & Morty Automation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('equal','Patient Studio - QA Canddiate Assignment')
    cy.fixture('element').then((sel)=>{
      el = sel
    })
  })

  it('Verify that users can search characters by first name',()=>{
    cy.get(el.searchField).type(el.firstName)
    cy.get(el.characterList).should('be.visible')
  })

  it('Verify that users can search characters by last name',()=>{
    cy.get(el.searchField).type(el.lastName)
    cy.get(el.characterList).should('be.visible')
  })

  it('Verify that users can search characters by Full name',()=>{
    cy.get(el.searchField).type(el.fullName)
    cy.get(el.characterList).should('be.visible')
  })

  it('Verify that users can filter characters by location',()=>{
    cy.get(el.locationFilter).select('Anatomy Park')
    cy.get(el.characterList).should('be.visible').and('not.be.empty')
  })

  it('Verify that users can combine multiple filters',()=>{
    cy.get(el.searchField).type(el.fullName)
    cy.get(el.locationFilter).select('Citadel of Ricks')
    cy.get(el.characterList).should('be.visible').and('not.be.empty')
  })

  it('Verify that users can add characters to the favorites list',()=>{
    cy.get(el.characterList).should('be.visible').and('not.be.empty')
    cy.get(el.favouriteCharacter).click()
    cy.get(el.favouriteTab).click()
    cy.get(el.characterList).should('be.visible').and('not.be.empty')
  })

  it('Verify that users can add multiple characters to the favorites list',()=>{
    cy.get(el.characterList).should('be.visible').and('not.be.empty')
    cy.get(el.favouriteCharacter).click()
    cy.get(el.favouriteCharacter2).click()
    cy.get(el.favouriteCharacter3).click()
    cy.get(el.favouriteTab).click()
    cy.get(el.characterList).should('be.visible').and('not.be.empty')
  })

  it('Verify that users can remove characters from the favorites list',()=>{
    cy.get(el.characterList).should('be.visible').and('not.be.empty')
    cy.get(el.favouriteCharacter).click()
    cy.get(el.favouriteCharacter2).click()
    cy.get(el.favouriteCharacter3).click()
    cy.get(el.favouriteTab).click()
    cy.get(el.favouriteCharacter).click()
    cy.get(el.favouriteCharacter2).click()
    cy.get(el.favouriteCharacter3).click()
    cy.contains('No favorites selected').should('be.visible')
  })
})