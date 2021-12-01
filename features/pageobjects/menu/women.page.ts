class Women {
    get womenbutton() { return $("//a[@title='Women']"); }
    get hover() { return $('//a[@class="product_img_link"]/img') }
    get womenvalidate() { return $('//span[@class="cat-name"]') }
    get addtocartmsg() { return $('//div[@class="layer_cart_product col-xs-12 col-md-6"]/h2') }
    get clkonproceed() { return $('//a[@title="Proceed to checkout"]') }
    get clkaddtocartbtn() { return $('//a[@data-id-product="1"]') }
    get checkout() { return $('//a[@title="Proceed to checkout"]') }
}
export default new Women()