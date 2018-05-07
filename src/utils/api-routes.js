import RouteGenerator from 'route-generator'

const apiRoutes = new RouteGenerator({
  schema: 'http',
  host: 'localhost:3000',
  prefix: 'api'
});

apiRoutes.generateRoute = (...args) => {
  args[2] = true;

  return apiRoutes.generate.apply(apiRoutes, args);
}

apiRoutes.addRoute('get_user_tweets', '/users/{userId}/tweets');
apiRoutes.addRoute('get_users', '/users');
apiRoutes.addRoute('get_tweets', '/tweets');
apiRoutes.addRoute('get_user', '/users/{userId}');
apiRoutes.addRoute('get_tweet', '/tweets/{tweetId}');

export default apiRoutes;
