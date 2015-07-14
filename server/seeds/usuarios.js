Meteor.startup(function () {
    if (Meteor.users.find().count() == 0) {
        var users = [
            {
                username: 'Administrador',
                email: 'admin@magap.gob.ec',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Probío'
                }
            },
            {
                username: 'Provincial',
                email: 'provincial@magap.gob.ec',
                profile: {
                    cedula: '1231231233',
                    institucion: 'MAGAP',
                    provincia: 'PICHINCHA'
                }
            },
            {
                username: 'Técnico',
                email: 'tecnico@probio.com',
                profile: {
                    cedula: '1231231233',
                    institucion: 'Testa'
                }
            }
        ];

        _.each(users, function (user) {
            var profile;
            if (user.profile.provincia != null)
                profile = {cedula: user.profile.cedula, institucion: user.profile.institucion, provincia: user.profile.provincia};
            else
                profile = {cedula: user.profile.cedula, institucion: user.profile.institucion};
            Accounts.createUser({
                username: user.username,
                email: user.email,
                password: '123123',
                profile: profile
            });
        });
    }
});

Accounts.onCreateUser(function (options, user) {
    if (options.username == 'Administrador')
        user.roles = ['admin'];
    else if (options.profile.provincia)
        user.roles = ['provincial'];
    else
        user.roles = ['tecnico'];
    if (options.profile)
        user.profile = options.profile;
    return user;
});