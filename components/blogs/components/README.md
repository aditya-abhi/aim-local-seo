# MobileTableOfContent Component

A bottom-anchored, expandable Table of Contents component optimized for mobile devices.

## Features

### 🎯 **Bottom-Anchored Design**
- Fixed button at bottom of screen for easy thumb access
- Expands upward into full/partial overlay
- Doesn't obstruct content when collapsed

### 📱 **Mobile-First UX**
- Touch-friendly 44px minimum touch targets
- Smooth slide-up animations with CSS transitions
- Backdrop blur effect for focus
- Swipe-friendly interactions

### 🎨 **Visual Features**
- Reading progress indicator (percentage + progress bar)
- Estimated read time calculation
- Active section highlighting
- Hierarchical heading structure (h1-h6 support)
- Dark mode support

### ♿ **Accessibility**
- ARIA landmarks and labels
- Keyboard navigation support
- Focus management and trapping
- Screen reader announcements
- High contrast mode support
- Reduced motion support

### 🚀 **Performance**
- Intersection Observer for efficient scroll tracking
- Debounced scroll events
- Lazy loading of TOC data
- Memoized component structure

## Usage

```jsx
import MobileTableOfContent from "@/components/blogs/components/MobileTableOfContent";

function BlogPost() {
  const [isTOCOpen, setIsTOCOpen] = useState(false);

  return (
    <>
      {/* Your blog content */}
      <div className="uc-main">
        <h1>Blog Title</h1>
        <h2>Section 1</h2>
        <p>Content...</p>
        <h2>Section 2</h2>
        <p>Content...</p>
      </div>

      {/* Mobile TOC */}
      <MobileTableOfContent
        isOpen={isTOCOpen}
        onToggle={() => setIsTOCOpen(!isTOCOpen)}
        onClose={() => setIsTOCOpen(false)}
      />
    </>
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | boolean | Controls whether the TOC is open/visible |
| `onToggle` | function | Callback when TOC should be toggled |
| `onClose` | function | Callback when TOC should be closed |

## Technical Implementation

### Content Detection
- Automatically scans for headings (h1-h6) in `.uc-main` or `.post-content` containers
- Generates slugified IDs for headings without IDs
- Creates hierarchical structure with parent-child relationships

### Scroll Tracking
- Uses Intersection Observer API for efficient scroll tracking
- Calculates reading progress based on document scroll position
- Highlights active section based on viewport visibility

### Animation & Transitions
- CSS-based slide-up animation with cubic-bezier easing
- Backdrop blur effect with opacity transition
- Reading progress bar with smooth width transitions
- Reduced motion support for accessibility

### Responsive Behavior
- Only visible on mobile devices (d-lg-none)
- Prevents body scrolling when open
- Handles escape key and backdrop clicks
- Auto-closes after navigation on mobile

## Browser Support

- Modern browsers with Intersection Observer support
- Fallback graceful degradation for older browsers
- Touch-optimized for mobile Safari and Chrome
- Tested on iOS Safari, Android Chrome, and mobile Firefox

## Customization

The component uses Bootstrap utility classes and can be customized via:
- CSS custom properties for colors and spacing
- Bootstrap theme variables
- Custom CSS classes in `MobileTableOfContent.css`

## Integration with BacktoTop Component

The component is integrated with the existing `BacktoTop` component to provide a unified mobile navigation experience:

1. **Toggle Button**: Floating action button in bottom-right corner
2. **State Management**: Shared state between TOC and back-to-top functionality
3. **Visual Feedback**: Button changes appearance based on TOC state
4. **Accessibility**: Proper ARIA labels and keyboard support
