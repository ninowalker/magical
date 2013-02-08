var conv_inspect = "/powertools/inspect/conv/";
goog.array.forEach(goog.dom.getElementsByClass("conv_title_link"), function (l) { l.href = conv_inspect + l.parentNode.parentNode.parentNode.attributes['data-collection-id'].value + "/" })
