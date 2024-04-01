document.addEventListener("DOMContentLoaded", function () {
  const collectionGorod = localStorage.getItem("collection_gorod");
  if (collectionGorod !== null) {
    const h1El = document.querySelector(".collection-title .region-hide");
    if (h1El) h1El.textContent = collectionGorod;
  }
});

//yaCounter24600053)
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("jquery-script").onload = (function () {
    $(document).on("click", ".promo-banner_otzivy", function (e) {
      console.log("click .promo-banner_otzivy");
      window["yaCounter" + YaCounterId].reachGoal("click-banner-otzivy");
    });
    $(document).on(
      "click",
      ".reliability-feedback .slick-arrow",
      function (e) {
        console.log("click .reliability-feedback .slick-arrow");
        window["yaCounter" + YaCounterId].reachGoal(
          "click-feedback-slider"
        );
      }
    );
    $(".page__slider-feedback").on(
      "afterChange",
      function (event, slick, currentSlide, nextSlide) {
        console.log("change .page__slider-feedback");
        window["yaCounter" + YaCounterId].reachGoal(
          "change-feedback-slider"
        );
      }
    );
  })();
});

document.addEventListener("DOMContentLoaded", function (event) {
  let pageSliderManager = document.querySelector(".page__slider-manager");
  if (!pageSliderManager) return;
  var managerSliderOptions = { threshold: 1.0 };
  var managerSliderCallback = function (entries, observer) {
    entries.forEach((entry) => {
      // console.log(entry.intersectionRatio);
      if (entry.intersectionRatio == 1) {
        $(".page__slider-manager")
          .slick("slickSetOption", "autoplay", true)
          .slick("slickPlay");
        setTimeout(function () {
          $(".page__slider-manager").slick(
            "slickSetOption",
            "autoplaySpeed",
            2e3
          );
        }, 1100);
        observer.unobserve(entry.target);
      }
    });
  };
  var managerSliderObserver = new IntersectionObserver(
    managerSliderCallback,
    managerSliderOptions
  );
  managerSliderObserver.observe(pageSliderManager);
});

var cv_currency_format =
  '{"delimiter":" ","separator":".","format":"%n\\u0026nbsp;%u","unit":"₽","show_price_without_cents":1}';
