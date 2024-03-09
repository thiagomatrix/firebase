import { Button } from 'reactstrap';
import { useAuth } from '../../context/authContext';
import ImageUpload from '../../components/ImageUpload';
import RealtimeDatabase from '../../components/RealtimeDatabase';

const MainPage = () => {
    const { currentUser, logout } = useAuth();

    return (
        currentUser && (
            <div className="main">
                <nav>
                    <h2>Principal</h2>

                    <div className="right">
                        <div>Email: {currentUser.email}</div>
                        <div>
                            <Button onClick={logout}>Sair</Button>
                        </div>
                    </div>
                </nav>
                <div className="content">
                    <ImageUpload />
                    <RealtimeDatabase />
                </div>
            </div>
        )
    );
};

export default MainPage;
