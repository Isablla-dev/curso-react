import React, { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import "@radix-ui/themes/styles.css";
import { Flex, Button, Table } from "@radix-ui/themes";

import { useNavigate } from 'react-router-dom';

function Home() {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/users'); // Cambia la URL con tu API real
                const data = await response.json();
                setUsers(data);
                console.log('Fetched users:', data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

        


    }, []);

    const deleteUser = async (id) => {
    
        try {
          const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
          });
    
          if (response.ok) {
            alert('Usuario eliminado correctamente');
            setUsers(prev => prev.filter(user => user.id !== id));
          } else {
            alert('Error al eliminar el usuario');
          }
        } catch (error) {
          console.error('Error eliminando usuario:', error);
        }
      };


    return (
        <>
            <div className="h-[100vh] w-[100vw] flex items-center justify-center">
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {users.map((user) => (
                            <Table.Row key={user.id}>
                                <Table.RowHeaderCell>{user.name}</Table.RowHeaderCell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>
                                    <Flex gap="2">
                                        <Button variant="soft" size="2" onClick={() => navigate(`/edit/${user.id}`)}>Edit ✏️</Button>
                                        <Button variant="soft" size="2" onClick={() => deleteUser(user.id)}>Delete 🗑️</Button>
                                    </Flex>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </div>
        </>
    );
}

export default Home


