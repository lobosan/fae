/*
// Libraries which need a global variable, such as jQuery etc
globalVariable = function () {
}
 This is where you put any special files that you don't want meteor to wrap up in a new variable scope.
 This folder is also loaded first before other normal javascript files. If you are using jQuery plugins or things like bootstrap,
 this might be where you need to put bootstrap.js for example.
*/