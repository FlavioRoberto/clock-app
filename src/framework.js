function _setText(value, element) {
  element.textContent = value;
}

HTMLElement.prototype.setText = function (value) {
  _setText(value, this);
};

HTMLElement.prototype.setImage = function (url) {
  this.src = url;
};

HTMLElement.prototype.setBackground = function (url) {
  this.style.background = `url(${url}) no-repeat`;
  this.style.backgroundSize = 'cover';
};

HTMLElement.prototype.show = function () {
  this.style.visibility = 'visible';
  this.style.height = 'auto';
};

HTMLElement.prototype.hide = function () {
  this.style.visibility = 'hidden';
  this.style.height = 0;
};

HTMLElement.prototype.getFirstChild = function (childClass) {
  var element = this.getElementsByClassName(childClass)[0];
  return element;
};

HTMLElement.prototype.addClass = function (className) {
  this.classList.add(className);
  return this;
};

HTMLElement.prototype.removeClass = function (className) {
  this.classList.remove(className);
  return this;
};

HTMLElement.prototype.containClass = function (className) {
  return this.classList.contains(className);
};

(function () {
  function _getElement(value) {
    return document.querySelector(value);
  }

  function _getChild(element, childClass) {
    return element.getElementsByClassName(childClass);
  }

  function _click(value, callback) {
    const element = _getElement(value);
    element.addEventListener('click', (event) => callback(event, element));
  }
  return ($ = {
    getElement: _getElement,
    getChild: _getChild,
    click: _click,
  });
})();
