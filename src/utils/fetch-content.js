import fetchAndPopulate from './fetch-and-populate'
import fetchStories from './fetch-stories'

export default async function fetchContent() {
  const rankings = await fetchAndPopulate()
  console.log(rankings.length, 'rankings found')

  const stories = await fetchStories()
  console.log(stories.length, 'stories found')

  const findStory = number => {
    const story = stories.find(story => story.number === number)
    return story ? story.contents : ''
  }

  return rankings.map(report => ({
    ...report,
    story: findStory(report.number)
  }))
}
