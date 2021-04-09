
import { Application } from 'express'
import { createServer } from './server'
import { configApp } from './config'
import loadDependencies from './dependencies'
import { route, middleware, PUT, PATCH, POST, GET, DELETE, OPTIONS, Request, Response } from './router'
const express = require('express');

export {
    Application,
    express,
    createServer,
    configApp,
    loadDependencies,
    route, middleware, PUT, PATCH, POST, GET, DELETE, OPTIONS, Request, Response
}