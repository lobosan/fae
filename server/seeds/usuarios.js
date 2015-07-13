Meteor.startup(function () {
    if (Meteor.users.find().count() == 0) {
        var users = [
            {
                username: 'Administrador',
                email: 'admin@admin.com',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Probío'
                }
            },
            {
                username: 'Test',
                email: 'test@test.com',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Testa'
                }
            },
            {
                username: 'Wilson',
                email: 'wilson@probio.com',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Probío'
                }
            }
        ];

        _.each(users, function (user) {
            Accounts.createUser({
                username: user.username,
                email: user.email,
                password: '123123',
                profile: {cedula: user.profile.cedula, institucion: user.profile.institucion}
            });
        });
    }
});

Accounts.onCreateUser(function (options, user) {
    if (options.username == 'Administrador')
        user.roles = ['admin', 'tecnico'];
    else if (options.profile.provincia)
        user.roles = ['provincial', 'tecnico'];
    else
        user.roles = ['tecnico'];
    if (options.profile)
        user.profile = options.profile;
    return user;
});