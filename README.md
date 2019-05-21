# Critics Component

This is the critics component for the Spotted Potatoes Movie Review Site.

## Table Of Contents

* [Getting Started](#Getting-Started)
* [Installing](#Installing)
* [Deployment](#Deployment)
* [Running the Tests](#Running-the-tests)
  * [Stress Test](#Stress-Test)
  * [Breakdown](#Breakdown)
* [Technologies](#Technologies)
* [Version History](#Version-History)
* [Authors](#Authors)
* [License](#License)

<!-- toc -->

## Getting-Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installing

Make sure the machine you are running the server on has node installed.
The default connection to the server uses localhost at port 9003.

Else comment out the first line in server/server.js (require("newrelic"))

In the directory of the repo:

```
npm install
npm run build
(optional) npm run set-port (only works for linux machines to forward the default port 80 to direct to port 9003)
```

## Deployment

Performance will increase if you host your database on at least one seperate machine from your service.
Make sure your RDS has mongodb installed.
The default connection to the database uses the root user as well as no password at the localhost:27017.
You may manipulate these variables by adding the following environment variables with substituted values:

```
DB_HOST="Database Url"
DB_USER="Database User"
DB_PASS="Database Password"
DB_NAME="Database Name"
```

If you would like to use newrelic for data metrics on what requests users are making to the server:
```
set environment variable newrelic="newrelic key"
```

You can also optionally spin up docker containers on your service hosts. Adjust the above environment variables in Dockerfile first.

## Running-the-tests

### Stress-Test

You can look at New Relic to metrics if you enabled it.

You can also use Artillery if you prefer it over New Relic which will display in terminal:

```
Adjust the target url in stress.yml to your host service url, and adjust the duration and arrival rate.
artillery run stress.yml
```

### Breakdown

To run the jest tests use 'npm run test' which are located in the test folder.

```
'npm run test'
Tests are run using jest. Currently under work, testing will be added soon.
```

## Technologies

* Node
* React
* React-DOM
* React-Columns
* MySQL
* Axios
* Express
* Webpack
* Path
* Jest
* Babel
* Webpack
* PM2
* Body-parser
* Morgan
* Compression
* Docker
* NewRelic
* Artillery
* AWS
* Faker
* Html-Webpack-Plugin

## Version-History

* 2.0
  * Current working version with proxy, docker containers, load balancing, metrics, and upgraded queries.
  * See [commit change](https://github.com/Cherry-OnTop/Critics/commit/7947b972d8cf0aceb9f6889642ae1a132efebfd6)
* 1.0
  * Legacy code base from [Cbenz88](https://github.com/Cbenz88)
  * See [commit change](https://github.com/Cherry-OnTop/Critics/commit/b3995c2f4b6dac6014d4b1c385dbf2e91f0fd850)

## Authors

* **Jonathan Raitses** - [Jonathan-Raitses](https://github.com/jonathan-raitses)
* **Charlie Bencivenga** - [Cbenz88](https://github.com/Cbenz88)

See also the list of [contributors](https://github.com/Cherry-OnTop/Critics/graphs/contributors) who participated in this project.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
