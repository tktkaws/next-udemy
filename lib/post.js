import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");
// console.log(postsDirectory);

// mdファイルのデータを取り出す
export function getPostData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // idを取得するためにファイル名の拡張子を除外
    const id = fileName.replace(/\.md$/, "");

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //投稿のメタデータ部分を解析
    const matterResult = matter(fileContents);

    //idとデータを返す。
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

//動的ルーティング時に設定
//postsディレクトリの中の全てのファイル名をリストで返す
// 以下のような配列を返します:
// [
//   {
//     params: {
//       id: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       id: 'pre-rendering'
//     }
//   }
// ]
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      //あとで、これら(id)がルーティングのパスになる。
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

//idに基づいてブログの投稿データを返す
export async function getPostDataID(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContent);
  // console.log(matterResult);

  // マークダウンをHTML文字列に変換するためにremarkを使う
  const blogContent = await remark().use(html).process(matterResult.content);
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);

  const blogContentHTML = blogContent.toString();
  // const contentHTML = processedContent.toString();
  // console.log(contentHTML);

  //データをidと組み合わせる。
  return {
    id,
    blogContentHTML,
    // contentHTML, //あとで追加
    ...matterResult.data,
  };
}