function initAjaxAddToCartButton(handle, onAddToCart) {
  jQuery(handle).live("click", function (e) {
    e.preventDefault();
    var prodImg = $(this).attr("data-img");
    var prodTitle = $(this).attr("data-title");
    $("#popup-cart .title").html(prodTitle);
    $("#popup-cart .image").attr("src", prodImg);
    addOrderItem(jQuery(this).parents("form:first"), onAddToCart);
  });
}
// $(function() {
// document.addEventListener("DOMContentLoaded", function() {
function getBodyScrollTop() {
  return (
    self.pageYOffset ||
    (document.documentElement && document.documentElement.scrollTop) ||
    (document.body && document.body.scrollTop)
  );
}
function showVisibleZamerEar() {
  if (window.isShowZamerEar) {
    if (getBodyScrollTop() <= window.scrollHeightForShowZamerEar) {
      window.ZamerEar.classList.remove("active");
      window.isShowZamerEar = false;
    }
  } else {
    if (getBodyScrollTop() > window.scrollHeightForShowZamerEar) {
      window.ZamerEar.classList.add("active");
      window.isShowZamerEar = true;
    }
  }
}
function showVisibleRassrochkaEar() {
  var getBodyScrollTopCurrent = getBodyScrollTop();
  if (window.isShowRassrochkaEar) {
    if (
      getBodyScrollTopCurrent <=
      window.scrollHeightForShowRassrochkaEar ||
      getBodyScrollTopCurrent >= window.scrollHeightForHideRassrochkaEar
    ) {
      window.RassrochkaEar.classList.remove("active");
      window.isShowRassrochkaEar = false;
    }
  } else {
    if (
      getBodyScrollTopCurrent > window.scrollHeightForShowRassrochkaEar &&
      getBodyScrollTopCurrent < window.scrollHeightForHideRassrochkaEar
    ) {
      window.RassrochkaEar.classList.add("active");
      window.isShowRassrochkaEar = true;
    }
  }
}
function showVisibleBirtdayImg() {
  var getBodyScrollTopCurrent = getBodyScrollTop();
  if (window.isShowBirtdayImg) {
    if (getBodyScrollTopCurrent >= window.scrollHeightForHideBirtdayImg) {
      window.birtdayImg.classList.remove("active");
      window.isShowBirtdayImg = false;
    }
  } else {
    if (getBodyScrollTopCurrent < window.scrollHeightForHideBirtdayImg) {
      window.birtdayImg.classList.add("active");
      window.isShowBirtdayImg = true;
    }
  }
}
window.setEars = function () {
  window.allPageHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  let screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  window.allPageHeight -= screenHeight;
  console.log("window.allPageHeight ", window.allPageHeight);
  window.isShowZamerEarDisabled = sessionStorage.getItem(
    "isShowZamerEarDisabled"
  );
  window.isShowRassrochkaEarDisabled = sessionStorage.getItem(
    "isShowRassrochkaEarDisabled"
  );
  window.isShowBirtdayImgDisabled = sessionStorage.getItem(
    "isShowBirtdayImgDisabled"
  );

  if (!window.isShowZamerEarDisabled) {
    var currentHours = new Date();
    currentHours = currentHours.getHours();

    var currentPlasesZamer = 2 + " места";
    if (currentHours < 9) {
      currentPlasesZamer = 5 + " мест";
    } else if (currentHours < 12) {
      currentPlasesZamer = 4 + " места";
    } else if (currentHours < 18) {
      currentPlasesZamer = 3 + " места";
    } else {
      currentPlasesZamer = 2 + " места";
    }
    document.querySelector(".js-current-hours").innerHTML =
      currentPlasesZamer;

    window.scrollHeightForShowZamerEar =
      (2 * window.allPageHeight) / 3 + 51; // Math.max(1999,document.documentElement.clientHeight);
    window.RassrochkaEar = document.querySelector(".ears_rassrochka");
    window.birtdayImg = document.querySelector(".birtday-left");
    if (window.isShowBirtdayImgDisabled || !window.birtdayImg) {
      window.scrollHeightForShowZamerEar = window.allPageHeight / 2 + 51;
      if (window.isShowRassrochkaEarDisabled || !window.RassrochkaEar) {
        window.scrollHeightForShowZamerEar = -999;
      }
    } else {
      if (window.isShowRassrochkaEarDisabled || !window.RassrochkaEar) {
        window.scrollHeightForShowZamerEar =
          window.allPageHeight / 2 + 51;
      }
    }
    console.log(
      "window.scrollHeightForShowZamerEar ",
      window.scrollHeightForShowZamerEar
    );
    window.ZamerEar = document.querySelector(".ears_zamer");
    if (window.ZamerEar) {
      showVisibleZamerEar();
    }
  }

  if (!window.isShowRassrochkaEarDisabled) {
    window.scrollHeightForShowRassrochkaEar =
      window.allPageHeight / 3 + 51; // 799;
    window.scrollHeightForHideRassrochkaEar =
      (2 * window.allPageHeight) / 3 - 51; // Math.max(1999,document.documentElement.clientHeight) - 100;
    window.ZamerEar = document.querySelector(".ears_zamer");
    window.birtdayImg = document.querySelector(".birtday-left");
    if (window.isShowBirtdayImgDisabled || !window.birtdayImg) {
      window.scrollHeightForShowRassrochkaEar = -999;
      window.scrollHeightForHideRassrochkaEar =
        window.allPageHeight / 2 - 51;
      if (window.isShowZamerEarDisabled || !window.ZamerEar) {
        window.scrollHeightForHideRassrochkaEar =
          window.allPageHeight + 999;
      }
    } else {
      if (window.isShowZamerEarDisabled || !window.ZamerEar) {
        window.scrollHeightForShowRassrochkaEar =
          window.allPageHeight / 2 + 51;
        window.scrollHeightForHideRassrochkaEar =
          window.allPageHeight + 999;
      }
    }
    console.log(
      "scrollHeightForShowRassrochkaEar ",
      window.scrollHeightForShowRassrochkaEar
    );
    console.log(
      "scrollHeightForHideRassrochkaEar ",
      window.scrollHeightForHideRassrochkaEar
    );
    window.RassrochkaEar = document.querySelector(".ears_rassrochka");

    if (window.RassrochkaEar) {
      showVisibleRassrochkaEar();
    } else {
      window.scrollHeightForHideBirtdayImg =
        window.scrollHeightForShowZamerEar - 100;
    }
  }

  if (!window.isShowBirtdayImgDisabled) {
    window.birtdayImg = document.querySelector(".birtday-left");
    window.scrollHeightForHideBirtdayImg = window.allPageHeight / 3 - 51; // 799 - 100;
    window.RassrochkaEar = document.querySelector(".ears_rassrochka");
    window.ZamerEar = document.querySelector(".ears_zamer");
    if (window.isShowRassrochkaEarDisabled || !window.RassrochkaEar) {
      window.scrollHeightForHideBirtdayImg =
        window.allPageHeight / 2 - 51;
      if (window.isShowZamerEarDisabled || !window.ZamerEar) {
        window.scrollHeightForHideBirtdayImg = window.allPageHeight + 999;
      }
    } else {
      if (window.isShowZamerEarDisabled || !window.ZamerEar) {
        window.scrollHeightForHideBirtdayImg =
          window.allPageHeight / 2 - 51;
      }
    }
    console.log(
      "window.scrollHeightForHideBirtdayImg ",
      window.scrollHeightForHideBirtdayImg
    );

    if (window.birtdayImg) {
      showVisibleBirtdayImg();
    }
  }
};
window.initEars = function () {
  console.log("initEars");
  window.setEars();
  if (!window.isShowZamerEarDisabled) {
    window.isShowZamerEar = false;
    if (window.ZamerEar) {
      document
        .querySelector(".ears-close_zamer")
        .addEventListener("click", function (e) {
          window.removeEventListener("scroll", showVisibleZamerEar);
          e.target.parentElement.classList.remove("active");
          e.stopPropagation();
          sessionStorage.setItem("isShowZamerEarDisabled", true);
        });

      window.addEventListener("scroll", showVisibleZamerEar);
    }
  }
  if (!window.isShowRassrochkaEarDisabled) {
    window.isShowRassrochkaEar = false;
    if (window.RassrochkaEar) {
      var earsCloseRassrochka = document.querySelector(
        ".ears-close_rassrochka"
      );
      if (earsCloseRassrochka)
        earsCloseRassrochka.addEventListener("click", function (e) {
          window.removeEventListener("scroll", showVisibleRassrochkaEar);
          e.target.parentElement.classList.remove("active");
          e.stopPropagation();
          sessionStorage.setItem("isShowRassrochkaEarDisabled", true);
        });

      window.addEventListener("scroll", showVisibleRassrochkaEar);
    }
  }
  if (!window.isShowBirtdayImgDisabled) {
    window.isShowBirtdayImg = false;
    if (window.birtdayImg) {
      var earsCloseBirtdayImg = window.birtdayImg.querySelector(
        ".ears-close_birtday-img"
      );
      if (earsCloseBirtdayImg)
        earsCloseBirtdayImg.addEventListener("click", function (e) {
          e.preventDefault();
          window.removeEventListener("scroll", showVisibleBirtdayImg);
          e.target.parentElement.classList.remove("active");
          e.stopPropagation();
          sessionStorage.setItem("isShowBirtdayImgDisabled", true);
        });

      window.addEventListener("scroll", showVisibleBirtdayImg);
    }
  }
};
window.addEventListener("load", function (e) {
  window.initEars();
});

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById('jquery-script').addEventListener("load", function() {
  document.getElementById("jquery-script").onload = (function () {
    const MINCARTITEMS = 1;
    const MAXCARTITEMS = 99;
    const CartDelivery = $(".cart-results__delivery");
    const CartSumma = $(".cart-results__summa");
    const CartItog = $(".cart-results__itog");
    const CartGoodsText = $(".cart-results__count");
    const CartSummaAll = $(".cart-results__summa_all");
    const CartSummaDiscount = $(".cart-results__summa_discount");
    /*let CartDeliveryValue = 0;
let CartSummaValue = 0;
let CartItogValue = 0;*/
    function goodsTextByNumber(x) {
      let model_word = "товаров";
      let model_count_0 = x % 100;
      let model_count_1 = model_count_0 % 10;
      if (model_count_0 > 10 && model_count_0 < 20) {
      } else if (model_count_1 > 1 && model_count_1 < 5) {
        model_word = "товара";
      } else if (model_count_1 == 1) {
        model_word = "товар";
      }
      return model_word;
    }
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "&nbsp;");
    }
    function reloadCartSumms() {
      let summ = 0;
      let summDiscount = 0;
      let summGoods = 0;
      $(".cart-checkbox-item_active").each(function (index) {
        let curCatalogItem = $(this).closest(".catalog__item");
        let curPrice = curCatalogItem.find(".catalog__price-current");
        if (curPrice.length) {
          curPrice = curPrice
            .text()
            .replace(" ₽", "")
            .replace(" ", "")
            .replace("&nbsp;₽", "")
            .replace("&nbsp;", "")
            .replace(" ", "");
        } else {
          curPrice = 0;
        }
        let curCount = +curCatalogItem
          .find(".catalog-addToBasket-form__count")
          .text();
        summGoods += curCount;
        let curEconom = curCatalogItem.find(
          ".product__stock-econom_discont"
        );
        if (curEconom.length) {
          curEconom = curEconom
            .text()
            .replace(" ₽", "")
            .replace(" ", "")
            .replace("&nbsp;₽", "")
            .replace("&nbsp;", "")
            .replace(" ", "");
        } else {
          let curOldPrice = curCatalogItem.find(".catalog__price-old");
          if (curOldPrice.length) {
            curOldPrice = curOldPrice
              .text()
              .replace(" ₽", "")
              .replace(" ", "")
              .replace("&nbsp;₽", "")
              .replace("&nbsp;", "")
              .replace(" ", "");
            curEconom = curOldPrice - curPrice;
          } else {
            curEconom = 0;
          }
        }
        summDiscount += curEconom * curCount;
        summ += curPrice * curCount;
      });
      CartDelivery.html(numberWithCommas(0) + "&nbsp;₽");
      CartSumma.html(numberWithCommas(summ) + "&nbsp;₽");
      CartItog.html(numberWithCommas(summ) + "&nbsp;₽");

      CartGoodsText.html(summGoods + " " + goodsTextByNumber(summGoods));
      CartSummaAll.html(
        numberWithCommas(summ + summDiscount) + "&nbsp;₽"
      );
      CartSummaDiscount.html(numberWithCommas(summDiscount) + "&nbsp;₽");
    }
    $.get("/cart_items.json").done(function (cart) {
      console.log(cart);
      /*console.log(cart.items);*/
      if (cart.order_lines.length) {
        /*CartDelivery.html(numberWithCommas(cart.delivery_price) + '&nbsp;₽');
CartSumma.html(numberWithCommas(cart.items_price) + '&nbsp;₽');
CartItog.html(numberWithCommas(cart.total_price) + '&nbsp;₽');*/
        /*CartDeliveryValue = cart.delivery_price;
CartSummaValue = cart.items_price;
CartItogValue = cart.total_price;*/ let $cartCountItem = $(
        ".header__cart-count"
      );
        $cartCountItem
          .closest(".header__links-link_cart")
          .addClass("header__links-link_cart_active");
        $cartCountItem.text(cart.order_lines.length);
        for (let i = 0; i < cart.order_lines.length; i++) {
          /*console.log(cart.order_lines[i]);*/
          let elInCart = $(
            `.catalog-addToBasket-form [name="variant_id"][value="${cart.order_lines[i].variant_id}"]`
          );
          if (elInCart.length) {
            let formCart = elInCart.closest(".catalog-addToBasket-form");
            formCart.addClass("catalog-addToBasket-form_added");
            formCart
              .find(".catalog-addToBasket-form__count")
              .text(cart.order_lines[i].quantity);
            if (+cart.order_lines[i].quantity >= MAXCARTITEMS) {
              formCart
                .find(".catalog-addToBasket-form__plus")
                .addClass("catalog-addToBasket-form__plus_disabled");
            } else {
              formCart
                .find(".catalog-addToBasket-form__plus")
                .removeClass("catalog-addToBasket-form__plus_disabled");
            }
            if (+cart.order_lines[i].quantity <= MINCARTITEMS) {
              formCart
                .find(".catalog-addToBasket-form__minus")
                .addClass("catalog-addToBasket-form__minus_disabled");
            } else {
              formCart
                .find(".catalog-addToBasket-form__minus")
                .removeClass("catalog-addToBasket-form__minus_disabled");
            }
          }
        }
        reloadCartSumms();
      }
    });
    /* /cart_items/v2.json */
    $(".catalog-addToBasket-form__minus").on("click", function (e) {
      e.preventDefault();
      try {
        yaCounter24600053.reachGoal("click-minuscart-btn");
      } catch { }
      let $thicBtn = $(this);
      if ($thicBtn.hasClass("catalog-addToBasket-form__minus_disabled"))
        return;
      let $count = $(this)
        .closest(".catalog-addToBasket-form__btn-added")
        .find(".catalog-addToBasket-form__count");
      let $btnAnother = $(this)
        .closest(".catalog-addToBasket-form__btn-added")
        .find(".catalog-addToBasket-form__plus");
      let curCount = +$count.text();
      if (curCount > MINCARTITEMS) {
        $count.text(curCount - 1);
      } else {
        $thicBtn.addClass("catalog-addToBasket-form__minus_disabled");
      }
      if (curCount - 1 == MINCARTITEMS) {
        $thicBtn.addClass("catalog-addToBasket-form__minus_disabled");
      }
      $btnAnother.removeClass("catalog-addToBasket-form__plus_disabled");
      let $form = $(this).closest(".catalog-addToBasket-form");
      let variant_id = +$form.find('[name="variant_id"]').val();
      let fields = {};
      fields["cart[quantity][" + variant_id + "]"] = curCount - 1;
      $.ajax({
        url: "/cart_items.json",
        type: "PUT",
        data: fields,
        success: function (cart) {
          console.log(cart);
          let $cartCountItem = $(".header__cart-count");
          $cartCountItem.text(cart.items.length ? cart.items.length : 0);
          if (cart.items.length) {
            $cartCountItem
              .closest(".header__links-link_cart")
              .addClass("header__links-link_cart_active");
          } else {
            $cartCountItem
              .closest(".header__links-link_cart")
              .removeClass("header__links-link_cart_active");
          }
        },
      });
    });
    $(".catalog-addToBasket-form__plus").on("click", function (e) {
      e.preventDefault();
      try {
        yaCounter24600053.reachGoal("click-pluscart-btn");
      } catch { }
      let $thicBtn = $(this);
      if ($thicBtn.hasClass("catalog-addToBasket-form__plus_disabled"))
        return;
      let $count = $(this)
        .closest(".catalog-addToBasket-form__btn-added")
        .find(".catalog-addToBasket-form__count");
      let $btnAnother = $(this)
        .closest(".catalog-addToBasket-form__btn-added")
        .find(".catalog-addToBasket-form__minus");
      let curCount = +$count.text();
      if (curCount < MAXCARTITEMS) {
        $count.text(curCount + 1);
      } else {
        $thicBtn.addClass("catalog-addToBasket-form__plus_disabled");
      }
      if (curCount + 1 == MAXCARTITEMS) {
        $thicBtn.addClass("catalog-addToBasket-form__plus_disabled");
      }
      $btnAnother.removeClass("catalog-addToBasket-form__minus_disabled");
      let $form = $(this).closest(".catalog-addToBasket-form");
      let variant_id = +$form.find('[name="variant_id"]').val();
      let fields = {};
      fields["cart[quantity][" + variant_id + "]"] = curCount + 1;
      $.ajax({
        url: "/cart_items.json",
        type: "PUT",
        data: fields,
        success: function (cart) {
          console.log(cart);
          let $cartCountItem = $(".header__cart-count");
          $cartCountItem.text(cart.items.length ? cart.items.length : 0);
          if (cart.items.length) {
            $cartCountItem
              .closest(".header__links-link_cart")
              .addClass("header__links-link_cart_active");
          } else {
            $cartCountItem
              .closest(".header__links-link_cart")
              .removeClass("header__links-link_cart_active");
          }
        },
      });
    });
    $(".catalog-addToBasket-form__delete").on("click", function (e) {
      e.preventDefault();
      try {
        yaCounter24600053.reachGoal("click-catalog-deleteFromBasket-btn");
      } catch { }
      let $thicBtn = $(this);
      let $count = $(this)
        .closest(".catalog-addToBasket-form__btn-added")
        .find(".catalog-addToBasket-form__count");
      $count.text(1);
      let $btnAnother = $(this)
        .closest(".catalog-addToBasket-form__btn-added")
        .find(".catalog-addToBasket-form__plus");
      $btnAnother.removeClass("catalog-addToBasket-form__plus_disabled");
      $btnAnother = $(this)
        .closest(".catalog-addToBasket-form__btn-added")
        .find(".catalog-addToBasket-form__minus");
      $btnAnother.removeClass("catalog-addToBasket-form__minus_disabled");
      let $form = $(this).closest(".catalog-addToBasket-form");
      $form.removeClass("catalog-addToBasket-form_added");
      let variant_id = +$form.find('[name="variant_id"]').val();
      let fields = {};
      fields["cart[quantity][" + variant_id + "]"] = 0;
      $.ajax({
        url: "/cart_items.json",
        type: "PUT",
        data: fields,
        success: function (cart) {
          console.log(cart);
          let curCartCount = cart.items.length;
          $(".cart-count").text(
            curCartCount + " " + goodsTextByNumber(cart.items.length)
          );
          reloadCartSumms();
          let $cartCountItem = $(".header__cart-count");
          $cartCountItem.text(cart.items.length ? cart.items.length : 0);
          if (cart.items.length) {
            $cartCountItem
              .closest(".header__links-link_cart")
              .addClass("header__links-link_cart_active");
          } else {
            $cartCountItem
              .closest(".header__links-link_cart")
              .removeClass("header__links-link_cart_active");
          }
        },
      });
    });

    $(".catalog-addToBasket-form__btn").on("click", function (e) {
      e.preventDefault();
      try {
        yaCounter24600053.reachGoal("click-catalog-addToBasket-btn");
      } catch { }
      let $thicBtn = $(this);
      let $form = $(this).closest("form");
      let variant_id = +$form.find('[name="variant_id"]').val();
      let quantity = +$form.find('[name="quantity"]').val();
      let $cartCountItem = $(".header__cart-count");
      $cartCountItem
        .closest(".header__links-link_cart")
        .addClass("header__links-link_cart_active");
      $.post("/cart_items.json", {
        variant_id: variant_id,
        quantity: quantity,
      }).done(function (cart) {
        $cartCountItem.text(cart.items.length ? cart.items.length : 0);
        console.log(cart);
        $form.addClass("catalog-addToBasket-form_added");
      });
    });
  })();
});

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById('jquery-script').addEventListener("load", function() {
  document.getElementById("jquery-script").onload = (function () {
    $(".list-item_otdel[value]").on("click", function (e) {
      if ($(this).hasClass("active")) return;
      console.log("triggered address changing");
      /*$('.list-item_otdel[value]').toggleClass('active');*/ localStorage.setItem(
        "shop",
        $(this).attr("value")
      );
      changeShop();
      $(".modal-content_changecitypopup .close").click();
    });
    //$(document).ready(function(){
    function changeShop() {
      console.log("11111");
      localStorage.setItem("shop_1_adress", "ул. Солнечная Поляна, 81");
      localStorage.setItem("shop_2_adress", "ул. Чкалова, 247Б");
      //let shop = sessionStorage.getItem('shop')
      let shop = localStorage.getItem("shop");
      let checkboxList = Array.from($(".shop_type"));
      let forms = Array.from($(".changeShopForm"));
      let phone_1 = `+7 (3852) 59-02-58`;
      let phone_2 = `+7 (3852) 59-01-29`;
      let whatsappTel_1_new = `+7 (913) 024 05 97`;
      let whatsappTel_2_new = `+7 (913) 024 05 97`;
      let whatsappTel_1 = `+79130240597`;
      let whatsappTel_2 = `+79130240597`;
      let whatsapp = $(".whatsappTel");
      let whatsapp_new = $(".whatsappTel-new");
      let siteTelBlock = $(".siteTelBlock");
      $(".list-item_otdel[value]").each(function (i) {
        $(this).removeClass("active");
        if ($(this).attr("value") == shop) {
          $(this).addClass("active");
        }
      });
      whatsapp.html(shop === "shop_2" ? whatsappTel_2 : whatsappTel_1);
      whatsapp_new.html(
        shop === "shop_2" ? whatsappTel_2_new : whatsappTel_1_new
      );
      if (shop === "shop_2") {
        $(".phone_2").css({ display: "inherit" });
        $(".phone_2.modal-article-call__btn").css({ display: "flex" });
        $(".phone_1").css({ display: "none" });
      } else if (shop === "shop_1") {
        $(".phone_1").css({ display: "inherit" });
        $(".phone_1.modal-article-call__btn").css({ display: "flex" });
        $(".phone_2").css({ display: "none" });
      }
      checkboxList.map((item) => {
        if ($(item).val() === shop) {
          $(item).prop("checked", true);
        }
      });
      forms.map((elem) => {
        if (shop === "shop_2" && $(elem).data("callibri_form_name")) {
          $(elem).attr(
            "data-callibri_form_name",
            `${$(elem)
              .data("callibri_form_name")
              .replace("_m1", "")
              .replace("_m2", "")
              .replace("_pd", "")}_m2`
          );
        } else if (
          shop === "shop_1" &&
          $(elem).data("callibri_form_name")
        ) {
          $(elem).attr(
            "data-callibri_form_name",
            `${$(elem)
              .data("callibri_form_name")
              .replace("_m1", "")
              .replace("_m2", "")
              .replace("_pd", "")}_m1`
          );
        }
      });
      if (shop === "shop_1" || shop === "shop_2") {
        $(".header__city-select").val(shop);
      } else {
        $(".header__city-select").val("shop_1");
      }
    } // if(!localStorage.getItem('randomUser') && !localStorage.getItem('shop')){
    //if(!sessionStorage.getItem('shop')){
    if (!localStorage.getItem("shop")) {
      let otdelName = null;
      let percent = Math.floor(Math.random() * 100);
      // localStorage.setItem('randomUser', percent);
      console.log(
        "Выпало число: " +
        percent +
        ". Если оно меньше 50, будет ул. Солнечная Поляна, 81"
      );
      if (percent <= +50) {
        otdelName = `ул. Солнечная Поляна, 81`;
        //sessionStorage.setItem('shop','shop_1');
        localStorage.setItem("shop", "shop_1");
        console.log("Ваш отдел по случайной вероятности:", otdelName);
      } else {
        otdelName = `ул. Чкалова, 247Б`;
        //sessionStorage.setItem('shop','shop_2');
        localStorage.setItem("shop", "shop_2");
        console.log("Ваш отдел по случайной вероятности:", otdelName);
      }
    }
    // console.log(localStorage.getItem('randomUser'));
    // console.log(sessionStorage.getItem('shop'));
    console.log(localStorage.getItem("shop"));
    // КОНЕЦ 26.08.21 (ГД-НСК) ЛИДЫ.НОРМА.08 = Настроить приоритет магазина через % в блоке настроек функционала сайта

    $(".lastShopChoose").on("click", function () {
      //sessionStorage.setItem('shop', $(this).data('shop'))
      localStorage.setItem("shop", $(this).data("shop"));
      changeShop();
      $(".chooseCitySmall").toggleClass("active");
      $(`#${$(".chooseCitySmall").data("form")}`).submit();
    });
    //if(sessionStorage.getItem('shop')) {
    if (localStorage.getItem("shop")) {
      changeShop();
    }
    // if(!localStorage.getItem('shop')){
    //if(true){// else {
    //   changeShop()
    // }
    $(".city-select__item").on("click", function (e) {
      if ($(this).find(".shop_type:checked").val()) {
        //sessionStorage.setItem('shop',$(this).find('.shop_type:checked').val())
        localStorage.setItem(
          "shop",
          $(this).find(".shop_type:checked").val()
        );
        console.log($(this).find(".shop_type:checked").val());
        changeShop();
      }
    });
    $("#whatsapp1").on("click", function (e) {
      //sessionStorage.setItem('shop','shop_1')
      localStorage.setItem("shop", "shop_1");
      changeShop();
    });
    $("#whatsapp2").on("click", function (e) {
      //sessionStorage.setItem('shop','shop_2')
      localStorage.setItem("shop", "shop_2");
      changeShop();
    });
    $(".header__city-select").on("change", function (e) {
      console.log("231231412");
      //sessionStorage.setItem('shop',$(this).val())
      localStorage.setItem("shop", $(this).val());
      changeShop();
    });
    //})
  })();
});

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById('jquery-script').addEventListener("load", function() {
  document.getElementById("jquery-script").onload = (function () {
    //$(document).ready(function(){
    //let time = Date.now()
    if (localStorage.getItem("enter") != "true") {
      //localStorage.setItem('enterTime', time);
      localStorage.setItem("enter", "true");
      localStorage.setItem("doorsCount", 0);
    }
    $(
      "#feedbackDoorCounter, #feedbackSummDoorCounter, #fullpriceDoorCounter, #feedbackZvonokDoorCounter, .mk-size-input"
    ).change(function () {
      let doorsFooter = $(this).val();
      if (doorsFooter > 3) {
        yaCounter24600053.reachGoal("dveri-3-plus");
        yaCounter24600053.reachGoal("vybor-kolichestvo-dverey");
        return true;
      } else {
        yaCounter24600053.reachGoal("vybor-kolichestvo-dverey");
        return true;
      }
    });
    $(".shop-tabsList__item").on("click", function () {
      $(".shop-tabsList__item").removeClass("active");
      $(".shop-tab").removeClass("active");
      $(this).addClass("active");
      if ($(this).data("shop") === "shop_1") {
        $(".shop-tab_1").addClass("active");
      } else if ($(this).data("shop") === "shop_2") {
        $(".shop-tab_2").addClass("active");
      }
    });
    $(".contacts__proezd_shop-1").on("click", function () {
      $(".shop-tabsList__item").removeClass("active");
      $(".shop-tab").removeClass("active");
      $(".shop-tabsList__item_shop_1").addClass("active");
      $(".shop-tab_1").addClass("active");
      $("html, body").animate(
        {
          scrollTop: $(".page__slider-shop-1-proezd").offset().top - 150,
        },
        2000
      );
    });
    $(".contacts__proezd_shop-2").on("click", function () {
      $(".shop-tabsList__item").removeClass("active");
      $(".shop-tab").removeClass("active");
      $(".shop-tabsList__item_shop_2").addClass("active");
      $(".shop-tab_2").addClass("active");
      $("html, body").animate(
        {
          scrollTop: $(".page__slider-shop-2-proezd").offset().top - 150,
        },
        2000
      );
    });
    $(".contacts__photo_shop-1").on("click", function () {
      $(".shop-tabsList__item").removeClass("active");
      $(".shop-tab").removeClass("active");
      $(".shop-tabsList__item_shop_1").addClass("active");
      $(".shop-tab_1").addClass("active");
      $("html, body").animate(
        { scrollTop: $(".page__slider-shop-1-photo").offset().top - 150 },
        2000
      );
    });
    $(".contacts__photo_shop-2").on("click", function () {
      $(".shop-tabsList__item").removeClass("active");
      $(".shop-tab").removeClass("active");
      $(".shop-tabsList__item_shop_2").addClass("active");
      $(".shop-tab_2").addClass("active");
      $("html, body").animate(
        { scrollTop: $(".page__slider-shop-2-photo").offset().top - 150 },
        2000
      );
    });
    //})
    // collection-title__price
    $(".products-count").on("click", function () {
      if ($('select[name="order"] [value="price"]').prop("selected"))
        return;
      $('select[name="order"] [value="price"]')
        .prop("selected", true)
        .trigger("change");
      return false;
    });
  })();
});

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById('jquery-script').addEventListener("load", function() {
  // document.getElementById('jquery-script').onload = function() {
  let popupPolicy = document.getElementById("popup");
  //$(document).ready(function() {
  if (localStorage.getItem("popState") != "shown") {
    let popupPolicyTimeout = setTimeout(function (e) {
      popupPolicy.classList.add("active");
    }, 1000);
    //$("#popup").delay(1000).fadeIn();
  }
  document
    .getElementById("popupClose")
    .addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.setItem("popState", "shown");
      popupPolicy.classList.remove("active");
      //$('#popup').fadeOut();
    });
  document
    .getElementById("popupMore")
    .addEventListener("click", function (e) {
      localStorage.setItem("popState", "shown");
      popupPolicy.classList.remove("active");
      //$('#popup').fadeOut();
    });
  //});
  // }();
});

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById('jquery-script').addEventListener("load", function() {
  document.getElementById("jquery-script").onload = (function () {
    //$(document).ready(function () {
    if ($(".aside-banner").length > 0) {
      let e = document.querySelectorAll(".aside-banner"),
        o = e.length,
        i = Math.floor(Math.random() * Math.floor(o));
      for (let n = 0; n < o; n++)
        i != n &&
          ((e[n].style.display = "none"),
            e[n].classList.remove("aside-banner"));
      if ($(".collection").length > 0 && $("aside").length > 0) {
        $("aside").offset().top + $("aside").height() + 100 <
          $(".collection").offset().top + $(".collection").height()
          ? (console.log("start scrolling"),
            setTimeout(function () {
              let e = $(".aside-banner").offset().top,
                o = $(".aside-banner").find("img").length
                  ? $(".aside-banner").find("img").offset().left
                  : $(".aside-banner")
                    .find(".aside__consult")
                    .offset().left,
                i =
                  $(".collection").offset().top +
                  $(".collection").height();
              $(window).scrollTop() + 65 > e &&
                $(window).scrollTop() <
                i - $(".aside-banner").height() - 65
                ? $(".aside-banner").css({
                  position: "fixed",
                  top: "65px",
                  left: o,
                })
                : $(window).scrollTop() >
                  i - $(".aside-banner").height() - 65
                  ? $(".aside-banner").css({
                    position: "absolute",
                    top:
                      i -
                      $(".aside-banner").height() -
                      $("aside").offset().top -
                      100 +
                      "px",
                    left: "56.25px",
                  })
                  : $(".aside-banner").css("position", "static"),
                $(window).scroll(function () {
                  $(window).scrollTop() + 65 > e &&
                    $(window).scrollTop() <
                    i - $(".aside-banner").height() - 65
                    ? $(".aside-banner").css({
                      position: "fixed",
                      top: "65px",
                      left: o,
                    })
                    : $(window).scrollTop() >
                      i - $(".aside-banner").height() - 65
                      ? $(".aside-banner").css({
                        position: "absolute",
                        top:
                          i -
                          $(".aside-banner").height() -
                          $("aside").offset().top +
                          "px",
                        left: "56.25px",
                      })
                      : $(".aside-banner").css("position", "static");
                });
            }, 5e3))
          : $(".aside-banner").css({ marginBottom: "20px" });
      }
    }
    //});
  })();
});

