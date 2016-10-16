class postsModel {
    constructor($q) {
        'ngInject';

        this.$q = $q;

        this.posts = [
            {
                id: 1,
                title: 'Post 1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis et orci in sagittis. Mauris nec rhoncus mauris. Vivamus eu quam blandit, tincidunt tortor nec, egestas ante. Phasellus ut iaculis quam, vel posuere felis. Curabitur non nunc sed dui sollicitudin vulputate. Nulla eget laoreet est, eget scelerisque tortor. Phasellus est ante, ornare vel ante id, aliquam cursus velit. Curabitur a egestas eros, id lobortis dolor. In massa tellus, rhoncus sit amet imperdiet eu, vehicula nec lacus. Maecenas commodo, risus ut cursus molestie, eros dui consectetur enim, nec cursus mi urna sed elit.'
            }, {
                id: 2,
                title: 'Post 2',
                content: 'Mauris volutpat suscipit nunc malesuada mattis. Suspendisse orci enim, vehicula ut congue ultricies, imperdiet vitae neque. Suspendisse eu diam finibus erat convallis gravida sit amet commodo nisi. Etiam varius diam felis, et venenatis enim pulvinar et. Aenean eu fermentum purus, non luctus diam. Suspendisse quis erat sem. Proin pellentesque, leo eu vehicula tempor, quam nisi vestibulum est, et imperdiet mauris felis et urna. Nulla ut justo suscipit sapien scelerisque bibendum vel in arcu. Vivamus suscipit sem felis, sed molestie nisi dictum tristique. Suspendisse sagittis dictum elit ac eleifend. Aenean in lacus sodales, fermentum ligula scelerisque, tempus elit.'
            }, {
                id: 3,
                title: 'Post 3',
                content: 'In blandit, orci sed tristique semper, ante risus egestas felis, imperdiet efficitur erat mauris ac velit. Donec luctus, quam vitae tempus luctus, nisl risus fermentum tellus, a tempus nisi nulla eu erat. Nam at arcu tempus, ornare sem eget, commodo felis. Quisque eget pellentesque orci. Sed sed mi et sem bibendum auctor id ac turpis. Nulla ut vulputate turpis. Donec bibendum congue augue vehicula placerat. Vestibulum sed mi varius leo auctor iaculis. Aenean suscipit magna mauris, ac rhoncus nibh cursus commodo. Cras vehicula finibus dolor, sit amet pulvinar sapien ultrices a.'
            }, {
                id: 4,
                title: 'Post 4',
                content: 'Morbi pharetra elit a ligula volutpat, nec aliquet eros tincidunt. Aliquam vitae condimentum velit. Donec convallis nec nisl posuere pretium. Proin fringilla mauris at massa volutpat lacinia. Quisque pulvinar congue velit, faucibus tristique ante tempus id. Suspendisse in tempus odio. Integer massa felis, aliquam non volutpat a, consequat quis nisl. Vestibulum vitae consectetur tortor. Ut mollis, justo interdum tristique hendrerit, nisl nulla venenatis turpis, scelerisque faucibus diam erat sit amet diam. Curabitur risus enim, tristique eget dapibus at, volutpat maximus risus. Sed faucibus leo sit amet suscipit sagittis. Praesent vel blandit quam. Ut eget mollis mi. Nullam metus sem, dictum vestibulum aliquam id, tempor sed diam. Proin maximus orci et sem ultricies, ut convallis orci consectetur.'
            }, {
                id: 5,
                title: 'Post 5',
                content: 'Morbi ut mauris non orci placerat aliquam. Quisque ut malesuada lorem, a aliquet metus. Quisque fringilla dolor ac metus semper lobortis. Suspendisse pretium augue sit amet ligula egestas, at suscipit orci imperdiet. Quisque condimentum gravida ante sit amet feugiat. Curabitur pretium facilisis felis sed euismod. Aliquam convallis consectetur tellus sit amet mollis. Curabitur sem dolor, ultrices quis tincidunt quis, ultricies vel tortor. Vivamus tempor, dolor non facilisis venenatis, massa lectus dignissim enim, nec lobortis enim metus in urna. Sed ut facilisis risus. Duis id mattis nisi, vel consequat dolor.'
            }
        ];
    }

    getPosts() {
        return this.$q.when(this.posts);
    }

    // Additional CRUD stuff
}

export default postsModel;
