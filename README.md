# cfuhp
Code for UnivのHP用リポジトリ

# 環境構築
```
git clone
make up
make logs
```

# 初期設定(不要)
```
vue create cfuhp
 -> Manuallyを選択
 -> npmを選択
 -> 既存の2つ以外にRouterとVueXを選択
npm run build
 -> distフォルダの作成
firebase login
firebase init
 -> firestoreとDatabase、hostingを選択
 -> public directoryとしてdistを選択
```
ここまでの環境がapp内にあるので既に不要

# deploy
```
npm run build -> distを更新する
firebase deploy -> deployされる
```
