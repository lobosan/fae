// Only if an admin user is logged in
Security.permit(['insert', 'update', 'remove']).collections([
    OrganizacionIndicadores, AcompanamientoIndicadores, DPA
]).ifHasRole('administrador').apply();

// Only if a user is logged in
Security.permit(['insert', 'update', 'remove']).collections([
    Organizaciones, Acompanamientos
]).ifLoggedIn().apply();

// Update users only if they don't try to change the roles property
Meteor.users.permit('update').ifLoggedIn().exceptProps(['roles']).apply();