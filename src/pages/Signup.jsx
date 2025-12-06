// src/pages/Signup.jsx
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const n = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", user.user.uid), {
        email,
        createdAt: Date.now(),
      });

      n("/");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signup}>Signup</button>
      <p>
        Already have an account?{" "}
        <a href="/login" style={{ color: "cyan" }}>Login</a>
      </p>
    </div>
  );
}
