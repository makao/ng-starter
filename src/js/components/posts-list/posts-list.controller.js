class postsListController {
    constructor(postsModel) {
        'ngInject';

        this.postsModel = postsModel;
    }

    $onInit() {
        this.postsModel.getPosts().then(result => this.posts = result);
    }
}

export default postsListController;
