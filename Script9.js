function HtmlElement() {
    this.click = function() {
        console.log("click");
    }
}

HtmlElement.prototype.focus = function() {
    console.log("draw");
}

function HtmlSelectElement(array = []) {
    this.array = array;
    this.click = HtmlElement.click.call(this);
    this.addItem = function(item) {
        this.array.push(item);
    }
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
