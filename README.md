# kajilog

## 概要
家事・育児タスクを可視化・管理する
どれくらいの負担割合になっているかを見えるようにする目的で開発

## 実行準備
- AuthUserの登録は、管理者のみ行える。Supabase AuthのUsersテーブルに手動で追加する。
- firebase hosting Supabaseのテーブルを作成する。
- cicd.ymlを適宜修正し、GHAのシークレットを登録する。
- .envファイルを作成する。

## 開発環境
- Vite
- TypeScript
- React V19
  - React Router
  - react-hook-form
  - vitest
  - testing-library
  - Jotai
- Chakra UI V3

- GitHub Actions
- Firebase Hosting
- Supabase, Auth

## アノテーションコメント凡例
### // TODO: 後で実装する
### // FIXME: 修正が必要
### // HACK: 一時的な解決策
### // NOTE: 重要なポイント
### // OPTIMIZE: パフォーマンス改善の余地あり
### // XXX: 動くけどよくわかってない
