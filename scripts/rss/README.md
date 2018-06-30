# RSS feed

Goal: build the RSS feed linked from [Best of JavaScript](https://bestofjs.org)

Generate `/dist/rss/trends.xml` XML, from the ramkings JSON file.

Output:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Best of JavaScript - Weekly trends</title>
    <link>https://bestofjs.org/projects/trending/this-week</link>
    <pubDate>Fri Jun 29 2018 21:40:42 GMT+0900 (JST)</pubDate>
    <lastBuildDate>Fri Jun 29 2018 21:40:42 GMT+0900 (JST)</lastBuildDate>
    <item>
      <title>Vue.js [+2668 stars this week]</title>
      <author>vuejs</author>
      <description>🖖 A progressive, incrementally-adoptable JavaScript framework for building UI on the web.</description>
      <link>http://vuejs.org</link>
      <pubDate>2018-06-22T15:08:40.000Z</pubDate>
      <image>https://bestof.js.org/logos/vue.svg</image>
    </item>
    <item>
      <title>React [+2328 stars this week]</title>
      <author>facebook</author>
      <description>A declarative, efficient, and flexible JavaScript library for building user interfaces.</description>
      <link>https://reactjs.org</link>
      <pubDate>2018-06-23T09:49:52.000Z</pubDate>
      <image>https://bestof.js.org/logos/react.svg</image>
    </item>
    <item>
      <title>Polly.JS [+1742 stars this week]</title>
      <author>Netflix</author>
      <description>Record, Replay, and Stub HTTP Interactions.</description>
      <link>https://netflix.github.io/pollyjs</link>
      <pubDate>2018-06-23T08:38:31.000Z</pubDate>
      <image>https://avatars.githubusercontent.com/u/913567?v=3&amp;s=200</image>
    </item>
    <item>
      <title>JavaScript Algorithms and Data Structures [+1452 stars this week]</title>
      <author>trekhleb</author>
      <description>Algorithms and data structures implemented in JavaScript with explanations and links to further readings</description>
      <link/>
      <pubDate>2018-06-23T18:00:19.000Z</pubDate>
      <image>https://avatars.githubusercontent.com/u/3000285?v=3&amp;s=200</image>
    </item>
    <item>
      <title>Docz [+1352 stars this week]</title>
      <author>pedronauck</author>
      <description>✍🏻It has never been so easy to document your things!</description>
      <link>https://docz.site</link>
      <pubDate>2018-06-22T22:17:09.000Z</pubDate>
      <image>https://avatars.githubusercontent.com/u/2029172?v=3&amp;s=200</image>
    </item>
    <item>
      <title>deno [+1273 stars this week]</title>
      <author>ry</author>
      <description>A secure TypeScript runtime on V8</description>
      <link/>
      <pubDate>2018-06-23T20:28:24.000Z</pubDate>
      <image>https://avatars.githubusercontent.com/u/80?v=3&amp;s=200</image>
    </item>
    <item>
      <title>Vue Native [+804 stars this week]</title>
      <author>GeekyAnts</author>
      <description>Vue Native is a framework to build cross platform native mobile apps using JavaScript</description>
      <link>https://vue-native.io</link>
      <pubDate>2018-06-19T05:54:50.000Z</pubDate>
      <image>https://avatars.githubusercontent.com/u/18482943?v=3&amp;s=200</image>
    </item>
    <item>
      <title>ml5.js [+717 stars this week]</title>
      <author>ml5js</author>
      <description>Friendly machine learning for the web! 🤖 </description>
      <link>https://ml5js.org</link>
      <pubDate>2018-06-23T20:03:17.000Z</pubDate>
      <image>https://avatars.githubusercontent.com/u/36965392?v=3&amp;s=200</image>
    </item>
    <item>
      <title>Rough.js [+688 stars this week]</title>
      <author>pshihn</author>
      <description>Create graphics with a hand-drawn, sketchy, appearance</description>
      <link>http://roughjs.com</link>
      <pubDate>2018-06-20T21:31:52.000Z</pubDate>
      <image>https://avatars.githubusercontent.com/u/833927?v=3&amp;s=200</image>
    </item>
    <item>
      <title>VS Code [+515 stars this week]</title>
      <author>Microsoft</author>
      <description>Visual Studio Code</description>
      <link>https://code.visualstudio.com</link>
      <pubDate>2018-06-23T19:52:50.000Z</pubDate>
      <image>https://bestof.js.org/logos/vscode.svg</image>
    </item>
  </channel>
</rss>
```
