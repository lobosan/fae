Router.configure({
    layoutTemplate: 'Layout',
    loadingTemplate: 'Loading'
});


Router.route('/', {
    name: 'Home'
});

Router.route('/insert_grupo', {
    name: 'InsertGrupo',
    controller: 'GruposController',
    action: 'insert',
    where: 'client'
});

Router.route('/grupos_list', {
    name: 'GruposList',
    controller: 'GruposController',
    action: 'list',
    where: 'client'
});

Router.route('/grupo/:_id', {
    name: 'EditGrupo',
    controller: 'GruposController',
    action: 'edit',
    where: 'client'
});

var mustBeSignedIn = function(pause) {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('Home');
    } else {
        this.next();
    }
};

var goToAfterLoggingIn = function(pause) {
    if (Meteor.user()) {
        Router.go('GruposList');
    } else {
        this.next();
    }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['Home']});
Router.onBeforeAction(goToAfterLoggingIn, {only: ['Home']});