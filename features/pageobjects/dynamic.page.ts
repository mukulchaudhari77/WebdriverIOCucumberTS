class DynamicPage {

    get startBtn() { return $("#start") }
    get loadingElement() { return $("#loading") }
    get helloWordText(){ return $('#finish>h4')}
}
export default new DynamicPage()

