import fetchAndPopulate from './fetch-and-populate'
import fetchStories from './fetch-stories'

async function fetchContent() {
  const rankings = await fetchAndPopulate()
  const stories = await fetchStories()
  const findStory = number => {
    const story = stories.find(story => story.number === number)
    return story ? story.contents : ''
  }
  console.log(rankings.length, 'rankings found')
  return rankings.map(report => ({
    ...report,
    story: findStory(report.number)
  }))
}

export default fetchContent
