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

# Vueのプロジェクト作成(最初に行ったので実行不要)
```
vue create cfuhp
```

# 実行
```
cd cfuhp
npm run serve
```

#firebaseとの接続
```
npm run build → distフォルダの作成
firebase init hosting
-> public directoryとしてdistを選択
firebase deploy -> deployされる
```
