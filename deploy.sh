#!/bin/bash
cd /var/www/proxyhorn
git pull origin main
npm install
npm run build
pm2 restart proxyhorn
