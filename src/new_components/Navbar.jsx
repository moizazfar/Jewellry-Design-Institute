import { Link } from "react-scroll";
import { AppBar, Toolbar, Button } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#333" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button>
          <Link to="hero" smooth duration={500}>
            Home
          </Link>
        </Button>
        <Button>
          <Link to="models" smooth duration={500}>
            Models
          </Link>
        </Button>
        <Button>
          <Link to="parallax" smooth duration={500}>
            Explore
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
