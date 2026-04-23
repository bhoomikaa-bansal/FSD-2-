import React, { useState } from "react";   // ✅ FIXED
import { TextField, Button, Container, Box } from "@mui/material";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Min 6 characters");
      return;
    }

    setError("");
    alert("Form submitted successfully");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <form onSubmit={handleSubmit}>
          
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p>{error}</p>}

          <Button type="submit" variant="contained">
            Login
          </Button>

        </form>
      </Box>
    </Container>
  );
}