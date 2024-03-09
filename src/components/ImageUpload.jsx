import { useEffect, useState } from 'react';
import { storage } from '../firebase';
import { useAuth } from '../context/authContext';
import { Button, Input, InputGroup, Label } from 'reactstrap';

const ImageUpload = () => {
    const { currentUser } = useAuth();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!currentUser) return;

        // Referência para o arquivo no Firebase Storage
        const storageRef = storage.ref(`images/${currentUser.uid}/profile.jpg`);

        // Obter a URL do arquivo
        storageRef
            .getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
            });
    }, [currentUser]);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (!currentUser) {
            console.error('User is not authenticated.');
            return;
        }

        if (!image) {
            console.error('No image selected.');
            return;
        }

        const storageRef = storage.ref(`images/${currentUser.uid}/profile.jpg`);
        const uploadTask = storageRef.put(image);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.error('Error uploading image:', error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    setImageUrl(downloadURL);
                });
            }
        );
    };

    return (
        <div className="image">
            <div className="img-content">
                <div>
                    <Label>Sua Imagem de Perfil</Label>
                    <InputGroup>
                        <Input type="file" onChange={handleChange} />
                        <Button onClick={handleUpload}>Enviar</Button>
                    </InputGroup>
                </div>
                <div>
                    {progress > 0 && progress < 100 && <progress value={progress} max="100" />}
                    {imageUrl && <img src={imageUrl} alt="Uploaded" />}
                </div>
            </div>
        </div>
    );
};

export default ImageUpload;
