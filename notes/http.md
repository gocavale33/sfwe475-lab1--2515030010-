# HTTP Request Investigation

## Request

URL: https://jsonplaceholder.typicode.com/todos/1

Status: 200

Source: Network

Address: 172.67.167.151:443

## Challenge

The 4xx status code family means that the request contains an error on the client side, such as a resource that cannot be found.

Scheme: https
Host: jsonplaceholder.typicode.com
Path: /todos/99999

## Stretch

Query string: userId=1

The query string filters the todos and returns only the todos belonging to user 1.

### POST Request

A POST request sends data to the server to create or process something, while a GET request is mainly used to retrieve data.