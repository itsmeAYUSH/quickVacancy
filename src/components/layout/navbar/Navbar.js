// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// export const Navbar = () => {
//   const [anchorElIndustry, setAnchorElIndustry] = useState(null);
//   const [anchorElServices, setAnchorElServices] = useState(null);
//   const [anchorElSector, setAnchorElSector] = useState(null);

//   const handleIndustryClick = (event) => {
//     setAnchorElIndustry(event.currentTarget);
//   };

//   const handleServicesClick = (event) => {
//     setAnchorElServices(event.currentTarget);
//   };

//   const handleSectorClick = (event) => {
//     setAnchorElSector(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorElIndustry(null);
//     setAnchorElServices(null);
//     setAnchorElSector(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{ backgroundColor: "transparent", borderTop: "2px solid #FFFFFF" }}
//       elevation={0}
//     >
//       <Toolbar>
//         <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">For Employee</Button>
//           <Button color="inherit">About Us</Button>

//           <Button
//             color="inherit"
//             aria-controls="industry-menu"
//             aria-haspopup="true"
//             onClick={handleIndustryClick}
//             endIcon={anchorElIndustry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           >
//             Industry Verticals
//           </Button>
//           <Menu
//             id="industry-menu"
//             anchorEl={anchorElIndustry}
//             open={Boolean(anchorElIndustry)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleSectorClick}>
//               Sector We Cater {anchorElSector ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </MenuItem>
//             <Menu
//               id="sector-menu"
//               anchorEl={anchorElSector}
//               open={Boolean(anchorElSector)}
//               onClose={handleClose}
//               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//             >
//               <MenuItem onClick={handleClose}>Banking & Insurance</MenuItem>
//               <MenuItem onClick={handleClose}>Financial Services & Consulting</MenuItem>
//               <MenuItem onClick={handleClose}>Pharmaceutical & Healthcare</MenuItem>
//               <MenuItem onClick={handleClose}>IT, BPO & KPO</MenuItem>
//               <MenuItem onClick={handleClose}>Retail & Lifestyle</MenuItem>
//               <MenuItem onClick={handleClose}>Heavy Industries & Manufacturing</MenuItem>
//               <MenuItem onClick={handleClose}>Oil and Gas</MenuItem>
//               <MenuItem onClick={handleClose}>Infrastructure & Construction</MenuItem>
//               <MenuItem onClick={handleClose}>Telecommunication</MenuItem>
//               <MenuItem onClick={handleClose}>Hospitality</MenuItem>
//               <MenuItem onClick={handleClose}>Consumer Services</MenuItem>
//             </Menu>
//           </Menu>

//           <Button
//             color="inherit"
//             aria-controls="services-menu"
//             aria-haspopup="true"
//             onClick={handleServicesClick}
//             endIcon={anchorElServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           >
//             Services
//           </Button>
//           <Menu
//             id="services-menu"
//             anchorEl={anchorElServices}
//             open={Boolean(anchorElServices)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Our Offerings</MenuItem>
//             <MenuItem onClick={handleClose}>Process of Hiring</MenuItem>
//           </Menu>

//           <Button color="inherit">Art Gallery</Button>
//           <Button color="inherit">Contact Us</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// export const Navbar = () => {
//   const [anchorElIndustry, setAnchorElIndustry] = useState(null);
//   const [anchorElServices, setAnchorElServices] = useState(null);
//   const [anchorElSector, setAnchorElSector] = useState(null);

//   const handleIndustryClick = (event) => {
//     setAnchorElIndustry(event.currentTarget);
//   };

//   const handleServicesClick = (event) => {
//     setAnchorElServices(event.currentTarget);
//   };

//   const handleSectorClick = (event) => {
//     setAnchorElSector(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorElIndustry(null);
//     setAnchorElServices(null);
//     setAnchorElSector(null);
//   };

//   return (
//     <AppBar
//       position="fixed"  // Change position to fixed
//       sx={{
//         width: '100vw',  // Set width to 100vw
//         top: "135px",
//         left: 0,
//         backgroundColor: "transparent",
//         borderTop: "2px solid #FFFFFF",
//         zIndex: 1300,  // Ensure it stays above other content
//       }}
//       elevation={0}
//     >
//       <Toolbar>
//         <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">For Employee</Button>
//           <Button color="inherit">About Us</Button>

