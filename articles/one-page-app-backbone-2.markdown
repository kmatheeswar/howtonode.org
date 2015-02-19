Title: One Page Application with Backbone.js
Author: Matheeswar, Koushik
Date: Thu Feb 19 2015 19:25:52 GMT+0500 (IST)
Node: v0.10.24

## REST Services used

A deployed CORS enabled version of this server is available at

`http://backbonejs-beginner.herokuapp.com`

The server code base can be found [here](https://github.com/thomasdavis/video-backbone-beginner-server).

The example runs against this server which exposes the API shown below

Used for populating our users collection

**GET** /users - _Returns an array of user objects e.g. `[{firstname: 'Thomas', lastname: 'Davis', age: 12}]`_

Used for populating our user model

**GET** /users/:id - _Returns a single user object e.g. `{id: 'xxxx', firstname: 'Thomas', lastname: 'Davis', age: 12}`

**POST** /users - _Creates a user based off the payload and returns the new user object e.g. `{id: 'xxxx', firstname: 'Thomas', lastname: 'Davis', age: 12}`_

**PUT** /users/:id - _Updates the given user with the given payload and returns the newly updated user object_

**DELETE** /users/:id - _Deletes the given user from the server_

<one-page-app-backbone/server/server.js>


## Installation steps for redis
	$ wget http://download.redis.io/releases/redis-2.8.19.tar.gz
	$ tar xzf redis-2.8.19.tar.gz
	$ cd redis-2.8.19
	$ make



