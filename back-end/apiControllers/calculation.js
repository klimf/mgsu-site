var Project = require('../db/mongoose').models.Project;
var Calculation = require('../db/mongoose').models.Calculation;
var CalcOption = require('../db/mongoose').models.CalcOption;
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    createOption: createOption,
    removeOption: removeOption,
    getProjects: getProjects,
    getReports: getReports,
    createReport: createReport
};

function createOption(req, res, next) {
    var option = new CalcOption(req.body);
    option.project = new ObjectId(req.params.id);
    option.save(function(err) {
        if(err) {
            res.send(400, err);
        } else {
            res.send();
        }
    })
}

function removeOption(req, res, next) {
    CalcOption.findById(req.params.id).remove(function(err) {
        if(err) {
            res.send(400, err);
        } else {
            res.send();
        }
    })
}

function getProjects(req, res, next) {
    var projects;
    var options;
    Project.find(function(err, data) {
        if(err) {
            res.send(400, err);
        } else if (data) {

            projects = data;
            CalcOption.find().populate('project').exec(function(err, data) {
                if(err) {
                    res.send(400, err);
                } else {
                   data.forEach(function(item) {
                       var project = projects.find(function(prj) {return prj._id == item.project._Id});
                       var option = {
                           label1: item.label1,
                           label2: item.label2,
                           koef: item.koef
                       }
                       projects[project].option = option;
                   });
                   res.send(projects);
                }
            })


        } else {
            res.send(404)
        }
    })
}

function createReport(req, res, next) {
    req.body.projects = req.body.projects.map(function(item) {
        item._id = null;
        return item;
    })
    var calculation = new Calculation(req.body);
    calculation.save(function(err) {
        if(err) {
            res.send(400, err);
        } else {
            res.send();
        }
    })
}

function getReports(req, res, next) {
    Calculation.find(function(err, data) {
        if(err) {
            res.send(400, err);
        } else {
            res.send(data);
        }
    })
}