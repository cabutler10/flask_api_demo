import * as React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

export default function Content() {
  const [results, setResults] = React.useState([]);
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [errorPassword, setErrorPassword] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const fetchUser = () => {
    fetch("http://localhost:7000/somefunction", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!values.email) {
      setErrorEmail("E-Mail wird benötigt");
    } else if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
        values.email
      )
    ) {
      setErrorEmail("E-mail ist nicht korrekt");
    }
    if (!values.password) {
      setErrorPassword("Passwort wird benötigt");
    }

    if (!errorEmail && !errorPassword) {
      fetchUser();
      setValues({ email: "", password: "" });
    }
  };

  return (
    <Container
      sx={{
        m: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: { xs: "40vH", sm: "10vH" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
        component="form"
        noValidate
        onSubmit={handleSubmit}
      >
        <TextField
          id="email"
          placeholder="E-Mail"
          size="small"
          error={errorEmail ? true : false}
          helperText={errorEmail ? errorEmail : null}
          value={values.email || ""}
          onChange={handleChange("email")}
          sx={{
            mr: { xs: 0, sm: 1 },
            mb: { xs: 1, sm: 0 },
            width: { xs: "80%", sm: "25%", lg: "25ch" },
          }}
        />
        <TextField
          id="password"
          placeholder="Passwort"
          type="password"
          error={errorPassword ? true : false}
          helperText={errorPassword ? errorPassword : null}
          autoComplete="off"
          size="small"
          value={values.password || ""}
          onChange={handleChange("password")}
          sx={{
            width: { xs: "80%", sm: "25%", lg: "25ch" },
            mb: { xs: 3, sm: 0 },
          }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            height: 40,
            borderRadius: "4px",
            ml: { xs: 0, sm: 3 },
            width: { xs: "80%", sm: "25%", lg: "25ch" },
          }}
        >
          Jetzt anmelden
        </Button>
      </Box>
      <Box>Your results: {results}</Box>
    </Container>
  );
}