function runLazyLoad2() {
  console.log("lazyload.min.js running");
  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazyload",
    threshold: 500,
  });
  window.myLazyLoad = myLazyLoad;
}
function runLazyLoad() {
  console.log("script lazyload.min.js loaded");
  if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", runLazyLoad2);
  } else {
    runLazyLoad2();
  }
}

function successKladr(e) {
  console.log("008");
  if (e) {
    let isKrasnodar = false;
    let isNeopred = false;
    let isMSK = false;
    let isDirectEntry = false;
    let isSearchEntry = false;
    let isAdsEntry = false;
    let isMSKDirectMain = false;
    let notFirstTimeCheck = localStorage.getItem("firstTimeCheck");
    const url = new URL(window.location.href);
    const urlSearchParams = url.searchParams;
    if (
      urlSearchParams.has("utm_source") ||
      urlSearchParams.has("utm_medium") ||
      urlSearchParams.has("utm_campaign") ||
      urlSearchParams.has("utm_term") ||
      urlSearchParams.has("utm_content")
    ) {
      isAdsEntry = true;
    } else if (
      document.referrer === "https://ya.ru/" ||
      document.referrer === "https://yandex.ru/" ||
      document.referrer === "https://www.ya.ru/" ||
      document.referrer === "https://www.yandex.ru/" ||
      document.referrer === "https://www.yandex.com/" ||
      document.referrer === "https://yandex.com/"
    ) {
      /* || document.referrer === 'https://www.google.com/' || document.referrer === 'https://www.google.ru/' */
      isSearchEntry = true;
    }
    if (document.referrer === "" || !document.referrer) {
      isDirectEntry = true;
    }
    if (
      e.country == "RU" &&
      (e.region === undefined ||
        e.region === "undefined" ||
        e.region === null ||
        e.region === "null" ||
        !e.region)
    ) {
      isNeopred = true;
    }
    if (
      e.city == "Москва" ||
      e.city == "г Москва" ||
      e.region == "Москва" ||
      e.region == "г Москва" ||
      e.region == "Московская область" ||
      e.region == "Московская обл."
    ) {
      isMSK = true;
    }
    if (isKrasnodar) {
      try {
      } catch (e) {
        console.log("!!! ОШИБКА !!!");
      }
    } else if (isMSKDirectMain) {
      try {
      } catch (e) {
        console.log("!!! ОШИБКА !!!");
      }
    } else {
      if (
        !notFirstTimeCheck &&
        isMSK &&
        (spamReferrer || isDirectEntry)
      ) {
        localStorage.setItem("firstTimeCheck", "no");
        window.location.replace("https://moskva.gigant-dveri.ru/");
      } else {
        loadYandexMetrika();
      }
    }
  } else {
    loadYandexMetrika();
  }
}
var scr = document.createElement("script");
scr.src =
  "//kladr.insales.ru/current_location.json?callback=successKladr";