//           <Button
//             color="inherit"
//             aria-controls="industry-menu"
//             aria-haspopup="true"
//             onClick={handleIndustryClick}
//             endIcon={anchorElIndustry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           >
//             Industry Verticals
//           </Button>
//           <Menu
//             id="industry-menu"
//             anchorEl={anchorElIndustry}
//             open={Boolean(anchorElIndustry)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleSectorClick}>
//               Sector We Cater {anchorElSector ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </MenuItem>
//             <Menu
//               id="sector-menu"
//               anchorEl={anchorElSector}
//               open={Boolean(anchorElSector)}
//               onClose={handleClose}
//               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//             >
//               <MenuItem onClick={handleClose}>Banking & Insurance</MenuItem>
//               <MenuItem onClick={handleClose}>Financial Services & Consulting</MenuItem>
//               <MenuItem onClick={handleClose}>Pharmaceutical & Healthcare</MenuItem>
//               <MenuItem onClick={handleClose}>IT, BPO & KPO</MenuItem>
//               <MenuItem onClick={handleClose}>Retail & Lifestyle</MenuItem>
//               <MenuItem onClick={handleClose}>Heavy Industries & Manufacturing</MenuItem>
//               <MenuItem onClick={handleClose}>Oil and Gas</MenuItem>
//               <MenuItem onClick={handleClose}>Infrastructure & Construction</MenuItem>
//               <MenuItem onClick={handleClose}>Telecommunication</MenuItem>
//               <MenuItem onClick={handleClose}>Hospitality</MenuItem>
//               <MenuItem onClick={handleClose}>Consumer Services</MenuItem>
//             </Menu>
//           </Menu>

//           <Button
//             color="inherit"
//             aria-controls="services-menu"
//             aria-haspopup="true"
//             onClick={handleServicesClick}
//             endIcon={anchorElServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           >
//             Services
//           </Button>
//           <Menu
//             id="services-menu"
//             anchorEl={anchorElServices}
//             open={Boolean(anchorElServices)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Our Offerings</MenuItem>
//             <MenuItem onClick={handleClose}>Process of Hiring</MenuItem>
//           </Menu>

//           <Button color="inherit">Art Gallery</Button>
//           <Button color="inherit">Contact Us</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Box from "@mui/material/Box";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import styles from "./Navbar.module.css"; // Import the CSS module

// export const Navbar = () => {
//   const [anchorElIndustry, setAnchorElIndustry] = useState(null);
//   const [anchorElServices, setAnchorElServices] = useState(null);
//   const [anchorElSector, setAnchorElSector] = useState(null);

//   const handleIndustryClick = (event) => {
//     setAnchorElIndustry(event.currentTarget);
//   };

//   const handleServicesClick = (event) => {
//     setAnchorElServices(event.currentTarget);
//   };

//   const handleSectorClick = (event) => {
//     setAnchorElSector(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorElIndustry(null);
//     setAnchorElServices(null);
//     setAnchorElSector(null);
//   };

//   return (
//     <AppBar
//       className={styles.navbar} // Use the CSS module class
//       elevation={0}
//     >
//       <Toolbar className={styles.toolbar}>
//         <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//           <Button className={styles.button} color="inherit">Home</Button>
//           <Button className={styles.button} color="inherit">For Employee</Button>
//           <Button className={styles.button} color="inherit">About Us</Button>

//           <Button
//             className={styles.button}
//             color="inherit"
//             aria-controls="industry-menu"
//             aria-haspopup="true"
//             onClick={handleIndustryClick}
//             endIcon={anchorElIndustry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           >
//             Industry Verticals
//           </Button>
//           <Menu
//             id="industry-menu"
//             anchorEl={anchorElIndustry}
//             open={Boolean(anchorElIndustry)}
//             onClose={handleClose}
//           >
//             <MenuItem className={styles.button} onClick={handleSectorClick}>
//               Sector We Cater {anchorElSector ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//             </MenuItem>
//             <Menu
//               id="sector-menu"
//               anchorEl={anchorElSector}
//               open={Boolean(anchorElSector)}
//               onClose={handleClose}
//               anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//             >
//               <MenuItem onClick={handleClose}>Banking & Insurance</MenuItem>
//               <MenuItem onClick={handleClose}>Financial Services & Consulting</MenuItem>
//               <MenuItem onClick={handleClose}>Pharmaceutical & Healthcare</MenuItem>
//               <MenuItem onClick={handleClose}>IT, BPO & KPO</MenuItem>
//               <MenuItem onClick={handleClose}>Retail & Lifestyle</MenuItem>
//               <MenuItem onClick={handleClose}>Heavy Industries & Manufacturing</MenuItem>
//               <MenuItem onClick={handleClose}>Oil and Gas</MenuItem>
//               <MenuItem onClick={handleClose}>Infrastructure & Construction</MenuItem>
//               <MenuItem onClick={handleClose}>Telecommunication</MenuItem>
//               <MenuItem onClick={handleClose}>Hospitality</MenuItem>
//               <MenuItem onClick={handleClose}>Consumer Services</MenuItem>
//             </Menu>
//           </Menu>

