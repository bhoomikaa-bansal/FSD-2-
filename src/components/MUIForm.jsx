import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Box,
  Alert,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const MUIForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "male",
    country: "",
    agreeTerms: false,
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Validation rules
  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Country validation
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    // Terms and Conditions validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      setErrors({});
      setSubmitted(true);
      setSuccessMessage(
        `Form submitted successfully! Welcome ${formData.firstName} ${formData.lastName}`
      );
      console.log("Form Data:", formData);
      // Reset form after 3 seconds
      setTimeout(() => {
        resetForm();
      }, 3000);
    } else {
      // Form has errors
      setErrors(newErrors);
      setSubmitted(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "male",
      country: "",
      agreeTerms: false,
      newsletter: false,
    });
    setErrors({});
    setSubmitted(false);
    setSuccessMessage("");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, fontWeight: "bold" }}>
          User Registration Form
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* First Name Field */}
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
            fullWidth
            variant="outlined"
            required
            placeholder="Enter your first name"
          />

          {/* Last Name Field */}
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
            fullWidth
            variant="outlined"
            required
            placeholder="Enter your last name"
          />

          {/* Email Field */}
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
            variant="outlined"
            required
            placeholder="example@email.com"
          />

          {/* Phone Number Field */}
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            fullWidth
            variant="outlined"
            required
            placeholder="10-digit phone number"
            inputProps={{ maxLength: 10 }}
          />

          {/* Country Dropdown */}
          <FormControl fullWidth error={Boolean(errors.country)}>
            <FormLabel>Country</FormLabel>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">Select a country</MenuItem>
              <MenuItem value="USA">United States</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="UK">United Kingdom</MenuItem>
              <MenuItem value="Australia">Australia</MenuItem>
            </Select>
            {errors.country && (
              <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                {errors.country}
              </Typography>
            )}
          </FormControl>

          {/* Gender Radio Buttons */}
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          {/* Checkboxes */}
          <Box sx={{ border: "1px solid #ccc", p: 2, borderRadius: 1 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "500" }}>
              Preferences
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
              }
              label="I agree to the terms and conditions *"
            />
            {errors.agreeTerms && (
              <Typography variant="caption" color="error" display="block">
                {errors.agreeTerms}
              </Typography>
            )}

            <FormControlLabel
              control={
                <Checkbox
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
              }
              label="Subscribe to our newsletter"
            />
          </Box>

          {/* Form Actions */}
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ fontWeight: "bold" }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="button"
                variant="outlined"
                color="secondary"
                fullWidth
                size="large"
                onClick={resetForm}
                sx={{ fontWeight: "bold" }}
              >
                Reset
              </Button>
            </Grid>
          </Grid>

          {/* Form Info */}
          <Typography variant="caption" color="textSecondary" sx={{ mt: 2 }}>
            * indicates required field
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default MUIForm;
