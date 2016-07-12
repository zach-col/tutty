var fooBar = {};

fooBar.updateFooName = function() {
    var fooName = $(this).data('name');
        console.log(fooName)
            if (fooName) {
                  $(this).closest('[class^="col-sm"]').find('.foo-title span').text(fooName);
                    }
};

$(document).ready(function() {
    $("input[name=foo_id]:radio").change(fooBar.updateFooName);
});
