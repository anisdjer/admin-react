import RouteGenerator from './route-generator'

const apiRoutes = new RouteGenerator({
  schema: 'http',
  host: 'localhost:3000',
  prefix: 'api'
});

apiRoutes.generateRoute = (...args) => {
  args[2] = true;

  return apiRoutes.generate(...args);
}

apiRoutes.addRoute('user_tweets', '/users/{userId}/tweets');
apiRoutes.addRoute('users', '/users');
apiRoutes.addRoute('tweets', '/tweets');
apiRoutes.addRoute('user', '/users/{userId}');
apiRoutes.addRoute('tweet', '/tweets/{tweetId}');

export default apiRoutes;
