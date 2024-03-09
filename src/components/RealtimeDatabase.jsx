import { useState, useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { database } from '../firebase';
import { Button, Form, Input, InputGroup, Label } from 'reactstrap';

const RealtimeDatabase = () => {
    const { currentUser } = useAuth();
    const [data, setData] = useState(null);
    const [newData, setNewData] = useState('');

    useEffect(() => {
        if (!currentUser) return;

        // Obter o token de autenticação do usuário
        currentUser
            .getIdToken()
            .then((token) => {
                // Criar uma referência ao Realtime Database com o token de autenticação
                const dbRef = database.ref(`users/${currentUser.uid}`).child('data');
                console.log(token);

                // Escutar mudanças nos dados
                dbRef.on('value', (snapshot) => {
                    const newData = snapshot.val();
                    setData(newData);
                });
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [currentUser]);

    const handleAddData = (e) => {
        e.preventDefault();
        if (!currentUser) {
            console.error('User is not authenticated.');
            return;
        }

        const dbRef = database.ref(`users/${currentUser.uid}`).child('data');

        // Adicionar novo dado ao Realtime Database
        dbRef
            .set(newData)
            .then(() => {
                console.log('Data added successfully.');
            })
            .catch((error) => {
                console.error('Error adding data:', error);
            });
    };

    return (
        <div className="mt-4">
            <h5>Minha lista</h5>
            {data && (
                <div className="list">
                    <div>Texto salvo: {data}</div>
                    <div>
                        <Button onClick={() => setNewData(data)}>Editar</Button>
                    </div>
                </div>
            )}
            <Form onSubmit={handleAddData}>
                <Label for="text">Novo texto</Label>
                <InputGroup>
                    <Input
                        id={'text'}
                        required
                        type="text"
                        value={newData}
                        onChange={(e) => setNewData(e.target.value)}
                    />

                    <Button>Enviar</Button>
                </InputGroup>
            </Form>
        </div>
    );
};

export default RealtimeDatabase;
