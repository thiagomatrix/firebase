import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const { currentUser } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        !currentUser && (
            <div className="content">
                <header className="App-header">
                    <h2>Entre com o seu Email e Senha</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id={'email'}
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Senha</Label>
                            <Input
                                id={'password'}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                        <Button type="submit">Entrar</Button>
                    </Form>
                </header>
            </div>
        )
    );
};

export default LoginPage;
