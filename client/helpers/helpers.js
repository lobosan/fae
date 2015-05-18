if (Meteor.isClient) {
    UI.registerHelper('formatTime', function (context, options) {
        if (context)
            return moment(context).format('DD/MM/YYYY');
    });
}