document.head.appendChild(scr);

var loadedMetrica = false;
function loadYandexMetrika() {
  "use strict";
  var timerMetricaId;
  if (navigator.userAgent.indexOf("YandexMetrika") > -1) {
    loadMetrica();
  } else {
    window.addEventListener("scroll", loadFallback, { passive: true });
    window.addEventListener("touchstart", loadFallback);
    document.addEventListener("mouseenter", loadFallback);
    document.addEventListener("click", loadFallback);
    //document.addEventListener( 'DOMContentLoaded', loadFallback2 );
  }
  function loadFallback() {
    timerMetricaId = setTimeout(loadMetrica, 100);
  }
  function loadFallback2() {
    timerMetricaId = setTimeout(loadMetrica, 1000);
  }
  function loadMetrica(e) {
    if (e && e.type) {
      console.log(e.type);
    } else {
      console.log("DOMContentLoaded");
    }
    if (loadedMetrica) {
      return;
    }
    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      (k = e.createElement(t)),
        (a = e.getElementsByTagName(t)[0]),
        (k.async = 1),
        (k.src = r),
        a.parentNode.insertBefore(k, a);
    })(
      window,
      document,
      "script",
      "https://mc.yandex.ru/metrika/tag.js",
      "ym"
    );
    ym(24600053, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: false,
      trackHash: true,
      ecommerce: "dataLayer",
    });
    loadedMetrica = true;
    if (timerMetricaId) clearTimeout(timerMetricaId);
    window.removeEventListener("scroll", loadFallback);
    window.removeEventListener("touchstart", loadFallback);
    document.removeEventListener("mouseenter", loadFallback);
    document.removeEventListener("click", loadFallback);
    //document.removeEventListener( 'DOMContentLoaded', loadFallback2 );
  }
}

let refURL = document.referrer
  .replace("https://", "")
  .replace("http://", "")
  .replace("/", "");
