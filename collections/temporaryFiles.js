TemporaryFiles = new FileCollection('temporaryFiles',
    { resumable: false,   // Enable built-in resumable.js upload support
        http: [
            { method: 'get',
                path: '/:_id',  // this will be at route "/gridfs/temporaryFiles/:_id"
                lookup: function (params) {  // uses express style url params
                    return { _id: params._id};       // a query mapping url to myFiles
                }
            },
            { method: 'post',
                path: '/:_id',
                lookup: function (params) {
                    return {
                        _id: params._id
                    }
                }}
        ]
    }
);

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