<p align="center">
  <a href="https://github.com/unicop/pmac/" target="blank"><img src="./images/pmac-logo.png" width="120" alt="pmac Logo" /></a>
</p>
<p align="center">A CLI tool to manage <a href="https://www.postman.com/" target="_blank">Postman</a> as code, together with <a href="https://www.openapis.org/">OpenAPI</a> for building well defined APIs that easy to well-specify, validate, and verify with API tests from your repository for scalable applications.</p>

 <p align="center">
  <a href="https://github.com/unicop/pmac" target="_blank">
    <img src="https://img.shields.io/github/last-commit/unicop/pmac" alt="Last Commit" />
  </a>
  <a href="https://npmjs.org/package/pmac" target="_blank">
    <img src="https://img.shields.io/npm/v/pmac.svg" alt="NPM Version" />
  </a>
  <a href="https://circleci.com/gh/pmac/tree/tree/main" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/unicop/pmac/main" alt="CircleCI" />
  </a>
  <a href="https://npmjs.org/package/pmac" target="_blank">
    <img src="https://img.shields.io/npm/dm/pmac.svg" alt="Downloads/Month" />
  </a>
  <a href="https://github.com/unicop/pmac/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/pmac.svg" alt="License" />
  </a>
  <br/>
  <a href="https://github.com/unicop/pmac" target="_blank">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="BuiltWithLove" />
  </a>
  <a href="https://blog.postman.com/making-the-postman-logo/" target="_blank">
    <img src="./images/inspired-by-postman.svg" alt="InspiredByPostman" />
  </a>
 </p>

## Description

pmac stands for "Postman as code", it is a CLI tool and a framework for building efficient and scalable APIs, by specifying your API following the OpenAPI standard that is giving you a set of tools out-of-the-box by itself, including validation based on the specification. Then, after having your specification pmac auto-generated your specification to postman collection, and manages the collection and other Postman entities as code in your repository while helping you to push changes from repository to Postman account, pull changes into the repository, and gives you the ability to manage Postman's entities automatically. pmac uses modern Javascript, is build with TypeScript, and centralize UX for easy and convenient usage.

## Philosophy

pmac built with the recognition of the advantage of using standards and widely known existing products to fit for many different use-cases scenarios, and also to be easy to migrate to.

In other words, not aiming for inventing the wheel, but for connecting the dots.

In today's competitive world, the number of requests grows exponentially, clients have a very high standard for digital products even unconsciously, and resources are expensive, APIs should be built with strong fundamentals for standing the demand for scaling up.

Having this understanding in mind, pmac aims to be the "glue" of 3 domains any API required to manage - Specification, Validation, Verification.

* Specification with OpenAPI (v3)
* Validation by using the specification
* Verification by auto-generating & managing API tests with postman as code in your repository

## Features

* Integrated with [Postman API](https://www.postman.com/), using an API key, you pass to pmac
* Priortizing user experience using
  * Supports auto-completion and help guides by using [oclif](https://github.com/oclif/oclif) CLI framework
  * Enables user inputs using [inquirer](https://github.com/SBoudrias/Inquirer.js/)
  * Indication of the step in a process using [listr2](https://github.com/cenk1cenk2/listr2)
* Postman Collections supported commands
  * Pull - into repository from your PM account
  * Push - into PM account from repository
  * Create and Update automatically from your OpenAPI spec yml
  * Delete - both local (repo), and remote (PM account)
  * Execute - run Postman collection fully integrated with [newman](https://github.com/postmanlabs/newman)
    * support all its feature, including [cli](https://github.com/postmanlabs/newman#cli-reporter), [html](https://github.com/postmanlabs/newman#html-reporter),[htmlextra](https://github.com/DannyDainton/newman-reporter-htmlextra),[json](https://github.com/postmanlabs/newman#html-reporter),[junit](https://github.com/postmanlabs/newman#html-reporter) reporters
* Postman Environments Commands
  * Create, Delete, Pull, and Push
* Postman Workspaces
  * Create - Create new workspace and push into PM account
  * Pull - Pulls a workspace into your repo
  * Delete
  * Fetch - fetch changes from the existing workspaces in repo
  * Pull all - pulls the whole postman account
* With Collection.Execute it is possible to run pmac in CI/CD pipelines
* Auto-generated Postman collections out from OpenAPI specification - Works with [openapi-to-postmanv2](https://github.com/postmanlabs/openapi-to-postman) under-the-hood
* By managing Postman entities you get all Postman features out-of-the-box, convenient UI, tests, pre-request-scripts, EVERYTHING.

## Getting Started

* A good start will be to have a basic openapi specification for your API
* To check out the [commands](./COMMANDS.md), click [here](./COMMANDS.md)
* pmac official docs (Soon...)

## License

pmac is [MIT licensed](./LICENSE)