let urlString =
  ",uralweb.ru,spravportal.ru,100biografiy.ru,2kls.ru,autotopik.ru,givotniymir.ru,kp.ru,mebeldok.com,megacritic.ru,shkolazhizni.ru,soyuz.ru,ventkam.ru,zaycev.fm,9111.ru,chirik.info,darwin2.ru,etogel.ru,fontanka.ru,food.ru,instaprofi.ru,myavtobus.ru,necrology.com,online-maps.pro,otzywy.com,shopogolikam.ru,shtorydekor.ru,tutwebcam.ru,zknrf.ru,101-magazin.ru,activizm.net,ayaznal.com,cenyavto.com,cknow.ru,classicalmusicnews.ru,dacha.help,euroki.org,felomena.com,fitnessinf.ru,forum-msk.info,geekhard.ru,glaz.tv,hochusvalit.com,inrin.net,it-doc.info,krasivosti.pro,m.news.rambler.ru,magazinnoff.ru,moscowmap.ru,moskva.jobvacancy.pro,namebook.club,odin-kvd.ru,osnmedia.ru,pasportstols.ru,peterburg2.ru,playcheats.net,posudaguide.ru,propaskhu.ru,psychologies.ru,rossianka-tur.ru,rybakexpert.ru,sportdisain.ru,stroitelstvo.expert,televizorus.com,tiowiliam.ru,tourister.ru,traumlibrary.ru,vokrugsveta.ru,yoplace.ru,1tv.ru,63.ru,afmen.online,alimero.ru,all4kiddy.ru,avtodispetcher.ru,beetles.puzzle.solitaire,bikeswiki.ru,bizspravka.org,bonuskarta.com,bryansktoday.ru,comss.ru,coptersworld.ru,cutur.ru,doramiru.com,euro-football.ru,euromag.ru,fish-haus.ru,fitness-star74.ru,forinsta.ru,ftimes.ru,gobuygo.ru,grandkulinar.ru,gtrkamur.ru,guitarchords.ru,hobobo.ru,home-gid.com,it-tehnik.ru,klublady.ru,krasnodar.jsprav.ru,kupuk.net,ladyspecial.ru,lapkins.ru,lookastic.ru,mapich.com,markakachestva.ru,mir-vuzov.ru,moefermerstvo.ru,moi-raskraski.ru,moscow-metro.ru,mykaleidoscope.ru,nastroyvse.ru,nomadcar.ru,orsha.isfix.by,oshkolah.ru,otoba.ru,partygorsk.com,pricep-vlg.ru,proexpedition.ru,prostanki.com,quvonch.com,remontka.pro,reshalka.com,rockstargames.su,rost-znamenitostey.org,rostrakt.ru,russianogorod.ru,saytpozitiva.ru,serial2go.com,simpferopol.miltor.ru,slovaronline.com,sportgyms.ru,spravkataxi.ru,studopedia.ru,talismanikamni.ru,tula.spravka.city,tvzvezda.ru,vkusno-i-prosto.ru,vodatyt.ru,whatsappman.info,wow-helper.com,yaomtv.ru,zdorovye-volosi.ru,кодкраски.рф,24tr.ru,afk-arena.com,akaksdelat.com,akrasnodar.com,aldebaran.ru,all-the-books.ru,antalyada.ru,audiohunter.ru,bank.uz,belta.by,bibimot.ru,bukin.tv,busfan.ru,cadelta.ru,carro.su,carsharing.wiki,cataloged.ru,chelseanews.ru,citaty.info,cluborlando.ru,com.easybrain.art.puzzle,cs-devs.ru,dayname.ru,dekormyhome.ru,doctorfeel.net,download-master.pro,e-katalogo.ru,edimdoma.ru,eg.ru,elot.ru,englishearly.ru,englishnotes.ru,epolymer.ru,espec.ws,estrada4u.ru,f1comp.ru,fix-my-car.ru,frigato.ru,gdz.moda,ginfo.ru,guildwars-2.ru,gulkevichi.com,heaclub.ru,homius.ru,hotplayer.ru,infotables.ru,joshop.ru,justmedia.ru,kakoysegodnyaprazdnik.ru,kareliaboard.ru,katalog-aktsij.ru,kgdic.ru,knigi-torrent.com,knigism.online,konfiskator.com,krasnodar.business,kykyryzo.ru,lasus.ru,legkovmeste.ru,libking.ru,lighting-sale.ru,lipeck.jobvacancy.pro,livebir.ru,loppipoppi.dominoes,lovereport.ru,m.voronezhnews.ru,mangaonelove.fun,market.cloudys.ru,mblx.ru,memepedia.ru,metarankings.ru,milcult.ru,militaryarms.ru,mirvinograda.ru,mocot.ru,moscow.gobuygo.ru,mpsh.ru,muzh-zhena.ru,muzinstru.ru,my-photocamera.ru,n-katalog.ru,naavtotrasse.ru,nadomkrat.ru,name-index.ru,nashsad39.ru,nekto.me,neolove.ru,newizv.ru,news.sportbox.ru,newsbash.ru,nickgen.ru,no-pest.ru,norobot.ru,nottka.com,novosibirsk.big-book-relax.ru,novozybkov.su,ntv.ru,okeygeek.ru,oknaevrovid.ru,okulys.ru,onli-vk-list.com,online-knigi.com.ua,oreshkaonline.ru,oventilyacii.ru,pan.ru,parents.ru,pay-day.ru,pc-consultant.ru,pcradio.ru,petpop.cc,pod-potol.com,pooha.net,pop-mma.com,povarenok.ru,protkan.com,regioninformburo.ru,restate.ru,ria.ru,rsute.ru,ru.investing.com,rusbiathlon.ru,russkaja-skazka.ru,russkii-serial.net,russkiypro.ru,say7.info,scm-gid.ru,sgushhenka.ru,shop-tv-goods.ru,sib.fm,skolkos.ru,sovet-ingenera.com,sovetclub.ru,spec18.ru,spinbait.ru,spravochnikov.ru,standoff-2-private.com,stopclimax.ru,streamersbase.ru,stroyfora.ru,studzona.com,svjazat.ru,talismanes.ru,taxitelephone.ru,tcshops.ru,tehnolev.ru,tgorlovka.com,tiktokk.ru,tkaninfo.ru,tlgbot.ru,topwar.ru,traktory-bu.ru,trustorg.com,tvoya-biografia.ru,tvspb.ru,vanarti.ru,vaz-russia.com,vev.ru,videotutor-rusyaz.ru,vilkin.pro,vkuso.ru,vokrug.tv,vremya-sovetov.ru,vse-pesni.com,wifigid.ru,wordparts.ru,xchip.ru,xgamers.ru,zazakupkami.ru,zvezdnaya-masterskaya.ru,поискслов.рф,портал-нмо.рф,фк-лого.рф,1-kak.ru,1000.menu,1lag.com,1stalin.ru,360tv.ru,3akkorda.net,4x4photo.ru,59.ru,7info.ru,845-93.ru,a777aa77.ru,academic.ru,afisha.rambler.ru,akkords.pro,akxanyiskoe.ru,akzept.ru,alcozavr.com,alishops.ru,allcarz.ru,allrus.business,alpha-ag.ru,amiel.club,androsound.ru,animals.moe-online.ru,argumenti.ru,arsenal-info.ru,artyhomes.ru,audit-it.ru,auto.ru,autompv.ru,autovsalone.ru,avto-russia.ru,avtonovostidnya.ru,aznaetelivy.ru,azti.ru,baikal24.ru,bankrotof.net,bazafasada.ru,bellabelly.ru,big-book-city.ru,bike-all.ru,bobruisk.ru,bobsoccer.ru,btc-krany.ru,bzhuk.ru,calc.ru,carexpert.ru,carsharing-spb.ru,chitalkino.ru,chithub.ru,cloudys.ru,colodu.club,com.fugo.wowguru,com.music.game.dancing.hair.beat.race,companium.ru,contdict.ru,cosmo.ru,dachnayazhizn.info,daily-girls.ru,dailyhoro.ru,designwiki.ru,doberemsya.net,dogexpert.ru,dohodinet.ru,dom-i-remont.info,domunit.ru,domverhdnom.ru,doska3.ru,drevlit.ru,dvizhka.ru,eadaily.com,egeguru.com,ehto.ru,elledecoration.ru,employment-center.ru,erpstat.ru,eurosamodelki.ru,expert-kachestva.ru,expertpovolosam.com,ezomir.net,faqkontakt.ru,fb.ru,fbm.ru,fictionbook.ru,film.ru,fithacker.ru,flomaster.top,floristics.info,football24.ru,forum.say7.info,free.vpn.proxy.secure,funart.pro,furniturelab.ru,garazhmechty.ru,gdeprosto.ru,geotree.ru,get-tune.info,glamours.name,goodhouse.ru,goroskop365.ru,grandars.ru,grazhdaninu.com,greatsims.ru,greensotka.ru,hackware.ru,honesttop.ru,housechief.ru,huntland.ru,iakutsk.spravker.ru,iframe-toloka.com,igraz.ru,in-contri.ru,instagrammi.ru,instanko.ru,interieristka.ru,irecommend.ru,itexts.net,its-city.ru,jaroslavl.firmsbase.ru,jivotniy.com,kakprosto.ru,kangen.ru,kapuletta.tourister.ru,kartaslov.ru,keysprog.ru,kniga-online.com,knigavuhe.org,knigiaudio.ru,knizhka.org,koffkindom.ru,kogda-data-vyhoda.ru,kolesa.ru,kostitv.ru,krasnodar.spravker.ru,krasotka.cc,ktk.kz,kupidonia.ru,lady-day.ru,ladybug-superkot.ru,lampaexpert.ru,lastday.club,ledibug.ru,lenzoo.ru,letsgophotos.ru,lib-li.com,libcat.ru,licard-lukoil.ru,lifeforgame.ru,lightaudio.ru,liski.life,litrekon.ru,loganrenault.ru,lubercy.ruspravochnik.com,luun.ru,magazinmayak.ru,mainavi.ru,makplace.ru,mapage.ru,marieclaire.ru,maximonline.ru,medaboutme-ru.turbopages.org,meteovesti.ru,miridei.com,mob-mobile.ru,moftop.ru,money-budget.ru,mos-holidays.ru,most-beauty.ru,msk.isfix.ru,muzictext.ru,muzmurka.com,muzrecord.com,my-dict.ru,my-rasskazhem.ru,mydecor.ru,myspace38.ru,namtv.ru,narule.ru,naseti.com,ne-beri.ru,net.zaycev.music.app,next-season.ru,nibbl.ru,o-krohe.ru,ohfashion.ru,onli-vk.ru,openbusiness.ru,opricheske.com,orgzz.ru,otdihvrossii.ru,otdix-v-tyrcii.ru,otkritkivip.ru,otziv.top,owa.domostr0y.ru,page.ligaudio.ru,papik.pro,paulani.com,pchet.ru,pdalife.to,perm.110km.ru,petanque.site,petobzor.com,plane-sale.com,playmaker24.ru,plitkahelp.com,pobeda.tv,poiski.pro,porusskomu.net,postupi.online,posudomoiki.vyborkuhni.ru,pravda.ru,prazdnik24.online,present5.com,pressa.tv,pro-instrument.com,pro-investing.ru,proantishum.ru,probki.today,produhovku.ru,profazu.ru,prokrasotu.org,psk-group.su,ptoday.ru,qazsporttv.kz,rabota-ipoisk.ru,rambler.ru,ratingfirmporemontu.ru,re-phone.ru,referatikz.com,remontautomobilya.ru,remote-job.ru,retro-dress.ru,ru-meteo.com,rudnyi.spravker.ru,rus.bashgazet.ru,rusadmin.biz,rusfermer.net,rutor.org.ru,saint-petersburg.big-book-avto.ru,sakhalin.name,samara.gdeservisy.ru,santehnikportal.ru,serial-mentalist.ru,serialochka.ru,sevenbuy.ru,sharlib.com,shopogolik.club,shopozona.ru,simplenglish.ru,skidkaonline.ru,skolko.su,slova-razbor.ru,softrare.space,sovmestimi.ru,sportkp.ru,sprav.co,sravnismart.ru,starline93.ru,statusycitaty.ru,stiralnihremont.ru,stopvreditel.ru,strana-sovetov.com,stroy-calc.ru,svetlogorsk.spravka.city,svpressa.ru,synonyms.su,tabakur77.ru,tabsgame.ru,taoberry.ru,tasksall.ru,tehno.expert,text.ru,tgrm.su,timeskaner.ru,toca-boca-world.ru,toikb72.ru,tokyostreet.ru,travel.rambler.ru,turbazy.ru,turvopros.com,twitchpedia.ru,uchiyaziki.ru,udachnayadacha.ru,unit-car.com,uplify.link,uzelok.su,vannaitualet.ru,vashipitomcy.ru,vbassejn.ru,vellisa.ru,vericon.ru,vkfull.ru,vksos.com,vologda-poisk.ru,vplate.ru,vsememy.ru,vseomtz.ru,vsevkulinary.ru,water-armature.ru,web-nomad.ru,wikiway.com,wisegeek.ru,women365.ru,wotpack.ru,ya-taxi.su,yummybook.ru,yuvelirnyj.ru,zensovet-ru.turbopages.org,znachenie-familii.com,zvonook.ru,zvukipro.com,технология-бизнеса.рф,100dorog.ru,110km.ru,123film.pro,1beautynews.ru,24.kz,24score.pro,2pelikana.ru,4ege.ru,4gameground.ru,4systems.ru,500book.ru,5ka-sale.ru,72.ru,7sotok.com,abhaziapro.ru,adme.media,aekaterinburg.com,aforisimo.ru,afoto24.ru,agronom.expert,agronom.guru,akket.com,akniga.org,akonit-med.ru,aligid.ru,all-catalogs.ru,allbelarus.business,alldaily.ru,allmmorpg.ru,allposlovicy.ru,allremont59.ru,allya.ru,amur.pro,analogi.net,androidinsider.ru,androidlime.ru,androidmob.ru,androidnik.ru,animego.online,armeniagid.com,assistentus.ru,astrovedika.ru,asx-club.su,atcars.ru,autoabra.com,autobryansk.info,autoiwc.ru,autorn.ru,av.by,ava-stroy.ru,avtomechanic.ru,avtopribambas.com,baggage-expert.ru,bebeshka.info,betonov.com,bez-makiyazha.ru,big-book-avto.ru,bikepedia.ru,blamper.ru,boilervdom.ru,bolshoyulov.ru,bolshoyvopros.ru,bouw.ru,bugaga.ru,bycars.ru,bygaga.com.ua,catfishes.ru,centr-zanyatosti-naseleniya.ru,chelseablues.ru,chita.ru,chromiumm.com,chvetochki.ru,city-address.ru,cleany.biz,club-romance.ru,coderlessons.com,com.freevpnplanet,com.kpl.sky.cingtis.weather,comboplayer.ru,ctnews.ru,cubiq.ru,cud.news,cyberpedia.su,daningrad.ru,dastiham.ru,day.az,daz3d.ru,detskie-multiki.ru,dfncfg.ru,discountscards.ru,disotzov.ru,dispetchertaxi.ru,dizainexpert.ru,dni24.com,domashnij-zapovednik.com,donetsk.isfirm.ru,dorognoe.ru,dostavka-produktov-na-domu.ru,downradar.ru,drain-sport.com,duin.ru,dysonmarket.ru,e-katalog.su,edagou.ru,ege314.ru,eldomo.ru,elektrichkoy.net,ellegirl.ru,enginehack.ru,eventcatalog.ru,exam-prep.ru,federal.tv,fermers.ru,fermerstyle.ru,fingeniy.com,firms.city,firmsbase.ru,fishki.net,fix-ccc.ru,flatinfo.ru,flibusta.club,flibusta.su,fobosworld.ru,forsage.by,foto-ram.ru,foto-skazka.ru,fox-guide.ru,fungicides.ru,gadgetok.ru,gadgetshelp.com,gafki.ru,games-instel.ru,garderobus.ru,gdeotziv.ru,gdp3podolsk.ru,gdzkote.ru,gdzotvet.ru,global-weather.ru,globalmsk.ru,gogov.ru,gorodina.ru,gospravo.com,grammzolota.ru,gribnik.info,halvita.ru,handhand.ru,hitech-online.ru,huaweidevices.ru,hypegamenews.ru,idealsad.com,igry-android.net,infourok.ru,infox.sg,iodroid.net,ioedu.ru,ipotekaved.ru,irongamers.ru,jobssjob.com,kacrb.ru,kakchistim.ru,kaksdelatsvoimirukami.ru,kalendar-365.ru,karaopa2.ru,kartinkin.net,kaspyinfo.ru,katalog-eldorado.ru,kaz.otzywy.com,kg-portal.ru,kinorius.com,kinoscan.com,kisapes.ru,kleiexpert.ru,klimat-56.ru,kogda-tv.ru,kogda.pro,krasavica.info,kraska.guru,krasnodar.ginfo.ru,krasnoyarsk.ginfo.ru,krot.info,kto-chto-gde.ru,kto-zvonili.com,ktonanovenkogo.ru,kulinarnayakarusel.ru,kuponika.ru,lektsia.com,leninsk-kuznetskiy.magazinmayak.ru,libbox.ru,libreed.ru,life.ru,lifehacker.ru,lifemotivation.online,linezolid.ru,linguabooster.com,linkbaza.com,lipetsk.proshoper.ru,list-of-movies.ru,literaguru.ru,literoved.ru,longride.ru,looking-4.me,lostarmour.info,lubimuedoramy.com,lucky-numbers.ru,m.7days.ru,m.cyber.sports.ru,m.e1.ru,m.kp.ru,m.nn.ru,m.rambler.ru,m.ru.investing.com,m.sluhai.info,m.vkirove.ru,m24.ru,malinkakat.ru,manga-club.ru,maslocar.com,masteravannoy.ru,matchtv.ru,meddoclab.ru,mezhdveri.ru,miiledi.ru,min2win.ru,mir-knigi.online,mirkvartir.ru,mixnews.lv,mnogoblock.ru,modernplace.ru,modnaya-krasivaya.ru,moe-online.ru,mogilev.bankibel.by,mojcar.ru,moluch.ru,moredoram.ru,morf-razbor.ru,moskva1.jsprav.ru,moyaspravka.ru,mp3mn.net,msk1.ru,multi-mama.ru,musictouch.ru,mvclip.ru,mvexpo.ru,my-infant.com,mycary.ru,mydiv.net,myseldon.com,na-dache.pro,na-dostupnom.ru,nalog.io,naobzorah.ru,nashiimena.ru,ndk.kz,news2star.ru,newxboxone.ru,nizhnij-novgorod.jsprav.ru,nkclinica.ru,novosibirsk.jsprav.ru,ns-catalog.ru,o-samare.ru,obrmos.ru,obuv.expert,offshoreview.eu,ogorod.ru,ohotniki.ru,oir.mobi,okdk.ru,okeydrive.ru,okigo.ru,ollimpia.ru,onebigshop.ru,onlayn-radio.ru,online-buhuchet.ru,onrealt.ru,ontvtime.ru,oozoon.ru,open.kg,operator-help.ru,opotlivosti.ru,orghost.ru,orgsprav.com,otvet5.com,otzov-mf.ru,otzovik.com,otzyv.pro,otzyvplant.ru,ovideo.ru,ozornik.net,ped-kopilka.ru,perevod-pesen.com,pershingtamilla.ru,pibig.info,ponylike.ru,portalonline.ru,portalvirtualreality.ru,postsovet.ru,posuda-expert.ru,povolje.bizspravka.org,pricheska-makiyazh.ru-best.com,profinance.ru,programmy-dlya-android.ru,proizhs.ru,promodoc.ru,protimevape.ru,protrud.com,psytests.org,punkty-priema.ru,qnx.org.ru,rad-star.ru,rap.ru,rbc.ru,redmap.ru,remo-blog.ru,rems-info.ru,resizes.ru,rg.ru,ribxoz.ru,rollershoes.ru,rosbalt.ru,rostov-na-donu.big-book-edu.ru,ru-an.info,ru.sports.app,rubrikator.org,rudorogi.ru,runarium.ru,ruselectronic.com,russianteleweek.ru,russkiy-literatura.ru,ruvuz.ru,rvb.ru,rvuz.ru,rxtv.ru,salony-kracoty.ru,samelectrik.ru,samogonman.com,samyiluchshiy.ru,sankt-peterburg.gde-sto.ru,sberometer.ru,schooldistance.ru,sci-fi-news.ru,sdelaicomp.ru,sdelaytortik.ru,selobank.ru,semyadeti.ru,sergoot.ru,shareslide.ru,shkola-krasoty.com,skidka-dr.ru,smart-planets.ru,snob.ru,soboleznovaniya.ru,spark-welding.ru,spisok-luchshih.ru,sport.ru,sport24.ru,sportishka.com,spr.ru,spravka.city,spravka.ru,stihipoeta.ru,studopedia.su,sunrem.ru,sysadmins.ru,taksirussian.ru,tambov.spravka.city,tattoo-mall.ru,tehnopanorama.ru,tehnotech.com,telemetr.me,televizortop.ru,terma-istochnik.ru,thundebird.ru,tkaner.com,tkanix.info,tlgrm.ru,topmsg.ru,topnews.ru,toppeoples.ru,totadres.ru,toys-4kids.ru,translate.ru,trudko.ru,tuday.ru,tutknow.ru,tvoi-kumiry.ru,uchastniki.com,uchebniksonline.ru,ufatime.ru,uhd.name,univer-old.su,uzmediaa.net,vdresse.ru,veseloeradio.ru,vestaz.ru,vesti.kz,vesti.ru,vipidei.com,vkusologia.ru,voditeliauto.ru,volt-bikes.ru,vse-testi.com,vsegda-pomnim.com,vsekidki.ru,vseokrovle.com,vuzlit.com,wafelnica.ru,wday.ru,weaf.ru,woman.rambler.ru,womanadvice.ru,wordroot.ru,yanline.ru,yepme.ru,yesasia.ru,zaggo.ru,zagovormaga.ru,zavarka.life,zawindows.ru,zhonga.ru,zoneofgames.ru,zooeco.com,zvetki.ru,ветклиники.рф,воронеж.пробки-онлайн.рф,дословно.рф,интернет-обувь.рф,когда.москва,тула.пробки-онлайн.рф,фонетический-разбор.рф,ценыавто.рф,100-советов.рф,1001pochta.ru,101.ru,1beton.info,1landscapedesign.ru,2ip.ru,2karandasha.ru,2recepta.com,4allwomen.ru,4italka.su,6bb.ru,7dach.ru,7ogorod.ru,advancedsystemcare.ru,afisha.ru,afishateatrov.com,ageofgothic.ru,agroflora.ru,almode.ru,amongusmod.ru,amoskva.com,android-phonez.ru,anyroad.ru,apkpure.com,app-time.ru,apteka.uz,astrohelper.ru,audiobaby.net,auto.vercity.ru,autonews.ru,autopark-ug.ru,autopeople.ru,autotonkosti.ru,avtobus-marshruty.ru,avtobusom.net,balthazar.club,bankibel.by,bankiros-ru.turbopages.org,bathshouse.ru,bazliter.ru,bbf.ru,beautyhack.ru,bee-master.ru,beneficiarus.ru,berdsk-online.ru,berkem.ru,berlogakarelia.ru,bezpalatki.ru,bibusha.ru,bigspr.ru,biznesideas.ru,bizorg.su,bookshaker.net,bookz.ru,borutofan.ru,checkintime.ru,checko.ru,chernaia-pyatnitsa.ru,chto-podarite.ru,citi-katalog.ru,citilink-catalog.ru,clubtk.ru,colady.ru,com.nikolayship.pirates,companyinform.ru,complan.pro,cvet-dom.ru,data-vykhoda.ru,design.pibig.info,diskoleso.ru,dispetcher-gruzoperevozok.biz,dizajn-sada.ru,dizlandshafta.ru,dlia-sporta.ru,dmosk.ru,dobroe-utro-kartinki.ru,domnomore.com,domstrousam.ru,domzastroika.ru,driverstalk.ru,dumpoir.com,dusterok.ru,dyrchik.ru,e1.ru,eanews.ru,earphones-review.ru,edaturistu.com,edim.tv,ekaterinburg.firmsbase.ru,electrosam.ru,elles.top,equity.today,euro-rabota.com,eva.ru,expertland.ru,fastmb.ru,feedz.ru,fengshui24.ru,fermilon.ru,festima.ru,finswin.com,firmlist.ru,fixmag.ru,flowers-j.com,floweryhome.ru,fms66.ru,fotollia.ru,freefotohelp.ru,freereadknigi.com,gadgetplay.ru,gameinonline.com,gamenewsblog.ru,garazhov.ru,gazbuka.ru,gazeta.ru,gb12-barnaul.ru,gdz.ltd,geeker.ru,geekville.ru,generatorexperts.ru,germany.move.ru,get-loads.ru,givnost.ru,glamiss.ru,goodgrunt.ru,gorobzor.ru,gosuslugi-site.ru,gov-torgi.ru,guideer.ru,guidesgames.ru,hair-trends.ru,homeread.net,homo-expertus.ru,hozsekretiki.ru,hullabaloo.ru,idei.club,ideichtopodarit.ru,igromania.ru,iknigi.net,ilcosmetic.ru,imena-znachenie.ru,indifferentlanguages.com,info-motors.ru,infoselection.ru,internet-cabinet.ru,intoxik.ru,intrigue.dating,iphones.ru,isprav.ru,ithinker.ru,itumnik.ru,jobagregator.top,jobinmoscow.com.ru,joblab.ru,kabinet-lichnyj.ru,kak-nazyvaetsya.ru,kak-pravilno.net,kakoeslovo.ru,kakotlichit.ru,kanobu.ru,kartinki.pics,karusel-tv.ru,katalog-lenta.ru,katalog-tovarov.su,kazan.narule.ru,kedem.ru,ketome.ru,kino-teatr.ru,kinonavigator.ru,kinonews.ru,kinosezon.net.ru,kitabi.ru,kitchendecorium.ru,knigi-audio.com,kompyutery-programmy.ru,koolinar.ru,kotikdoma.com,krasnoyarsk.spravka.city,kratkoebio.ru,krut-art.ru,kubnews.ru,kurs-today.ru,kustroz.ru,ladakalina.club,lafoy.ru,landofgames.ru,lastmen.ru,lens.google.com,leroymerline.ru,lifeactor.ru,lifehacki.ru,lifeonphoto.com,linii98.ru,lipetsk.jsprav.ru,list-org.com,lyricsworld.ru,m.biblus.in,m.povar.ru,m.rupoem.ru,magica.site,maminblog24.ru,mash-xxl.info,massolit.site,mattrasik.ru,matworld.ru,mebel-v-nsk.ru,medelement.com,mega-stars.ru,mensby.com,menuo.ru,mestam.info,metalloy.ru,metro.mwmoskva.ru,mfcportal.ru,mir-herb.ru,mirinfo.ru,mirpozitiva.ru,mk.ru,mnogo-dok.ru,mobilegadjet.ru,mobilegamesworld.ru,moda-dlya-polnyh.ru,molva33.ru,moneymakerfactory.ru,moninomama.ru,msk.hullabaloo.ru,murmansk.isfix.ru,my-calend.ru,myandroid-apk.com,mybegom.com,mybuses.ru,mycoffe.ru,myslang.ru,naitiko.ru,narslovar.ru,naydidom.com,nazvanie-filma.ru,nesiditsa.ru,ngs24.ru,niann.ru,nnov.ayle.ru,normalnet.ru,notka.net,novosibirsk.rostrakt.ru,novosibirsk.trudko.ru,novostivolgograda.ru,numbase.ru,numerodom.ru,o-dveryah.ru,o-remonte.info,obrazovaka.ru,obrazovanie-gid.ru,obsuzhday.com,omtea.ru,onminecraft.ru,opennov.ru,orbita-e.ru,orglist.online,orgpage.ru,otdyhpress.ru,parnik-teplitsa.ru,pazlyigra.ru,pdd-exam.ru,pg11.ru,phonoteka.top,photoby.ru,photowords.ru,pixelbox.ru,platesmania.com,playground.ru,playmods.net,plusiminusi.ru,po-stroika.ru,poembook.ru,pogoda.tourister.ru,poisk-ru.ru,poisklekarstv.com,popcake.tv,pravda-chto.ru,premiummaslo.ru,pro-dachnikov.com,proautomasla.ru,proctoline.ru,prodigtv.ru,profermu.com,promo-akcii.ru,pronedra.ru,proreiling.ru,proshoper.ru,proudobreniya.ru,pslcar.com,pust-govoriyat.ru,rating-avto.ru,realty.rbc.ru,realybiz.ru,rejump.ru,relax-fm.ru,resheba-na5.ru,retro.fm,revda-info.ru,roscontrol.com,rosndv.ru,ru-world.net,ru.abcdef.wiki,ru.sport-wiki.org,ru.wikibrief.org,rubri.co,rubrikator24.ru,ruprogi.ru,rusind.ru,ruspravochnik.com,s-logistica.ru,sad24.ru,sadovod-base.ru,salda.ws,samka.co,sandizain.ru,sannic.ru,save4k.com,sdamgia.ru,selo.guru,sense-life.com,service-online.su,sibzdorov.ru,silazap.ru,simferopol.spravker.ru,skidka-onlain.ru,slooovo.ru,sneg.top,snookerist.ru,soberger.ru,sonya-kot.ru,sostavslova.ru,sotymarket.ru,spinningpro.ru,spitz-sobaka.ru,spletnik.ru,sport-nation.top,sport-snaryazhenie.ru,sprashivalka.com,spravka7.ru,spravkaforme.com,spravkainform.ru,srbu.ru,st-montaj.ru,standoff-game.ru,starhit.ru,stellashop.ru,strahovkunado.ru,stranamam.ru,stranauslug.ru,stroicod.ru,stroy-podskazka.ru,stroycata1og.ru,studmed.ru,su-orgs.ru,sunhome.ru,svetofor-adresa.ru,svetofors.ru,syzran-small.ru,t.rasp.yandex.ru,tagiltsev.ru,tekhnik.top,tekhnika-dlya-doma.ru,telegramguru.info,teleserial.club,televizor.top,testograd.com,textile.life,time365.info,timeserver.ru,tlt.ginfo.ru,tlt.ru,tomsk.big-book-relax.ru,tonkostipdd.ru,top-antropos.com,top1000vk.com,top220.ru,topdetki.ru,topkrossovok.ru,toshop.ru,tutu.ru,tvjam.ru,tvoi-uvelirr.ru,tvshowguide.ru,uhta.jsprav.ru,usatiki.ru,v-ogorod-sad.ru,vacancies.club,valtasar.ru,vashbarbos.ru,vashumnyidom.ru,veshok.com,vibormasla.ru,vikroim.ru,visasam.ru,vladeilegko.ru,vmireskazki.ru,vproizvodstvo.ru,vse-documenty.ru,vseideipodarkov.ru,vsenashoping.ru,vwts.ru,vyboroved.ru,vz.ru,waitforit.ru,whatsapp-video.ru,wiki-smart.ru,wikiotzyv.org,wlooks.ru,wordsofwonders.ru,world-cam.ru,world-games.online,wroom.ru,zagony.ru,zapchasti.expert,zapravcard.ru,zavtra.ru,zen-top.ru,zenspisok.ru,zhenskoe-mnenie.ru,zooblog.ru,zvuk-knigi.ru,вашсветофор.рф,лада2111.рф,пробки-онлайн.рф,российскиеиндексы.рф,словобот.рф,томск.пробки-онлайн.рф,урок.рф,1000000diy.ru,100urokov.ru,101info.ru,105-games.ru,1gai.ru,2022g.ru,24smi.org,26-2.ru,4tololo.ru,5play-mod.tokyo,74.ru,76.ru,a-r-s.ru,abcbiznes.ru,agro-sos.ru,agrognom.ru,aif.ru,akbblog.ru,alau.kz,amikafamily-blog.ru,androeed.ru,androfon.ru,android-app,animeslayers.ru,anovgorod.com,anwapp.org,apkshki.com,armrinok.ru,audio-lib.club,auto.onliner.by,avto-blogger.ru,avtoexperts.ru,avtozam.com,awtv.ru,ayzdorov.ru,baby.ru,balkon4life.ru,banki.loans,bankinform.ru,bazaznaniyst.ru,bezformata.ru,bipbap.ru,bluda-doma.ru,bolt-taxi.com,brandwiki.ru,budu5.com,buljon.ru,carmanuals.ru,catalogz.ru,cenotavr.ru,chelyabinsk.spravker.ru,city-shoping.ru,cloudparser.ru,club-romantic.ru,co.allconnected.vpnmaster,com.easygames.race,com.free.vpn.super.hotspot.open,com.fungames.sniper3d,combat-dez.ru,compconfig.ru,composs.ru,cool-shina.ru,countrymans.club,cpykami.ru,crarena.ru,ctmalls.ru,dachnye-sovety.ru,damion.club,dari.wiki,deutschpro.ru,dgl.ru,dogovor-obrazets.ru,dogway.ru,dominoplay.ru,drinking-songs.ru,drive2.ru,drugoe-kino.ru,dshishatura.ru,ecoportal.info,edaizm.ru,eft-soft.ru,ekabu.ru,electricalschool.info,epitafii.ru,expertsouth.ru,fabricators.ru,fanfics.me,fb2-epub.com,fermhelp.ru,firmmy.ru,fitzdrav.com,floop.top,folkextreme.ru,fonwall.ru,forbes.ru,geekhow.ru,gendersmoke.ru,goonbus.ru,gorodrabot.ru,govorimorabote.ru,gtrk.tv,hair-moda.com,hobbywood.ru,iamcook.ru,izhevsk.spravka.city,jazz.ru,jobcareer.ru,jobrun.ru,jsprav.ru,kak-pishetsya.com,kakpishem.ru,kartofan.org,katalogmayak.ru,kiosk67.ru,kitobam.com,kj.media,klops.ru,knigkindom.ru,knigochei.org,knowhistory.ru,kogda-vykhodit.ru,kogdavyydet.ru,kulinarenok.ru,kuplusrazu.ru,kurs-tenge.kz,kursk.narule.ru,lada-xray2.ru,ladyelena.ru,law03.ru,lawyers-age.ru,likefilmdb.ru,litmir.me,littleone.com,live24.ru,loveshtory.com,m.bombardir.ru,m.finance.rambler.ru,m.lenta.ru,mamamoet.ru,mangaclub.ru,mangapoisk.org,manikyurtips.ru,many-instructions.ru,marathonec.ru,marry.guru,mdrussia.ru,mebelarity.com,mebeloptovik.ru,medaboutme.ru,medartby.ru,medicina.dobro-est.com,medside.ru,mega-treker.ru,mel.fm,minecraftexpert.ru,mir24.tv,moi-ipodom.ru,money.onliner.by,mordovmedia.ru,more-flash-games.com,moskva.gdeservisy.ru,mp3phoenix.ru,mschistota.ru,msk.spravka.city,must-see.top,muzei-mira.com,muzhskoe-zhenskoe-tv.ru,muzhskoe-zhenskoe.info,muzonov.net,muzonovs.ru,my-busines.ru,nails-mag.ru,name-scan.ru,net.ibexsolutions.flow8,newgrodno.by,newstula.ru,newsvo.ru,neznaika.info,ngs.ru,nn.ru,notorgames.net,ntrtv.ru,o-tendencii.com,o4istote.ru,oceanbank.ru,ohranivdome.net,okruzausij-mir.my-dict.ru,oplenke.ru,orhide.ru,otdyhateli.com,otstv.ru,otziv-otziv.ru,overclockers.ru,perm.spravka.city,pervoyralsk.big-book-city.ru,petalsearch.com,photoshop-kopona.com,places.moscow,podvesnoe.ru,popmech.ru,pozdravim.net,proactions.ru,prodekorsten.com,progorod76.ru,programmi-dlya-android.ru,proprikol.ru,proslo.ru,psychologypro.ru,qna.center,rabota1000.ru,raskhod.ru,rasprodaga.ru,razbiraem-slovo.ru,real-biker.ru,realt.onliner.by,recipes.handmade39.ru,remont.ru-best.com,ren.tv,rfadres.ru,roma100471.ru,rosserial.be,rozamira-tarot.ru,rr-buro.ru,ru.aznations.com,ru.myfin.by,rueins.ru,ruskline.ru,russkieseriali.net,ruvestor.ru,rybalku.ru,samara.big-book-edu.ru,seminar-beauty.ru,setafi.com,sevpolitforum.ru,shtora-doma.ru,sinonim.org,sklonenie-slova.ru,skoda-auto2.ru,smart-iptv.ru,smotrim.ru,soft.mydiv.net,solovyov-tv.ru,sonnikguru.ru,soulcar.ru,soundtimes.ru,sovet-ok.ru,spasibovsem.ru,specdispetcher.ru,spishu.ru,sportarius.ru,spravbiz.ru,spravochnik-rf.ru,srrb.ru,strananaladoni.ru,strojdvor.ru,stroydomkin.ru,stroyres.net,studme.org,studref.com,svdelo.ru,tehnobzor.ru,tehnoexpert.top,tehnofaq.ru,tekst-pesni.online,teleconom.ru,textilegu.ru,thebiggest.ru,thegirl.ru,thepresentation.ru,top10.travel,top100vk.com,top10a.ru,topandtop.ru,topkits.ru,topsov.com,topster.plus,transportspb.com,trashbox.ru,turkey.unibo.ru,turproezdka.ru,u-ksyushi.ru,ufa1.ru,uk-parkovaya.ru,unibo.ru,uprostim.com,uznayvse.ru,v102.ru,vamber.ru,vashobereg.ru,viberi-verno.ru,volnatlt.ru,vsesmi.online,vslovarike.ru,wap4you.ru,wexy.ru,whatflower.ru,wikibotanika.ru,wikiphile.ru,wildroid.ru,woman.ru,work.ro.ru,xiaomi-smarthome.ru,yanashla.com,yandexdelivery.amocrm.ru,zaborsebe.ru,zemvopros.ru,zk-adress.ru,znaemdengi.ru,znanija.pro,zoon.ru,zppa.ru,zuzako.com,zvezdaweekly.ru,zvyki.com,вконтакте24.рф,заводы.рф,отели.дети,34fish.ru,barnaul.kitabi.ru,ringtondom.ru,iframe-tasks.yandex,iframe-yang.yandex,trello.com,docs.google.com,e.mail.ru,block.powerm.ru,btb.bitrix24.ru,job.goldenstudio.ru,sevem.pro,xn---31-fddjhatox9be.xn--p1ai,abcdef.wiki,barnaul.bizly.ru,barnaul.bizly.ru,bestknigi.com,camps.guru,clientbase.ultra-com.net,ddbit.ru,fb2book.net,gidpokraske.ru,internet-start.net,kreativlife.ru,link.2giskz.app,lyrsense.com,msk.spravker.ru,redirect.soarinfotech.com,sdelairukami.ru,search-drru.dt.dbankcloud.com,spravker.ru,streton.bitrix24.ru,top-radio.ru,youtube.com,online.sbis.ru,keep.google.com,nominaltechno.bitrix24.ru,asco-stroy34.ru,crm.sbis.ru,emigrating.ru,flowertimes.ru,khabarovsk.hh.ru,kp.infoline.spb.ru,l.wl.co,muzofond.fm,topasnew24.com,device4game.ru,audiokniga-one.com,biokot.com,euroangar.ru,farmacia24.ru,filter-ekb.ru,islam-mama.com,magegame.ru,pricepblog.ru,remotvet.ru,vyborok.com,2v.ru,dizajninfo.ru,dveri-tut.ru,gdevekb.ru,anapa.jsprav.ru,dreammoto.ru,granula-td.ru,naavtobuse.net,divomix.com,electromoto.net,iz.ru,mosdvery.ru,nipitrti.ru,photo-hair.ru,postroitbanju.ru,product-catalog.ru,profi-star28.ru,remontcma.ru,resttec.ru,rukniga.club,schpnd.ru,tehnoarhiv.ru,top-smartphones.ru,tretyakov.lenin.ru,wwwrating.com,allcalc.ru,blizko.pro,dveri.com,gpvn.ru,zhena-muzh.ru,aes-g.ru,aktsii-ru.ru,allfest.ru,bestkanc.ru,crm.blizko.ru,design-homes.ru,domostr0y.ru,estatemebel.ru,eurotech-group.ru,geodzen.com,hegel.ru,inmyroom.ru,intersintez.ru,kuhni-planeta.ru,kwadratura.ru,link.avito.ru,logstream.ru,m.lyrsense.com,masterbeton-ufa.ru,mediatoday.ru,metallolom-vlg.ru,muzgkb2.ru,nashaplaneta.net,paladiumgroup.ru,piter-soft.ru,pix-feed.com,ring56.ru,rivendel.ru,rjcgroup.ru,schoolproekt76.ru,search.hi.ru,shop.atmir.ru,smartmedlab.ru,star-cat.com,style.rbc.ru,tayniymir.com,tripplanet.ru,unisiter.bitrix24.ru,vse-kassi.ru,yborka.online,95.217.141.56";
