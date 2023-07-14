import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Avatar from './components/Avatar';

function App() {

  const user = {
    name: 'Christopher Robin',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6YMQLTJQKHu_ptClOW3VNFTP1KRLYSuTAmCe8JN1bKRL42b2AemxD_jp-b8s7cl3r_o&usqp=CAU”',
    imageSize: 90,
  }; 
  return (
    <>
    <MyButton title={"Add to cart"}/>
    <MyButton title={"Find out more"}/>

    <Avatar user={user}/>
    </>
    
  );
}

export default App;