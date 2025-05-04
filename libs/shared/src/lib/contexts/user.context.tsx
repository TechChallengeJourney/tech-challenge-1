import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../shared';
import { useSession } from '../hooks/use-session';

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sessionUser] = useSession<User | null>('user');
    const [user, setUser] = useState<User | null>(sessionUser);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        if (sessionUser !== null) {
            setUser(sessionUser);
          }
          setLoading(false); 
    }, [sessionUser]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};