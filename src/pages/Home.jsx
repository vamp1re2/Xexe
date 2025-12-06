// src/pages/Home.jsx
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  if (!user)
    return (
      <div style={{ padding: 40 }}>
        <h2>Welcome</h2>
        <a href="/login" style={{ color: "cyan" }}>Login</a> or{" "}
        <a href="/signup" style={{ color: "cyan" }}>Signup</a>
      </div>
    );

  return (
    <div style={{ padding: 40 }}>
      <h2>Hello {user.email}</h2>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
}