let spamReferrer = false;
if (refURL && refURL != "" && urlString.indexOf("," + refURL) !== -1) {
  spamReferrer = true;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("jquery-script").onload = (function () {
    const productRatingModal = document.getElementById(
      "product-rating-popup"
    );
    const productRatingModalTitle = productRatingModal.querySelector(
      ".product-rating-modal__title"
    );
    const attrs = [
      "rating-dp",
      "rating-pk",
      "rating-z",
      "rating-kk",
      "rating-s",
      "rating-t",
      "rating-v",
    ];
    function disableScroll() {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    function enableScroll() {
      document.body.style.overflow = "hidden auto";
      document.documentElement.style.overflow = "hidden auto";
    }

    $(productRatingModal).on("shown.bs.modal", function () {
      $(productRatingModal).css("display", "flex");
      disableScroll();
      $(".modal-backdrop").addClass("modal-backdrop_dnone");
    });
    $(productRatingModal).on("hidden.bs.modal", function () {
      $(productRatingModal).css("display", "flex");
      setTimeout(function (e) {
        $(productRatingModal).css("display", "none");
      }, 250);
      enableScroll();
      $(".product-rating").removeClass("product-rating_active");
      $(".modal-backdrop").removeClass("modal-backdrop_dnone");
    });

    function drawProductRatingModal(clickedItem) {
      productRatingModalTitle.innerHTML = "";
      productRatingModalTitle.appendChild(clickedItem.cloneNode(true));
      let dateSpan = document.createElement("span");
      dateSpan.innerHTML =
        clickedItem.parentElement.querySelector(
          ".catalog__title"
        ).innerHTML;
      dateSpan.classList.add("product-rating-modal__title-value");
      productRatingModalTitle.appendChild(dateSpan);
      for (let i = 0, len = attrs.length; i < len; i++) {
        let curModalItem = productRatingModal.querySelector(
          ".product-rating-modal__" + attrs[i]
        );
        if (clickedItem.hasAttribute("data-" + attrs[i])) {
          curModalItem.classList.remove("d-none");
          curModalItem
            .querySelector(".star__green")
            .setAttribute(
              "style",
              "width:" +
              clickedItem.getAttribute("data-" + attrs[i]) * 20 +
              "%"
            );
          curModalItem.querySelector(
            ".product-rating-modal__rating-value"
          ).innerHTML = clickedItem.getAttribute("data-" + attrs[i]);
        } else {
          curModalItem.classList.add("d-none");
        }
      }
      $(productRatingModal).modal();
    }
    let productRating = document.querySelectorAll(".product-rating");
    for (let i = 0; i < productRating.length; i++) {
      productRating[i].addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (
          e.target.classList.contains("product-rating_active") ||
          e.target.parentElement.classList.contains(
            "product-rating_active"
          )
        )
          return;
        try {
          window["yaCounter" + YaCounterId].reachGoal(
            "product-rating-click"
          );
        } catch (e) { }
        if (e.target.classList.contains("product-rating")) {
          e.target.classList.toggle("product-rating_active");
          drawProductRatingModal(e.target);
        } else if (
          e.target.parentElement.classList.contains("product-rating")
        ) {
          e.target.parentElement.classList.toggle(
            "product-rating_active"
          );
          drawProductRatingModal(e.target.parentElement);
        }
      });
    }
  })();
});

