# Critics Component

This is the critics component for the Spotted Potatoes Movie Review Site.

## Table Of Contents

* [Getting Started](#Getting-Started)
* [Installing](#Installing)
* [Deployment](#Deployment)
* [Running the Tests](#Running-the-tests)
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
In the directory of the repo:

```
set environment variable newrelic="newrelic key"
npm install
npm run build
npm run set-port (only works for linux machines to forward the default port 80 to direct to port 9003)
npm run start (uses PM2 and can be stopped with 'npm run stop')
```

## Deployment

Performance will increase if you host your database on at least one seperate machine.
Make sure your RDS has mongodb installed.
The default connection to the database uses the root user as well as no password at the localhost:27017.
You may manipulate these variables by adding the following environment variables:

```
RDS_HOST="databaseUrl"
RDS_USER="databaseUser"
RDS_PASSWORD="databasePassword"
RDS_PORT="databasePort"
```

Substitute "databaseURL" for the database url, "databaseUser" for the user, and so on to avoid default values.

## Running-the-tests

To run the jest tests use 'npm run test' which are located in the test folder.

### Breakdown

```
'npm run test'
Tests are run using jest. Currently under work, testing will be added soon.
```

## Technologies

* Node
* React
* React-DOM
* mongodb
* Axios
* Express
* Webpack
* Path
* Jest
* Babel
* Webpack
* Valdiator
* Google-Maps-React
* PM2
* Body-parser
* Morgan
* Compression

## Version-History

* 0.1
    * Skeleton Code for build.
    * See [commit change](https://github.com/jonathan-raitses/localmarket/commit/b2fbe29bff0a3888cf2fd092d1d68a0b062fb86a)

## Authors

* **Jonathan Raitses** - [Jonathan-Raitses](https://github.com/jonathan-raitses)

See also the list of [contributors](https://github.com/jonathan-raitses/localmarket/graphs/contributors) who participated in this project.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
