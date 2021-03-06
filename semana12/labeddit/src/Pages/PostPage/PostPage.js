import axios from 'axios'
import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { Container, PostCard, Title, Text, Name, CardFooter,ConfigTextField } from './styled'
import Button from '@material-ui/core/Button';

function PostPage() {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
   axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", {
        headers:{
         Authorization: localStorage.getItem("token")
        }
      })
      .then((response) => {
        console.log(response.data)
        setPosts(response.data.posts)
      })
      .catch((err) => {
        console.log("hummmm caiu aki", err);
      });
  };

  useEffect(() => {
    getPosts()
  }, [])


  const votePost = (vote, postId) => {
    const token = window.localStorage.getItem("token")
    const body = {
      direction: vote
    }
    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`, body, {headers:{
        Authorization: token
      }}).then(reponse => {
        console.log(reponse)
      }).catch(error => {
        console.log(error)
      })
  }


  return (
    <Container>
      <ConfigTextField>

<TextField id="outlined-basic" label="Digite seu post" variant="outlined" size="small" />
<Button 
        
          size="large" 
          variant="text" 
          color="primary">Postar
          </Button>

</ConfigTextField>



       {posts.map((item) => {
    return(
  <PostCard>
      <Title>{item.title}</Title>
      <Text>{item.text}</Text>
      <Name>{item.username}</Name>
      <p>{item.votesCount}</p> 
      <CardFooter>

        {/* {item.userVoteDirection}  */}
        <p>{item.commentsCount} coments</p>

      </CardFooter>
  </PostCard>
    )  
  })
} 

    </Container>
  );
}
export default PostPage;