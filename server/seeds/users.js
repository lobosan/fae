Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
        var users = [
            {
                username: 'Test',
                email: 'test@test.com',
                password: '123123',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Testa'
                }
            }, {
                username: 'Wilson',
                email: 'wilson@probio.com',
                password: 'wilsonwilson',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Probío'
                }
            }
        ];
        _.each(users, function (user) {
            Accounts.createUser(user);
        });
    }
});