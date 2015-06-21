Meteor.startup(function () {
    // Only if an admin user is logged in
    Security.permit(['insert', 'update', 'remove']).collections([
        OrganizacionIndicadores, AcompanamientoIndicadores, DPA
    ]).ifHasRole('admin').apply();

    // Only if a user is logged in
    Security.permit(['insert', 'update', 'remove']).collections([
        Organizaciones, Acompanamientos
    ]).ifLoggedIn().apply();

    // Update users only if they don't try to change the roles property
    Meteor.users.permit('update').ifLoggedIn().exceptProps(['roles']).apply();

    TemporaryFiles.allow({
        insert: function (userId, file) {
            return true;
        },
        remove: function (userId, file) {
            return true;
        },
        read: function (userId, file) {
            return true;
        },
        write: function (userId, file, fields) {
            return true;
        }
    });
});