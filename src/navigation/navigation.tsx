import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { useDemoRouter } from "@toolpad/core/internal";
import Stack from "@mui/material/Stack";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
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
import PhotoIcon from "@mui/icons-material/Photo";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import image1 from "../files/cattle.jpeg"; // Import the image
import image2 from "../files/sheep.jpeg";
import image3 from "../files/duck.jpeg";
import image4 from "../files/duck02.jpeg";
import image5 from "../files/cattle2.jpeg";
import image6 from "../files/cattle3.jpeg";
import image7 from "../files/peacock.jpeg";
import image8 from "../files/elephant.jpeg";
import image9 from "../files/whale.jpeg";
import image10 from "../files/goose.jpeg";
import image11 from "../files/bird.jpeg";
import image12 from "../files/polarBear.jpeg";
import image13 from "../files/fox.jpeg";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "photos",
    title: "Photos",
    icon: <PhotoIcon />,
  },
  {
    segment: "videos",
    title: "Videos",
    icon: <PlayCircleOutlineIcon />,
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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ]; // Array of images
  const videos = [
    {
      type: "video",
      src: "https://www.youtube.com/embed/_-gbT5qxQr8?start=103",
      thumbnail: "https://img.youtube.com/vi/_-gbT5qxQr8/hqdefault.jpg",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/Kwh9GuZRSN8",
      thumbnail: "https://img.youtube.com/vi/Kwh9GuZRSN8/hqdefault.jpg",
    },
  ];

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop to the first image after the last one
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Loop to the last image if at the first one
  };

  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length); // Loop to the first image after the last one
  };

  const handlePrevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    ); // Loop to the last image if at the first one
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
          justifyContent: "flex-start",
          marginTop: "20px",
          flexWrap: "wrap",
          maxWidth: "100vw",
        }}
      >
        {/* Render all images */}
        {images.map((img, index) => (
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
            onClick={() => handleOpen(index)} // Open modal on click
          />
        ))}

        {/* Dialog for enlarged image */}
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            {/* Enlarged image */}
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />

            {/* Navigation buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: 2,
              }}
            >
              <button
                onClick={handlePrevImage}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  fontSize: "16px",
                }}
              >
                Previous
              </button>
              <button
                onClick={handleNextImage}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  fontSize: "16px",
                }}
              >
                Next
              </button>
            </Box>
          </Box>
        </Dialog>
      </div>
    );
  } else if (pathname === "/videos") {
    return (
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {/* Render all items */}
        {videos.map((item, index) => (
          <div
            key={index}
            style={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => handleOpen(index)}
          >
            {
              <div style={{ position: "relative" }}>
                {/* Video thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={`Video ${index + 1}`}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                {/* Play button overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            }
          </div>
        ))}

        {/* Dialog for enlarged content */}
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            {
              // YouTube video
              <iframe
                width="800"
                height="450"
                src={videos[currentIndex].src}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              ></iframe>
            }

            {/* Navigation buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: 2,
              }}
            >
              <button
                onClick={handlePrevVideo}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  fontSize: "16px",
                }}
              >
                Previous
              </button>
              <button
                onClick={handleNextVideo}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  fontSize: "16px",
                }}
              >
                Next
              </button>
            </Box>
          </Box>
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
      <PhotoLibraryOutlinedIcon fontSize="large" color="primary" />
      <Typography variant="h6">My photos and videos</Typography>
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
