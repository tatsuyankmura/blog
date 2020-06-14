---
title: 【メモ】DockerのMySQLをリストアする方法
date: '2020-06-14'
description: DockerとMySQLの初心者によるDockerのMySQLリストアのメモ。
tags: ['Docker', 'MySQL']
---

## 手順

1. コンテナにsqlファイルをコピー
2. コンテナに接続
3. リストア

```
docker cp /Users/my_name/Desktop/dump.sql CONTAINER_NAME:/tmp/dump.sql

docker exec -it CONTAINER_NAME /bin/bash

mysql -u root -p DATABASE_NAME < ./tmp/dump.sql
```

コンテナにコピーをしてなかったのでうまくできていなかった。