import path from "path";
import fs from "fs";
import matter from "gray-matter";

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
