#!/usr/bin/env bash

# 当发生错误时中止脚本
set -e

# 构建
#npm run build
yarn build

# cd 到构建输出的目录下
cd dist

git init
git add .
git commit -m 'deploy'
git branch -M 'main'

# 部署到 github
git remote add github git@github.com:ioudan/morney-vue.git
git push -u github main -f

# 部署到 gitee
git remote add gitee git@gitee.com:ioudan/morney-vue.git
git push -u gitee main -f

cd -