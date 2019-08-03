# cfuhp
Code for UnivのHP用リポジトリ

# 環境構築
```
git clone
make up
make logs
```

# Vueのプロジェクト作成(不要)
```
vue create cfuhp
 -> Manuallyを選択
 -> npmを選択
 -> 既存の2つ以外にRouterとVueXを選択
 -> その他よしなに選択して./settingに保存
```

#初期設定(不要)
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
