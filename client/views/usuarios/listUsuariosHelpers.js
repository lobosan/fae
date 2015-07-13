Template.listUsuarios.helpers({
    settings: function () {
        return {
            collection: Meteor.users,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {key: 'username', label: 'Nombre de usuario'},
                {key: 'emails.0.address', label: 'Email'},
                {key: 'profile.institucion', label: 'Institución'},
                {key: 'profile.cedula', label: 'Cédula'},
                {key: 'roles', label: 'Perfil'},
                {key: 'profile.provincia', label: 'Provincia'}
            ]
        };
    }
});