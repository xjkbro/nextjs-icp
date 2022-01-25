console.log("HELLO")

jQuery(document).ready(function ($) {
  // $() will work as an alias for jQuery() inside of this function

  // THESE FUNCTIONS CORRECT THE COLORS of the tables to the new design.  They were hard coded with bgcolor
  // so this will fix it until we can update the table code later
  $("table").attr("width", "100%")
  $("table tr, table td").each(function () {
    if (!$(this).closest("table").hasClass("dontfix")) {
      $(this).removeClass()
      $(this).children("span").removeClass()
      $(this).children("div").removeClass()

      if (
        $(this).attr("bgcolor") == "#cccccc" ||
        $(this).attr("bgcolor") == "#CCCCCC"
      ) {
        $(this).removeAttr("bgcolor")
        $(this).addClass("tablecolumn")
      }

      if (
        $(this).attr("bgcolor") == "#cccccc" ||
        $(this).attr("bgcolor") == "#CCCCCC"
      ) {
        $(this).removeAttr("bgcolor")
        $(this).addClass("tablecolumn")
      }

      if ($(this).attr("bgcolor") == "#000000") {
        $(this).removeAttr("bgcolor")
        $(this).addClass("tableheading")
      }

      if (
        $(this).attr("bgcolor") == "#ffcc99" ||
        $(this).attr("bgcolor") == "#FFCC99" ||
        $(this).attr("bgcolor") == "#FFcc99"
      ) {
        $(this).removeAttr("bgcolor")
        $(this).addClass("tablecontent")
      }
    }
  })

  $("table table").each(function () {
    if ($(this).attr("bgcolor") == "#000000") $(this).attr("bgcolor", "#e6e6e6")
  })
  // END COLOR FIX

  //THIS UPDATES THE PRICE
  /*$('.options').change(function(){
        var price="$"+$(this).find(':selected').attr("price");
        $('.pricenumber').html(price);
        $('.addtocart').attr("href","/add.php"+$('.options').find(':selected').attr("value"));
        });*/

  $("#reference img").each(function () {
    $(".RoHS").html($(this).clone())
    if ($(this).attr("src").search("images/ROHS.jpg") != -1) {
      console.log("ROHS image")

      $(".RoHS img").wrap(
        $("<a>", {
          href: "/ez_data_logger.html",
          target: "_blank",
        })
      )
    }
    $(this).remove()
  })

  $("#productimagecontainer .additionalimages div").click(function () {
    image = $(this).children("img").attr("src")
    link = $(this).children("a").attr("href")
    $("#mainimage img").attr("src", image)
    $("#mainimage a").attr("href", link)

    index = $(this).index(".additionalimages div")
    $(".additionalimages div a").attr("rel", "products")
    $(".additionalimages div a:eq(" + index + ")").attr("rel", "")

    $("#productimagecontainer .additionalimages div").css(
      "border-color",
      "#e5e5e5"
    )
    $(this).css("border-color", "#2679c5")
  })

  //END PRICE UPDATE
  $(document).ready(function () {
    $("#myoptions").change(function () {
      var qty = $(this).val()
      $(".addtocart").attr(
        "href",
        "/add.php" +
          $(".options").find(":selected").attr("value") +
          "&qty=" +
          qty
      )
      $(".quote_desk").attr(
        "href",
        "/product_generate_quote.php" +
          $(".options").find(":selected").attr("value") +
          "&qty=" +
          qty +
          "&KeepThis=true&TB_iframe=true&height=540&width=637"
      )
      $(".addtocart_mobile").attr(
        "href",
        "/add.php" +
          $(".options").find(":selected").attr("value") +
          "&qty=" +
          qty
      )
      $(".quote_mobile").attr(
        "href",
        "/product_generate_quote.php" +
          $(".options").find(":selected").attr("value") +
          "&qty=" +
          qty
      )
      $(".buy_now").attr(
        "href",
        "/buy_now.php" +
          $(".options").find(":selected").attr("value") +
          "&qty=" +
          qty
      )
    })

    $(".pricenumber").html("$" + $(".options").find(":selected").attr("price"))
    $(".addtocart").attr(
      "href",
      "/add.php" +
        $(".options").find(":selected").attr("value") +
        "&qty=" +
        $("#myoptions").val()
    )
    $(".addtocart_mobile").attr(
      "href",
      "/add.php" +
        $(".options").find(":selected").attr("value") +
        "&qty=" +
        $("#myoptions").val()
    )
    $(".buy_now").attr(
      "href",
      "/buy_now.php" +
        $(".options").find(":selected").attr("value") +
        "&qty=" +
        $("#myoptions").val()
    )
    $(".quote_desk").attr(
      "href",
      "/product_generate_quote.php" +
        $(".options").find(":selected").attr("value") +
        "&qty=" +
        $("#myoptions").val() +
        "&KeepThis=true&TB_iframe=true&height=540&width=637"
    )
    $(".quote_mobile").attr(
      "href",
      "/product_generate_quote.php" +
        $(".options").find(":selected").attr("value") +
        "&qty=" +
        $("#myoptions").val()
    )
    $(".additionalimages div a:eq(0)").attr("rel", "")

    //var w = window.open();
    //var htmla = $("#productinfocontainer").delay(1000).html();
    //$(w.document.body).html(htmla);
  })
}) // JavaScript Document
