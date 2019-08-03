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
 -> Manuallyを選択
 -> npmを選択
 -> 既存の2つ以外にRouterとVueXを選択
 -> その他よしなに選択して./settingに保存
```

# 実行
```
npm install -g @vue/cli
npm install -g firebase-tools
cd app
npm install
```
で必要なパッケージが全て入ります。

#初期設定
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
