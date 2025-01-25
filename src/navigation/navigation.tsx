import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { useDemoRouter } from "@toolpad/core/internal";
import Stack from "@mui/material/Stack";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import {
  DashboardLayout,
  ThemeSwitcher,
  type SidebarFooterProps,
} from "@toolpad/core/DashboardLayout";
import Dialog from "@mui/material/Dialog";

import image1 from "../images/cattle.jpeg"; // Import the image
import image2 from "../images/sheep.jpeg"; // Import the image
import image3 from "../images/duck.jpeg"; // Import the image
import image4 from "../images/duck02.jpeg"; // Import the image

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "photos",
    title: "Photos",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState({
    src: "",
    alt: "",
  });

  const handleOpen = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (pathname === "/photos") {
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {/* Render all images */}
        {[image1, image2, image3, image4].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleOpen(img, `Image ${index + 1}`)} // Open modal on click
          />
        ))}

        {/* Dialog for enlarged image */}
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </Dialog>
      </div>
    );
  } else {
    return (
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography>Dashboard content for {pathname}</Typography>
      </Box>
    );
  }
}

function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
      />
      <ThemeSwitcher />
    </Stack>
  );
}

function SidebarFooter({ mini }: SidebarFooterProps) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: "nowrap", overflow: "hidden" }}
    >
      {mini ? "© MUI" : `© ${new Date().getFullYear()} Made with love by MUI`}
    </Typography>
  );
}

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <CloudCircleIcon fontSize="large" color="primary" />
      <Typography variant="h6">Photo Gallery</Typography>
    </Stack>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;

  const router = useDemoRouter("/photos");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        // logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "Photo Gallery",
        // homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
      //   theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
