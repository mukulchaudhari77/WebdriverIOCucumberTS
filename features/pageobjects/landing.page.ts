class Landingpage {

    get headerElement() { return $(".heading"); }
    get checkboxMenu() { return $("//a[text()='Checkboxes']"); }
    get checkboxHeader() { return $("//h3"); }
    get checkbox2Ele() { return $("//*[@id='checkboxes']/input[2]"); }
    get checkbox1Ele() { return $("//*[@id='checkboxes']/input[2]"); }

    async clickoncheckboxmenu() {
        await this.checkboxMenu.click();
    }
    async openapp() {
        await browser.maximizeWindow();
        await browser.url("http://the-internet.herokuapp.com/");
    }
}
export default new Landingpage()