import { useDispatch } from "react-redux";
import { user_photo } from '../store/actions/userActions.js';

const SingIn = () => {

    const dispatch = useDispatch();
    const handleSingIn = () => {
        // Simulo sing in
        // Simulon que obtengo datos del usuario (photo)
        // Utilizon dispatch
        // reducer hace el cambio de estado
        const user = {
            photo: 'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
        }

        dispatch(user_photo(user))
    }    
    
    return (
        <div className='flex flex-col items-center text-center'>
            <button className="btn" onClick={handleSingIn}>Sing in</button>
        </div>
    )
}

export default SingIn