//           <Button
//             className={styles.button}
//             color="inherit"
//             aria-controls="services-menu"
//             aria-haspopup="true"
//             onClick={handleServicesClick}
//             endIcon={anchorElServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//           >
//             Services
//           </Button>
//           <Menu
//             id="services-menu"
//             anchorEl={anchorElServices}
//             open={Boolean(anchorElServices)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Our Offerings</MenuItem>
//             <MenuItem onClick={handleClose}>Process of Hiring</MenuItem>
//           </Menu>

//           <Button className={styles.button} color="inherit">Art Gallery</Button>
//           <Button className={styles.button} color="inherit">Contact Us</Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./Navbar.module.css"; // Import the CSS module

export const Navbar = () => {
  const [anchorElIndustry, setAnchorElIndustry] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [anchorElSector, setAnchorElSector] = useState(null);

  const handleIndustryClick = (event) => {
    setAnchorElIndustry(event.currentTarget);
  };

  const handleServicesClick = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleSectorClick = (event) => {
    setAnchorElSector(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElIndustry(null);
    setAnchorElServices(null);
    setAnchorElSector(null);
  };

  return (
    <AppBar
      className={styles.navbar} // Use the CSS module class
      elevation={0}
    >
      <Toolbar className={styles.toolbar}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Button
            className={styles.button}
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            className={styles.button}
            color="inherit"
            component={Link}
            to="/for-employee"
          >
            For Employee
          </Button>
          <Button
            className={styles.button}
            color="inherit"
            component={Link}
            to="/about-us"
          >
            About Us
          </Button>

          <Button
            className={styles.button}
            color="inherit"
            aria-controls="industry-menu"
            aria-haspopup="true"
            onClick={handleIndustryClick}
            endIcon={anchorElIndustry ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            Industry Verticals
          </Button>
          <Menu
            id="industry-menu"
            anchorEl={anchorElIndustry}
            open={Boolean(anchorElIndustry)}
            onClose={handleClose}
          >
            <MenuItem className={styles.button} onClick={handleSectorClick}>
              Sector We Cater{" "}
              {anchorElSector ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </MenuItem>
            <Menu
              id="sector-menu"
              anchorEl={anchorElSector}
              open={Boolean(anchorElSector)}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem onClick={handleClose}>Banking & Insurance</MenuItem>
              <MenuItem onClick={handleClose}>
                Financial Services & Consulting
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Pharmaceutical & Healthcare
              </MenuItem>
              <MenuItem onClick={handleClose}>IT, BPO & KPO</MenuItem>
              <MenuItem onClick={handleClose}>Retail & Lifestyle</MenuItem>
              <MenuItem onClick={handleClose}>
                Heavy Industries & Manufacturing
              </MenuItem>
              <MenuItem onClick={handleClose}>Oil and Gas</MenuItem>
              <MenuItem onClick={handleClose}>
                Infrastructure & Construction
              </MenuItem>
              <MenuItem onClick={handleClose}>Telecommunication</MenuItem>
              <MenuItem onClick={handleClose}>Hospitality</MenuItem>
              <MenuItem onClick={handleClose}>Consumer Services</MenuItem>
            </Menu>
          </Menu>

          <Button
            className={styles.button}
            color="inherit"
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleServicesClick}
            endIcon={anchorElServices ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            anchorEl={anchorElServices}
            open={Boolean(anchorElServices)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Our Offerings</MenuItem>
            <MenuItem onClick={handleClose}>Process of Hiring</MenuItem>
          </Menu>

          <Button className={styles.button} color="inherit">
            Art Gallery
          </Button>
          <Button className={styles.button} color="inherit">
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};