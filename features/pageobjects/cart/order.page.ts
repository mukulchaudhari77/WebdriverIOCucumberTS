class Order {
    get orderSummary() { return $('//h1[@class="page-heading"]') }
    get confrimOrder() { return $('//*[@class="button btn btn-default button-medium"]') }
    get ConfirmationMsg() { return $('//*[@class="page-heading"]') }
}
export default new Order()