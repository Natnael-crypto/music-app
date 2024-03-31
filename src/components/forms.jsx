import { Input } from "../styled components/input"
import { Form } from "../styled components/form"
import { SubmitButton,CancelButton } from "../styled components/button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getSongsRequest,createSongRequest,updateSongRequest} from '../redux/sagas/types/songTypes';
    


export const AddSong= ({isVisible,setIsVisible})=>{

    const [musicName, setMusicName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [musicResourceLink, setMusicResourceLink] = useState('');
    const [dateOfRelease, setDateOfRelease] = useState('');
    const dispatch=useDispatch();


    const handleMusicNameChange = (e) => {
        setMusicName(e.target.value);
    };

    const handleArtistNameChange = (e) => {
        setArtistName(e.target.value);
    };

    const handleMusicLinkChange = (e) => {
        setMusicResourceLink(e.target.value);
    };

    const handleReleaseDateChange = (e) => {
        setDateOfRelease(e.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const song={
            "music_name": musicName,
            "Artist_name": artistName,
            "link": musicResourceLink,
           "date": dateOfRelease     
        }
        dispatch(createSongRequest(song));
        dispatch(getSongsRequest());
        setIsVisible(false);
    };

    const handleCancel = () => {
        setIsVisible(false)
    };

    return isVisible? (
        <div>
        <Form>
            <h3>
            Add Song
           </h3>
            <div>
                <h4>
                    Music Name
                </h4>
                <Input placeholder="Music Name" onChange={handleMusicNameChange}></Input>
            </div>
            <div>
                <h4>
                    Artist Name
                </h4>
                <Input placeholder="Artist Name" onChange={handleArtistNameChange}></Input>
            </div>
            <div>
                <h4>
                    Music Resource Link
                </h4>
                <Input placeholder="https://location" onChange={handleMusicLinkChange}></Input>
            </div>
            <div>
                <h4>
                    Date Of Release
                </h4>
                <Input placeholder="Date" type="Date" onChange={handleReleaseDateChange}></Input>
            </div>
            <br />
            <SubmitButton onClick={handleSubmit}>
                Add
            </SubmitButton>
            <CancelButton onClick={handleCancel}>
                Cancel
            </CancelButton>
        </Form> 
        </div>
        
    ):null;
}

export const EditSong = ({iseditVisible,seteditVisible,musicToPlay,setmusicToPlay})=>{

    const [musicName, setMusicName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [musicResourceLink, setMusicResourceLink] = useState('');
    const [dateOfRelease, setDateOfRelease] = useState('');
    const dispatch=useDispatch();

    useEffect(() => {
        if (musicToPlay) {
            setMusicName(musicToPlay.music_name || '');
            setArtistName(musicToPlay.Artist_name || '');
            setMusicResourceLink(musicToPlay.link || '');
            setDateOfRelease(musicToPlay.date || '');
        }
    }, [musicToPlay]);

    const handleMusicNameChange = (e) => {
        setMusicName(e.target.value);
    };

    const handleArtistNameChange = (e) => {
        setArtistName(e.target.value);
    };

    const handleMusicLinkChange = (e) => {
        setMusicResourceLink(e.target.value);
    };

    const handleReleaseDateChange = (e) => {
        setDateOfRelease(e.target.value);
    };

    const handleSubmit =()=>{
        const song={
            'uuid':musicToPlay.uuid,
            "music_name": musicName,
            "Artist_name": artistName,
            "link": musicResourceLink,
           "date": dateOfRelease     
        }
        dispatch(updateSongRequest(song));
        dispatch(getSongsRequest());
        setmusicToPlay(song)
        seteditVisible(false);
    }

    const handleCancel = () => {
        seteditVisible(false)

    };
    return iseditVisible? (
            <div>
            <Form>
                <h2>
                Edit Song
               </h2>
                <div>
                    <h4>
                        Music Name
                    </h4>
                    <Input placeholder="Music Name" onChange={handleMusicNameChange} value={musicName} ></Input>
                </div>
                <div>
                    <h4>
                        Artist Name
                    </h4>
                    <Input placeholder="Artist Name" onChange={handleArtistNameChange} value={artistName} ></Input>
                </div>
                <div>
                    <h4>
                        Music Resource Link
                    </h4>
                    <Input placeholder="https://location" onChange={handleMusicLinkChange} value={musicResourceLink} ></Input>
                </div>
                <div>
                    <h4>
                        Date Of Release
                    </h4>
                    <Input placeholder="Date" type="Date" onChange={handleReleaseDateChange} value={dateOfRelease} ></Input>
                </div>
                <br />
                <SubmitButton onClick={handleSubmit}>
                    Edit
                </SubmitButton>
                <CancelButton onClick={handleCancel}>
                    Cancel
                </CancelButton>
            </Form> 
            </div>
            
        ):null;
    
}