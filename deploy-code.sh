#!/usr/bin/env bash

# 当发生错误时中止脚本
set -e

# 部署到 github
#git remote add github git@github.com:ioudan/morney-vue-code.git
#git branch -M main
git push -u github main -f

# 部署到 gitee
#git remote add gitee git@gitee.com:ioudan/morney-vue-code.git
#git branch -M main
git push -u gitee main -f

echo "上传代码完成！"

# 执行命令  sh deploy-code.sh

