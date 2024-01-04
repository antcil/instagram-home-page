import Navbar from "./components/Navbar"
import Posts from "./components/Posts"
import Stories from "./components/Stories"
import storyData from "./data/storyData"
import postData from "./data/postData"

function App() {
  const stories = storyData.map(item => {
    return (
      <Stories 
        key={item.id}
        profilePic={item.profilePic}
        username={item.username}
        isSelf={item.isSelf}
      />
    )
  })

  const posts = postData.map(post => {
    return (
      <Posts 
        key={post.id}
        postPfp={post.postPfp}
        username={post.username}
        location={post.location}
        postPic={post.postPic}
        caption={post.caption}
        likes={post.likes}
        comments={post.comments}
        time={post.time}
      />
    )
  })

  return (
    <>
      <Navbar />
      <section class="story-list">
        {stories}
      </section>
      <hr class="line"/>
      <section class="post-list">
        {posts}
      </section>
    </>
  )
}

export default App
