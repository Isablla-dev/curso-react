import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import { Flex, Card, Text, Strong, TextField, Button } from "@radix-ui/themes";


function About() {
    const [count, setCount] = useState(0)
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/${id}`);
                const data = await response.json();
                setName(data.name);
                setEmail(data.email);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        if (id) fetchUser();
    }, [id]);

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'PUT', // O PATCH si tu backend lo prefiere
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                alert("Usuario actualizado correctamente.");
                navigate('/'); // Redirige al Home
            } else {
                alert("Error al actualizar usuario.");
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <>
            <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                <Card size="4" className='w-100'>
                    <Flex gap="2" align="center" justify="between" className='mb-4'>
                        <Text as="p" size="4">
                            <Strong>Form</Strong>
                        </Text>
                        <button className='cursor-pointer' onClick={() => navigate(`/`)}>X</button>
                    </Flex>
                    <br />
                    <TextField.Root placeholder="Name" onChange={(e) => setName(e.target.value)}></TextField.Root>
                    <br />
                    <TextField.Root placeholder="Email" onChange={(e) => setEmail(e.target.value)}></TextField.Root>
                    <br />
                    <Button variant="soft" onClick={handleSubmit}>Enviar</Button>
                </Card>
            </div>

        </>


    )
}

export default About
