Ext.define("SENCHA.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'home',
                title: 'Home',
                iconCls: 'home'
            },
            {
                xtype: 'about',
                title: 'About',
                iconCls: 'info'
            },
            {
                xtype: 'members',
                title: 'Members',
                iconCls: 'user_list'
            }
        ]
    }
});
