import Posts from './components/posts'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react';
import Post from './components/post';

const queryClient = new QueryClient();
function App() {

  const [postId, setPostId] = useState(-1);
  return (
  <QueryClientProvider client={queryClient}> 
  {postId > -1 ? <Post /> : <Posts setPostId={setPostId}/>}
  </QueryClientProvider>
  )
}

export default App
