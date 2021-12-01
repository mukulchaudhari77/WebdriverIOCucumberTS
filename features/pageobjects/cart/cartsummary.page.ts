class Summary {
    get heading() { return $('//h1[@id="cart_title"]') }
    get chkout() { return $('//a[@class="button btn btn-default standard-checkout button-medium"]') }
}
export default new Summary()