
import { Application } from 'express'
import { createServer } from './server'
import { configApp } from './config'
import loadDependencies from './dependencies'
import { Request, Response } from 'express'
import { GET, route, before as middleware, POST, PATCH, PUT, OPTIONS, DELETE } from 'awilix-express';
const express = require('express');

export {
    Application,
    express,
    createServer,
    configApp,
    loadDependencies,
    route, middleware, PUT, PATCH, POST, GET, DELETE, OPTIONS, Request, Response
}