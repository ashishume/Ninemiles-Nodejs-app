const Timeline = require('../models/timeline');


exports.get_all_newsFeed_data=(req, res, next) => {
    const pageNo=parseInt(req.query.pageNo);
    const pageSize=parseInt(req.query.pageSize);
    var query = {}
    if(pageNo<0 || pageNo==0)
    {
      return res.status(400).json({
        message:"Invalid page number, start with 1"
      })
    }
    query.skip=pageSize*(pageNo-1);
    query.limit=pageSize;
    
      Timeline
        .find({},{},query)
        .then(docs => {
          const response = {
            projects: docs,
            totalSize:docs.length
          };
          if (docs.length > 0) res.status(200).json(response);
          else
            res.status(404).json({
              message: 'No entries Found'
            });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            error: err
          });
        });
    }


    exports.get_newsFeed_data_userId=(req, res, next) => {
        Timeline.find({
          userId: req.params.userId
        })
          .exec()
          .then(docs => {
            const response = {
              count: docs.length,
              projects: docs
            };
            if (docs.length > 0) res.status(200).json(response.projects);
            else
              res.status(404).json({
                message: 'No entries Found'
              });
          })
          .catch(error => {
            console.log(error);
            res.status(500).send({
              error: err,
              message: 'user not found'
            });
          });
      }