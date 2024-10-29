// src/pages/index.tsx
"use client"
import { useEffect, useState } from 'react';
import React from 'react';

interface User {
  userid: number;
  kakaoid: string;
}

export default function User() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
      console.log("users",users);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userid}>{user.kakaoid}님</li>
        ))}
      </ul>
      <div>데이터는 아직 없음</div>
      </div>
  );
}
