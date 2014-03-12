//var savePost = function(req, res) {
//    var newPost = new Post({
//        title: req.body.title,
//        body: req.body.body,
//        _owner: req.body._owner
//    });
//    newPost.save(function(err) {
//        if(err){
//
//        } else {
//            //Push the new post to the user
//            User.findByIdAndUpdate(req.body._owner, { $push: { posts: newPost._id }}, function (err, user) {
//                if(err) {
//                    return handleError(err);
//                } else{
//                    res.send(user);
//                }
//            });
//            res.send({success:true});
//        }
//    });
//};