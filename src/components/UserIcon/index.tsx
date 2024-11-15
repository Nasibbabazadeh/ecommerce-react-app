import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ProfileIcon } from '../../assets';
import { RootState } from '../../redux/store';

const UserIcon = () => {
    const user = useSelector((state: RootState) => state?.auth.user);
    const navigate = useNavigate();

    const handleClick = () => {
        if (user) {
            alert(`Welcome, ${user}`);
        } else {
            navigate('/login');
        }
    };

    return (
        <div onClick={handleClick} className="cursor-pointer">
            <img src={ProfileIcon} alt="User Icon" />
        </div>
    );
};

export default UserIcon;
