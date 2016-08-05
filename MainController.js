app.controller('MainController', function($scope) {
    $scope.postsArray = [];
    $scope.votes = 0;

    $scope.createPost = function(userInput, userLink){

        post = {
            text: userInput,
            link: userLink,
            votes: 0
        };

        $scope.postsArray.unshift(post);
    };

    $scope.voteUp = function(){
        this.post.votes += 1;
    };


    for(var i = 0; i < $scope.postsArray.length; i++) {

    };
});