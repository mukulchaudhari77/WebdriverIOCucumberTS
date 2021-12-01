class Payment {
    get paymentHeading() { return $('//h1[text()="Please choose your payment method"]') }
    get paymentOption(){ return $('//a[@class="bankwire"]')}

}
export default new Payment()