document.addEventListener("DOMContentLoaded", () => {
  let promoinfotext = document.querySelectorAll(".promoinfotext");
  for (let i = 0; i < promoinfotext.length; i++) {
    promoinfotext[i].addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.classList.contains("promoinfotext__hint")) return;
      if (e.target.classList.contains("promoinfotext")) {
        e.target.classList.toggle("promoinfotext_active");
      } else if (
        e.target.parentElement.classList.contains("promoinfotext")
      ) {
        e.target.parentElement.classList.toggle("promoinfotext_active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let collectionDescriptionBtn = document.querySelector(
    ".collection-description-btn"
  );
  if (collectionDescriptionBtn) {
    let collectionDescriptionNew = collectionDescriptionBtn.closest(
      ".collection-description-new"
    );
    if (collectionDescriptionNew) {
      let linesCount = collectionDescriptionNew.offsetHeight;

      linesCount =
        linesCount /
        parseFloat(
          window.getComputedStyle(collectionDescriptionNew).lineHeight
        );
      console.log(linesCount);
      let wWidth = window.innerWidth || window.screen.width;
      console.log(wWidth);
      let linesCountMax = 2.6;
      if (wWidth <= 991) {
        linesCountMax = 4.6;
      }
      if (linesCount > linesCountMax) {
        collectionDescriptionBtn.addEventListener("click", (e) => {
          e.preventDefault();
          collectionDescriptionNew.classList.toggle(
            "collection-description-new_hidden"
          );
        });
        collectionDescriptionBtn.click();
      } else {
        collectionDescriptionBtn.style.display = "none";
      }
    }
  }
});

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ optimize: "optimize" });

