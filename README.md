# news-aggregator

RESTful API that allows users to fetch news articles

The API will allow users to register, log in, and set their news preferences (e.g., categories, sources). The API will then fetch news articles from multiple sources using external news APIs (e.g., NewsAPI). The fetched articles should be processed and filtered asynchronously based on user preferences.

**Requirements**:

1. Set up a basic Node.js project with Express.js and other necessary NPM packages.
2. Implement user registration and login using bcrypt and JWT for password hashing and token-based authentication.
3. Create an in-memory data store (e.g., an array) to store user information and their news preferences.
4. Implement a RESTful API with the following endpoints:
   - `POST /register`: Register a new user.
   - `POST /login`: Log in a user.
   - `GET /preferences`: Retrieve the news preferences for the logged-in user.
   - `PUT /preferences`: Update the news preferences for the logged-in user.
   - `GET /news`: Fetch news articles based on the logged-in user's preferences.
5. Use external news APIs to fetch news articles from multiple sources. Incorporate async/await and Promises in the process of fetching news data and filtering it based on user preferences.
6. Implement proper error handling for invalid requests, authentication errors, and authorization errors.
7. Add input validation for user registration and news preference updates.
8. Test the API using Postman or Curl to ensure it works as expected.

**Optional extension**:

1. Implement a caching mechanism to store news articles and reduce the number of calls to external news APIs. Use async/await and Promises to handle cache updates and retrievals.
2. Allow users to mark articles as "read" or "favorite". Implement endpoints to:
   - `POST /news/:id/read`: Mark a news article as read.
   - `POST /news/:id/favorite`: Mark a news article as a favorite.
   - `GET /news/read`: Retrieve all read news articles.
   - `GET /news/favorites`: Retrieve all favorite news articles.
3. Implement an endpoint to search for news articles based on keywords: `GET /news/search/:keyword`.
4. Implement a mechanism to periodically update the cached news articles in the background, simulating a real-time news aggregator.
