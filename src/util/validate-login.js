import user_example from '../assets/img/user/user_example.jpg';// only for testing purposes


// could also be {username,password}
export default function(username,password,setUser){

  // this is only a placeholder and will be replaced by fetch api later on
  if(username==='hello' && password==='world')
    return {username,password,img:user_example}; // question: bc reza is not imported in other modules, will it cause problems? (apparantly not)

  // else :
  // 1. validate via server
  // 2. use the setUser function (which can ONLY be inheritted due to it's hook nature) to set the fucker (without password ofcourse);
  return null;
};
