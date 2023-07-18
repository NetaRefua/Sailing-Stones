$lettering = $('#lettering');

var a = $lettering.text().split('');
var inject = '';
if (a.length) {

  $(a).each(function (i, item) {

    vd = Math.floor(Math.random() * 1000);
    hd = Math.floor(Math.random() * 2000) - 1000;
    inject +=
      '<span style="' +

      //Random top position.
      'top: ' + vd + 'px; ' +

      //Random left position.
      'left: ' + hd + 'px; ' +

      //White color.
      'color: white; ' +

      '">' + item + '</span>';
  });

  $lettering.empty().append(inject);
}

