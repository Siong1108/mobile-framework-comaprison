Ext.define('SENCHA.store.Groups', {
    extend: 'Ext.data.Store',
    config: {
        storeId: 'groupsStore',
        model: 'SENCHA.model.Group',
        proxy: {
            type: 'jsonp',
            url: 'https://api.meetup.com/2/groups?key=3362363421f60506b6e254334b6077&sign=true&group_urlname=nodejs-bcn'
        }
    }
});