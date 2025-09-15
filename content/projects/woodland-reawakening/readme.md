# Projects Page Bundle Archetype

This archetype creates a page bundle structure for projects.

## Usage

To create a new project as a page bundle:

```bash
hugo new projects/project-name
```

This will create:

- `content/projects/project-name/index.md` - The main content file
- `content/projects/project-name/` directory - Where you can place images

## Featured Items

To make a project featured (larger size in the grid):

Set `featured: true` in the front matter of your `index.md`:

```yaml
---
title: "Amazing Garden Project"
featured: true # This makes it larger
weight: 10 # Controls ordering
---
```

Featured items will:

- Take up 2 columns width on larger screens
- Have increased height (taller images)
- Work with any number of projects items

## Image Organization

Place images directly in the project directory:

```
content/projects/project-name/
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