var YaCounterId = 24600053;
(function () {
  "use strict";
  var loadedMetricaGA = false,
    timerMetricaGAId;
  window.addEventListener("scroll", loadFallbackGA, { passive: true });
  window.addEventListener("touchstart", loadFallbackGA);
  document.addEventListener("mouseenter", loadFallbackGA);
  document.addEventListener("click", loadFallbackGA);
  //document.addEventListener( 'DOMContentLoaded', loadFallbackGA2 );
  function loadFallbackGA() {
    timerMetricaGAId = setTimeout(loadMetricaGA, 100);
  }
  function loadFallbackGA2() {
    timerMetricaGAId = setTimeout(loadMetricaGA, 1000);
  }
  function loadMetricaGA(e) {
    if (e && e.type) {
      console.log(e.type);
    } else {
      console.log("DOMContentLoaded");
    }
    if (loadedMetricaGA) {
      return;
    }
    (function (i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );
    var _udn = "barnaul.gigant-dveri.ru";
    if (_udn === "barnaul.gigant-dveri.ru") _udn = "www.gigant-dveri.ru";
    ga("create", "UA-49847898-1", _udn, "auto");
    // ga('create', 'UA-49847898-1', 'auto');
    ga("send", "pageview");
    ga("require", "GTM-5PV7VPL");
    loadedMetricaGA = true;
    if (timerMetricaGAId) clearTimeout(timerMetricaGAId);
    window.removeEventListener("scroll", loadFallbackGA);
    window.removeEventListener("touchstart", loadFallbackGA);
    document.removeEventListener("mouseenter", loadFallbackGA);
    document.removeEventListener("click", loadFallbackGA);
    //document.removeEventListener( 'DOMContentLoaded', loadFallbackGA2 );
  }
})();

if (typeof __id == "undefined") {
  var __id = 129767;

  (function () {
    var ic = document.createElement("script");
    ic.type = "text/javascript";
    ic.async = true;
    ic.src = "/javascripts/insales_counter.js?6";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ic, s);
  })();
}

window.isCDN = 1;

const parentContainer = document.querySelector(".my-hidden-text");

parentContainer.addEventListener('click', event => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("read-more-btn");
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector('.read-more-text');
  const currentDots = event.target.parentNode.querySelector('.read-dots');
  currentText.classList.toggle('read-more-text--show');
  currentDots.classList.toggle('read-dots-hide');
  current.textContent = current.textContent.includes("раскрыть") ? "скрыть" : "раскрыть"
})