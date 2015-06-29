Meteor.methods({
    exportExcel: function (labels, data, worksheetName) {
        var Future = Npm.require('fibers/future');
        var futureResponse = new Future();

        var excel = new Excel('xlsx'); // Create an excel object  for the file you want (xlsx or xls)
        var workbook = excel.createWorkbook(); // Create a workbook (equivalent of an excel file)
        var worksheet = excel.createWorksheet(); // Create a worksheet to be added to the workbook

        _.each(labels, function (label, index) {
            worksheet.writeToCell(0, index, label);
        });

        worksheet.setColumnProperties([
            {wch: 20},
            {wch: 30}
        ]);

        var row = 1;
        _.each(data, function (document) {
            var column = 0;
            for (var key in document) {
                if (key == '_id') {
                } else if (key == 'createdAt') {
                    worksheet.writeToCell(row, 0, document[key]);
                } else {
                    column++;
                    worksheet.writeToCell(row, column, document[key]);
                }
            }
            row++;
        });

        workbook.addSheet(worksheetName, worksheet); // Add the worksheet to the workbook

        mkdirp('tmp', Meteor.bindEnvironment(function (err) {
            if (err) {
                console.log('Error creating tmp dir', err);
                futureResponse.throw(err);
            }
            else {
                var uuid = UUID.v4();
                var filePath = './tmp/' + uuid;
                workbook.writeToFile(filePath);

                TemporaryFiles.importFile(filePath, {
                    filename: uuid,
                    contentType: 'application/octet-stream'
                }, function (err, file) {
                    if (err) {
                        futureResponse.throw(err);
                    }
                    else {
                        futureResponse.return('/gridfs/temporaryFiles/' + file._id);
                    }
                });
            }
        }));

        return futureResponse.wait();
    }
});