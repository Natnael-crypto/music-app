import { Card } from '../styled components/card';
import { Head3, Head2 } from '../styled components/text';
import { Scrollable } from '../styled components/Scrollable';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSongsRequest } from '../redux/sagas/types/songTypes';


const Main = ({setmusicToPlay,searchString}) => {
    const songs = useSelector(state =>  state);
    console.log(songs)
    const dispatch=useDispatch()

    useEffect(()=>{    
        dispatch(getSongsRequest());
    },[dispatch])

    const handleSelect=(musicToplay)=>{
        setmusicToPlay(musicToplay)
    }


    return searchString===''?(
        <Scrollable>
            <br />
            {songs.map((item, index) => (
                <Card key={index} onClick={()=>handleSelect(item)}>
                    <div>
                      <Head2>
                        {item.Artist_name}
                    </Head2>  
                    </div>
                    <div>
                      <Head3>
                        {item.music_name}
                    </Head3>  
                    </div>
                </Card>
            ))}
        </Scrollable>
    ):<Scrollable>
        <br />
        {songs.map((item, index) => {
            
            if (item.music_name.includes(searchString)){
                return(
                <Card key={index} onClick={()=>handleSelect(item)}>
                    <div>
                      <Head2>
                        {item.Artist_name}
                    </Head2>  
                    </div>
                    <div>
                      <Head3>
                        {item.music_name}
                    </Head3>  
                    </div>
                </Card>
            )
            }
            else{
                return null;
            }
            })}
    </Scrollable>
};

export default Main;
