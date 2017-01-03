function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function (f, src) {
  let s = src;
  s = document.createElement('script');
  s.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js';
  s.onload = function () {
    f(jQuery.noConflict(true));
  };
  document.body.appendChild(s);
})(function ($) {
  let main = (() => {
    var _ref = _asyncToGenerator(function* () {
      try {
        const $a = $('#TopMenu_HM_Menu1', top.frames[0].document.body);
        $a.click();
      } catch (e) {
        console.log(e);
      }
      yield sleep(500);
      try {
        // const $b = $('#HM_Item1_12', top.frames[1].document.body);
        const $b = $('span:contains("My Timesheet")');
        console.log($b);
        // $b.click();
      } catch (e) {
        console.log(e);
      }
      yield sleep(500);
      try {
        // const $c = $('#HM_Item1_12_1 .itemText', top.frames[1].document.body);
        // $c.click();
      } catch (e) {
        console.log(e);
      }
    });

    return function main() {
      return _ref.apply(this, arguments);
    };
  })();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  main();
  return this;
});