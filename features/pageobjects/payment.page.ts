class Payment {
    get paymentHeading() { return $('//h1[text()="Please choose your payment method"]') }
}
export default new Payment()