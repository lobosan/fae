Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {

        var users = [
            {
                username: 'Test',
                email: 'test@test.com',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Testa'
                },
                roles: ['tecnico']
            }, {
                username: 'Wilson',
                email: 'wilson@probio.com',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Probío'
                },
                roles: ['tecnico']
            }, {
                username: 'Administrador',
                email: 'admin@admin.com',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Probío'
                },
                roles: ['administrador']
            }
        ];

        _.each(users, function (user) {
            var id;

            id = Accounts.createUser({
                username: user.username,
                email: user.email,
                password: '123123',
                profile: { cedula: user.profile.cedula, institucion: user.profile.institucion }
            });

            if (user.roles.length > 0) {
                // Need _id of existing user record so this call must come
                // after `Accounts.createUser` or `Accounts.onCreate`
                Roles.addUsersToRoles(id, user.roles);
            }
        });
    }
});