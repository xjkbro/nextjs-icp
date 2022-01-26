export const tableStyles = () => {
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
}
