Ext.define('SENCHA.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',
    requires: ['Ext.Img', Ext.Label],
    fullscreen: true,
    config: {
        defaults: {
            styleHtmlContent: true
        },
        items: [{
            xtype: 'label',
            html: 'BCN Nodeistas'
        }, {
            xtype: 'image',
            width: 200,
            height: 164,
            src: 'resources/images/node.png',
            centered: true
        }, {
            xtype: 'image',
            src: 'http://img2.meetupstatic.com/906521611995523788/img/header/logo.png',
            width: 66,
            height: 45,
            bottom: 10,
            right: 10
        }]
    }
});
