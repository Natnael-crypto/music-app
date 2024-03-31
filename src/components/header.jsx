import { Input } from '../styled components/input';
import { Head1, Head2 } from '../styled components/text';
import { Hero } from '../styled components/hero';
import { EditButton } from '../styled components/button';
import { DeleteButton } from '../styled components/button';
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { DELETE_SONG_BY_ID,GET_SONGS } from '../redux/sagas/types/songTypes';


const Header = ({musicToPlay,setmusicToPlay,seteditVisible,setsearchString})=>{
    const dispatch=useDispatch();
    
    
    
    const handleDelete=()=>{
        dispatch({type:DELETE_SONG_BY_ID,id:musicToPlay.uuid})
        dispatch({type:GET_SONGS})
        setmusicToPlay({})
    }

    const handleSearchStringChange = (e) => {
        setsearchString(e.target.value);
    };

    const handleEdit=()=>{
        seteditVisible(true)
    }

    return (
        <header>
            <br></br>
            <Head1>All Songs</Head1>
            <br></br>
            <br></br>
            <Input placeholder='Search' onChange={handleSearchStringChange}></Input>
            <br></br>
            <Hero>
                <Head2>
                {musicToPlay.music_name}
                </Head2>
                <Head2>
                {musicToPlay.Artist_name}
                </Head2>
                {musicToPlay.Artist_name===''?null:<EditButton onClick={handleEdit} title='Edit'>
                    <FiEdit/>
                </EditButton>}
                
                {musicToPlay.Artist_name===''?null:<DeleteButton title='Delete' onClick={handleDelete}>
                    <FaRegTrashCan/>
                </DeleteButton>}
            </Hero>
        </header>
    )
}

export default Header
