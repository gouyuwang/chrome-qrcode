if (!chrome.tabs) {
    // 生成二维码
    jQuery('#qrCode').qrcode({
        render: "canvas",
        foreground: "#000",
        background: "#FFF",
        width: 200,
        height: 200,
        text: location.href
    });
} else {
    // 获取页面相关信息
    chrome.tabs.getSelected(null, function (tab) {
        // 生成二维码
        jQuery('#qrCode').qrcode({
            render: "canvas",
            foreground: "#000",
            background: "#FFF",
            width: 200,
            height: 200,
            text: tab.url
        });
    });
}

jQuery('#btnSwitch').on('click',()=> {
    jQuery('#tips').hide(); 
    jQuery('#custom-content').fadeIn();
});

jQuery('#btnInput').on('change',(e)=> {
    let content = e.target.value;
    if (content.length > 0) {
        $("#qrCode").find('canvas').remove();
        // 生成二维码
        jQuery('#qrCode').qrcode({
            render: "canvas",
            foreground: "#000",
            background: "#FFF",
            width: 200,
            height: 200,
            text: content
        });
    }
});