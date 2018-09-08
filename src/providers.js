import YouTubeVideo from './components/YouTubeVideo'
import getYoutubeId from 'get-youtube-id'


const youtubeParser = search => (
    search.length >= 5 && search.length <= 11 ? search : getYoutubeId(search)
)

export default  {
    youtube: {placeholder: "Insert URL or videoID", component: YouTubeVideo, parser: youtubeParser},
}
