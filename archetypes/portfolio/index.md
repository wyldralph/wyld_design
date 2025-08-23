---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
client: ""
location: ""
year: ""
project_type: "" # e.g., "Garden Design", "Planting Design", "Design Consultation"
size: "" # e.g., "Small suburban garden", "Large family garden"
style: "" # e.g., "Contemporary", "Modern naturalistic", "Wildlife-friendly"
featured_image: "featured.jpg" # Main project image (place in same directory)
gallery_images: # Array of gallery image paths (place in same directory)
  - "gallery1.jpg"
  - "gallery2.jpg"
  - "gallery3.jpg"
summary: "" # Brief description for listings
services_provided: [] # Array of services, e.g., ["Design", "Planting", "Project Management"]
challenges: [] # Key challenges addressed
solutions: [] # Key solutions implemented
plants_featured: [] # Notable plants used
materials: [] # Key materials used
tags: [] # For categorization
weight: 0 # For ordering (lower numbers appear first)
featured: false # Set to true to make this portfolio item featured (larger size)
---

<!-- Project description goes here -->

## The Challenge

<!-- Describe the challenges this garden presented -->

## The Solution

<!-- Describe how you solved the challenges -->

## The Result

<!-- Describe the final outcome and client satisfaction -->