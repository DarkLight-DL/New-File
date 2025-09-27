import React from 'react';
import { Box, Typography, Chip, Divider } from '@mui/material';
import YouTubeImg from '../Assets/youtubeClone.png'; // Update this path as needed

const YouTubeCloneDetails = () => {
  return (
    <Box sx={{ mt:'50px',px: { xs: 2, sm: 6 }, py: 4, maxWidth: 1200, mx: 'auto' }}>
      {/* Project Title */}
      <Typography variant="h3" fontWeight={700} gutterBottom align="center">
        🎬 YouTube Clone
      </Typography>

      {/* Subheading */}
      <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
        A full-featured, responsive video streaming web application
      </Typography>

      {/* Image Preview */}
      <Box
        component="img"
        src={YouTubeImg}
        alt="YouTube Clone"
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'contain',
          borderRadius: 2,
          boxShadow: 3,
          my: 4,
        }}
      />

      {/* 🔍 Project Overview */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        🔍 Project Overview
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: '#444' }}>
        This YouTube Clone is a modern, responsive video streaming platform built using:
        <ul>
          <li><strong>React (JSX):</strong> for component-based UI structure</li>
          <li><strong>Material UI (MUI):</strong> for clean, responsive design and styling</li>
          <li><strong>YouTube Data API v3:</strong> for fetching real-time video content, views, likes, and shorts</li>
          <li><strong>Axios:</strong> for handling API requests</li>
          <li><strong>React Router:</strong> for navigation between pages</li>
          <li><strong>Flexbox/Grid:</strong> for responsive layout across devices</li>
        </ul>
      </Typography>

      {/* 🚀 Key Features */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        🚀 Key Features
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        ✅ <strong>Live Data Fetching:</strong> Fetches trending videos, shorts, channel data, views & likes using the YouTube Developer API (v3).<br />
        ✅ <strong>Real-Time Search:</strong> Responsive search bar with instant result display while typing.<br />
        ✅ <strong>Responsive Navigation:</strong> Clean and mobile-adaptive navbar built with MUI, supports swipe gestures and auto-collapse.<br />
        ✅ <strong>YouTube Shorts:</strong> Supports vertical-scrolling Shorts section, optimized for mobile viewing.<br />
        ✅ <strong>Modern UI/UX:</strong> Built with Material UI v5, features dark/light mode (optional), and adaptive layouts.
      </Typography>

      {/* 💡 Tech Stack */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        💡 Tech Stack
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
        {[
          'React.js',
          'Material UI',
          'Axios',
          'React Router',
          'YouTube API v3',
          'Responsive Design',
          'Flexbox',
          'Grid Layout',
        ].map((tech, index) => (
          <Chip key={index} label={tech} color="primary" variant="outlined" />
        ))}
      </Box>

      {/* 🔗 Links (Optional) */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        🔗 Live Demo / Source Code
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        This project is currently <strong>not hosted online</strong>. Please reach out for a demo or check back later for deployment updates.
      </Typography>

      {/* 📸 Screenshots (Optional) */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        📸 Screenshots
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        (Add preview images of the home page, shorts view, search results, etc.)
      </Typography>

      {/* 🧠 What I Learned */}
      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" fontWeight={600} gutterBottom>
        🧠 What I Learned
      </Typography>
      <Typography variant="body1" color="text.secondary">
        • Integrating and managing data with third-party APIs (YouTube Data API v3)<br />
        • Optimizing search performance using debounce and state management<br />
        • Building mobile-first responsive layouts with Material UI Grid and Flexbox<br />
        • Handling async API data and loading states cleanly with Axios<br />
        • Designing swipe-friendly and collapsible navigation for various screen sizes
      </Typography>
    </Box>
  );
};

export default YouTubeCloneDetails;
