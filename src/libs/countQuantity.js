const countQuantity = () => {
  var buttonsPlus = document.querySelectorAll(".qty-btn-plus");
  var buttonsMinus = document.querySelectorAll(".qty-btn-minus");

  buttonsPlus.forEach(function (buttonPlus) {
    buttonPlus.addEventListener("click", function () {
      var $n = this.closest(".qty-container").querySelector(".input-qty");
      $n.value = Number($n.value) + 1;
    });
  });

  buttonsMinus.forEach(function (buttonMinus) {
    buttonMinus.addEventListener("click", function () {
      var $n = this.closest(".qty-container").querySelector(".input-qty");
      var amount = Number($n.value);
      if (amount > 1) {
        $n.value = amount - 1;
      }
    });
  });
};

export default countQuantity;
