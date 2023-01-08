# astro-microCMS

## About
microCMS公式が出してる記事
- [Astro と microCMS でつくるブログサイト](https://blog.microcms.io/astro-microcms-introduction/)
- [Astro と microCMS を使った画面プレビューを実装する](https://blog.microcms.io/astro-preview/)

を元に astro と microCMS を使った Web サイト実装を学習するためのリポジトリ

## Dependencies
### versions
```
astro: 1.9.0
microcms-js-sdk: 2.3.2
```
### environment
1. microCMSのアカウントを発行し、blogsというエンドポイントのAPIを作成
2. blogsエンドポイントのAPIにtitle, contentというフィールドIDを持つスキーマを作成
3. microCMSでAPIキーを発行
4. プロジェクトルートに.envファイルを置き
    ```shell
    MICROCMS_SERVICE_DOMAIN={microCMSの自分のドメイン名}
    MICROCMS_API_KEY={microCMSで発行したAPIキー}
    ```
    という行を追加する

## Install
```bash
$ npm i
```

## Commands
開発モード
```bash
$ npm run dev
```

ビルド
```bash
$ npm run build
```

ローカルホスト立ち上げ
```bash
$ npm start
```

ビルド済みデータのプレビュー
```bash
$ npm run preview
```

## メモ帳
https://www.notion.so/astro-eaf56891fb45433fb79899d6033e20bd
