# cfuhp
Code for UnivのHP用リポジトリ

# 環境構築
```
git clone
cd cfuhp
make docker/build
make docker/start
make docker/exec
```

# Vueのプロジェクト作成
```
vue create cfuhp
 -> defaultを選択
 -> npmを選択
```

# 実行
```
cd cfuhp
npm run serve
```

# firebaseとの接続
```
npm run build
-> distフォルダの作成
firebase login --no-localhost
firebase init hosting
-> public directoryとしてdistを選択
```
deploy後、うまく表示されない場合はもう一度buildしてからdeployする

# deploy
```
npm run build -> distを更新する
firebase deploy -> deployされる
```

# モジュールのインストール(本当はbuildで入って欲しいがなぜか入らない)
```
npm i bootstrap-vue
```
