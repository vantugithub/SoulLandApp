import {
    Dimensions,
    FlatList,
    View,
  } from 'react-native';
import Comment from "./comment";
import Inputcomment from './InputComment';
const windowHeight = Dimensions.get('window').height;
function Comments(props) {
    
    const data = props.data;
    const lenData = props.data.length*50;
    
return (
    <View>
    {
         data.map((item,index)=>(
            <Comment key={index} data={item}></Comment>
         ))
    }
    <Inputcomment windowHeight = {windowHeight} lenData = {lenData}></Inputcomment>
    </View>
    
);
}

export default Comments;
