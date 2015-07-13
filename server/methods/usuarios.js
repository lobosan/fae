Meteor.methods({
    createNewUser: function (insertDoc) {
        Accounts.createUser({
            username: insertDoc.username,
            email: insertDoc.email,
            password: '123123',
            profile: {
                cedula: insertDoc.profile.cedula,
                institucion: insertDoc.profile.institucion,
                provincia: insertDoc.profile.provincia
            }
        });
    }
});