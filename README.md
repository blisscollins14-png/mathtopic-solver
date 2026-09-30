# MathTopic Solver

A professional, modern, mobile-first Mathematics Solver App designed to help students solve mathematics questions step-by-step based on specific topics.

## Features

- **Topic-Based Solving**: Select a specific mathematics topic, then solve questions using topic-specific methods
- **Step-by-Step Solutions**: Detailed explanations with multiple difficulty levels (Beginner, Normal, Detailed)
- **Multiple Input Methods**: Type, paste, or upload images of questions
- **Practice Mode**: Generate practice questions by topic and difficulty
- **Exam Mode**: Timed practice exams with scoring
- **Formula Library**: Comprehensive formula reference organized by topic
- **Progress Tracking**: Monitor learning progress and identify strong/weak topics
- **Dark Mode**: Full light and dark theme support
- **Responsive Design**: Works seamlessly on phones, tablets, and desktops
- **Answer Checker**: Verify custom answers against correct solutions
- **Saved Questions**: Bookmark and organize solved questions
- **Solution History**: Access previously solved problems

## Supported Mathematics Topics

### 1. Algebra
- Algebraic Expressions
- Factorization
- Linear Equations
- Simultaneous Equations
- Quadratic Equations
- Inequalities
- Variation

### 2. Number & Arithmetic
- Fractions
- Percentages
- Ratio and Proportion
- Indices
- Standard Form
- Surds
- Number Bases

### 3. Logarithms
- Laws of Logarithms
- Simple Logarithmic Equations
- Change of Base
- Exponential Equations

### 4. Geometry
- Angles
- Triangles
- Quadrilaterals
- Circles
- Polygons
- Coordinate Geometry

### 5. Mensuration
- Perimeter
- Area
- Volume
- Surface Area

### 6. Trigonometry
- Sine, Cosine, Tangent
- Trigonometric Ratios
- Trigonometric Equations
- Bearings

### 7. Statistics
- Mean, Median, Mode
- Range
- Frequency Tables
- Charts and Histograms

### 8. Probability
- Basic Probability
- Combined Events
- Probability Tables

### 9. Matrices
- Matrix Operations
- Determinants
- Inverse of a Matrix
- Matrix Equations

### 10. Sequences and Series
- Arithmetic Progression
- Geometric Progression
- nth Term
- Sum of Terms

### 11. Calculus
- Differentiation
- Applications of Differentiation
- Integration
- Applications of Integration

### 12. Vectors
- Vector Addition and Subtraction
- Magnitude
- Position Vectors

## Technology Stack

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State Management**: Zustand
- **Math Rendering**: KaTeX, react-katex
- **UI Components**: Lucide React Icons
- **Notifications**: React Hot Toast
- **Charts**: Recharts
- **Theme**: next-themes

## Getting Started

### Prerequisites
- Node.js 16+ or Bun
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/blisscollins14-png/mathtopic-solver.git
cd mathtopic-solver

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup

```bash
# Copy the example env file
cp .env.local.example .env.local

# Update .env.local with your configuration
```

### Development

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── solver/            # Solver pages
│   ├── practice/          # Practice mode
│   ├── exam/              # Exam mode
│   ├── formulas/          # Formula library
│   ├── history/           # Solution history
│   ├── profile/           # User profile
│   └── api/               # API routes
├── components/            # Reusable React components
│   ├── common/            # Shared components
│   ├── layout/            # Layout components
│   ├── solver/            # Solver-specific components
│   ├── practice/          # Practice mode components
│   └── exam/              # Exam mode components
├── lib/                   # Utility functions
│   ├── math-solver/       # Math solving logic
│   ├── validators/        # Input validators
│   ├── storage/           # Local storage utilities
│   └── api-client.ts      # API client
├── store/                 # Zustand stores
│   ├── auth-store.ts      # Authentication state
│   ├── solver-store.ts    # Solver state
│   ├── theme-store.ts     # Theme state
│   └── user-store.ts      # User data state
├── types/                 # TypeScript type definitions
│   ├── math.ts            # Math-related types
│   ├── user.ts            # User types
│   └── api.ts             # API response types
├── styles/                # Global styles
└── hooks/                 # Custom React hooks
```

## Architecture

### Core Workflow

1. **Topic Selection** → User chooses a mathematics topic
2. **Question Input** → User enters/pastes/uploads the question
3. **Validation** → System validates the question belongs to selected topic
4. **Solving** → Topic-specific solving algorithm executes
5. **Step Display** → Solutions shown with explanation levels
6. **Storage** → Solutions saved to history if user authenticated

### Mathematical Accuracy

- All calculations verified before display
- Proper handling of edge cases (negative numbers, fractions, etc.)
- Both exact and approximate answers shown where applicable
- Assumptions clearly stated

## Features in Detail

### Solver Screen
- Topic-specific question input
- Mathematical keyboard for special symbols
- Example questions per topic
- Clear, Solve, Save buttons

### Solution Display
- Question statement
- Given information
- Relevant formula/rule
- Step-by-step breakdown
- Final answer with verification
- Multiple explanation levels

### Practice Mode
- Topic selection
- Difficulty levels (Easy, Medium, Hard)
- Customizable question count
- Immediate feedback
- Performance tracking

### Exam Mode
- Timed exams
- Multiple exam categories (JSS, SS1, SS2, SS3, WAEC, NECO, JAMB practice)
- Countdown timer
- Comprehensive results
- Performance analytics

### Admin Panel (Optional Backend)
- Topic management
- Formula management
- Question bank management
- Usage statistics
- User management

## User Authentication

- Optional account creation
- Secure login/signup
- Profile customization
- Progress persistence
- Favorite topics tracking

## Progress Tracking

- Questions solved count
- Accuracy percentage
- Topics practiced
- Strong/weak topic identification
- Learning analytics

## Mobile Optimization

- Responsive design (mobile-first)
- Touch-friendly buttons and inputs
- Optimized image handling
- Efficient data loading
- Offline capability consideration

## Dark Mode

- System preference detection
- Manual light/dark/system default toggle
- Persistent user preference
- All components fully themed

## Error Handling

- Clear error messages
- Input validation
- Topic mismatch detection with suggestions
- Image reading failures with alternatives
- Network error recovery

## Performance

- Fast page loads
- Optimized images and assets
- Code splitting
- Lazy loading
- Efficient state management

## Accessibility

- WCAG 2.1 compliance
- Keyboard navigation
- Screen reader support
- High contrast support
- Clear typography

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

## Disclaimer

All generated practice questions are clearly labeled as practice questions. Questions are not official WAEC, NECO, or JAMB materials unless specifically licensed or sourced from these organizations. This app is designed for educational practice and learning support.

## Roadmap

- [ ] Offline mode support
- [ ] AI-powered question generation
- [ ] Video explanations
- [ ] Peer learning features
- [ ] Teacher dashboard
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] Question difficulty calibration
- [ ] Spaced repetition system
- [ ] Integration with educational platforms

---

**MathTopic Solver** - *Your Personal Mathematics Learning Assistant*
