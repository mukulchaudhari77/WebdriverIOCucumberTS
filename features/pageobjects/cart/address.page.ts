class Address {
    get heading() { return $('//h1[text()="Addresses"]') }
    get proceed() { return $('//button[@class="button btn btn-default button-medium"]') }
}
export default new Address()