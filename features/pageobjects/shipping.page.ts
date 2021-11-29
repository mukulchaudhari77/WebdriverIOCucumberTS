class Shipping {
    get shippingHeading() { return $('//h1[@class="page-heading"]') }
    get shippingCheckout() { return $('//button[@class="button btn btn-default standard-checkout button-medium"]') }
    get checkbox() { return $('#cgv') }
}
export default new Shipping()