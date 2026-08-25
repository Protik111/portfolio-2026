const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

exports.generate = async () => {
  const feed = new RSS({
    title: "Rafiur Rahman Protik",
    description: "Hey! I am Protik, a full-stack developer from Bangladesh.",
    feed_url: "https://protikdev.vercel.app/rss.xml",
    site_url: "https://protikdev.vercel.app",
    managingEditor: "Rafiur Rahman Protik",
    webMaster: "Rafiur Rahman Protik",
    language: "en",
    copyright: `Rafiur Rahman Protik | ${new Date().getFullYear()}`,
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "data", "blogs"));

  await Promise.all(
    posts.map(async (filename) => {
      const blogsData = await fs.readFile(
        path.join(path.join(__dirname, "..", "data", "blogs", filename))
      );

      const frontmatter = matter(blogsData);

      feed.item({
        title: frontmatter.data.title,
        description: frontmatter.data.subtitle,
        url: frontmatter.data.url,
        author: "Rafiur Rahman Protik",
        date: frontmatter.data.date,
        categories: frontmatter.data.tags?.split(", "),
      });
    })
  );

  await fs.writeFile("./public/rss.xml", feed.xml({ indent: true }));
};
