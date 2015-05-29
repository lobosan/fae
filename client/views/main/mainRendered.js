Template.header.onRendered(function () {
    this.$('.navbar-brand').click(function() {
        $('.menu-items li.active').removeClass('active');
    });
});

Template.mainMenu.onRendered(function () {
    this.$('.menu-items li').click(function() {
        $('.menu-items li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });
});

Template._loginButtonsLoggedInDropdown.onRendered(function () {
	this.$('.dropdown-toggle').prepend('<i class="glyphicon glyphicon-user"></i> ');
});