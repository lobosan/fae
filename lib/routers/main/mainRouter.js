Router.configure({
    layoutTemplate: 'main',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'/*,
    load: function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        $('.container').hide().fadeIn(800);
        this.next();
    }*/
});

Router.route('/', {
    name: 'home'
});

var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('home');
    } else {
        this.next();
    }
};

var goToAfterLogin = function() {
    if (Meteor.user()) {
        Router.go('listOrganizaciones');
    } else {
        this.next();
    }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['home']});
Router.onBeforeAction(goToAfterLogin, {only: ['home']});

if (Meteor.isClient) {
    Tracker.autorun(function () {
        var template = window.location.pathname;
        if (!Meteor.user() && template !== '/') {
            Router.go('home');
        }
    });
}