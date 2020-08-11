#!/bin/bash

sudo yarn run predeploy

pm2 start yarn --interpreter bash --name api -- start
