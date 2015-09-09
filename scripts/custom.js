  (function(){
    // CUSTOM TOP NAV TOGGLES FOR DEMO PURPOSES
    $('.navbar-top a').click(function(e){
        $('.navbar-top a').removeClass("active");
        $(this).addClass("active");
        e.preventDefault();
    })
    $('.navbar-top #barebones').click(function(e){ // wipe all styles
        $('.ss').removeAttr("disabled");
        $('.ss').attr("disabled", "disabled");
    })
    $('.navbar-top #basic').click(function(e){ // show basic bootstrap
        $('.ss').attr("disabled", "disabled");
        $('#style-basic, #style-custom').removeAttr("disabled");
    })
    $('.navbar-top #theme').click(function(e){ // throw theme on top of bootstrap
        $('.ss').attr("disabled", "disabled");
        $('#style-theme, #style-custom').removeAttr("disabled");
    })



    $(window).scroll(function () {
        var top = $(document).scrollTop();
        $('.splash').css({'background-position': '0px -'+(top/3).toFixed(2)+'px'});
        if(top > 50)
            $('#home > .navbar').removeClass('navbar-transparent');
        else
        $('#home > .navbar').addClass('navbar-transparent');
    });

    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

    var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
        var html = $(this).parent().html();
        html = cleanSource(html);
        $("#source-modal pre").text(html);
        $("#source-modal").modal();
    });

    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();

    $(".bs-component").hover(function(){
        $(this).append($button);
        $button.show();
    }, function(){
        $button.hide();
    });

    function cleanSource(html) {
        var lines = html.split(/\n/);

        lines.shift();
        lines.splice(-1, 1);

        var indentSize = lines[0].length - lines[0].trim().length,
            re = new RegExp(" {" + indentSize + "}");

        lines = lines.map(function(line){
            if (line.match(re)) {
                line = line.substring(indentSize);
            }
            return line;
        });

        lines = lines.join("\n");

        return lines;
    }
})();