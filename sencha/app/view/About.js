Ext.define('SENCHA.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',
    requires: ['Ext.Label'],
    config: {
        html: 'About',
        items: [{
            xtype: 'label',
            html: 'Nodeistas Barcelona meetup'
        }, {
            xtype: 'panel',
            html: 'All about the event-driven I/O server-side JavaScript environment based on V8: node.js'
        }]
    }
});
