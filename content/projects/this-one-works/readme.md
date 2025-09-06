# Portfolio Page Bundle Archetype

This archetype creates a page bundle structure for portfolio items.

## Usage

To create a new portfolio item as a page bundle:

```bash
hugo new content/portfolio/project-name/index.md
```

This will create:
- `content/portfolio/project-name/index.md` - The main content file
- `content/portfolio/project-name/` directory - Where you can place images

## Image Organization

Place images directly in the project directory:

```
content/portfolio/project-name/
├── index.md
├── featured.jpg        # Main project image
├── gallery1.jpg       # Gallery images
├── gallery2.jpg
├── gallery3.jpg
└── ...more images
```

## Benefits

- Images are co-located with content
- Easy to manage and organize
- Images move with the content
- Cleaner repository structure
- Better for version control