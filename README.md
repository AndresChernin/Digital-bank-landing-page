Digitalbank Landing Page
Overview

This project is a responsive landing page for a fictional digital banking service called Digitalbank.

The page was built as a Frontend Mentor challenge and implemented with React, JavaScript, HTML, and CSS. The main focus of the project was to recreate the provided design while practicing responsive layouts, component-based development, mobile navigation, and accessibility.

The page includes a responsive navigation, a hero section, information about the benefits of Digitalbank, a latest articles section, and a footer with additional navigation and social media links.
Built with
HTML5
CSS3
JavaScript
React
JSX
Responsive design
CSS Flexbox
CSS Media Queries
React useState
React useRef
React useEffect
Features
Responsive landing page for desktop and mobile devices
Mobile navigation menu with open and close states
Desktop navigation
Responsive hero section
Reusable React components
Article cards generated from JavaScript data
Responsive layout using CSS media queries
Hover and focus states for interactive elements
Semantic HTML structure
Accessible navigation buttons
Focus management when closing the mobile navigation
Project Structure

The project is organized into separate components, data files, and stylesheets.

src/
├── components/
│   ├── UpperDigitalBank.jsx
│   ├── FotoComponent.jsx
│   ├── WhyChooseComponent.jsx
│   ├── WhyChooseSection.jsx
│   ├── ArticleComponent.jsx
│   ├── ArticlesSection.jsx
│   └── LowerDigitalBank.jsx
│
├── data/
│   ├── bankData.js
│   └── articlesData.js
│
└── styles/
    ├── styles-for-upper-digitalbank-container.css
    ├── styles-for-lower-digitalbank-container.css
    ├── styles-for-main-container.css
    ├── styles-for-foto-part-container.css
    ├── styles-for-why-choose-container.css
    └── styles-for-articles-container.css
Implementation
React Components

The landing page is divided into smaller React components instead of implementing the entire page in one component.

For example, the article section receives its data through props and creates the article cards with map():

{data.map((element, index) => (
    <ArticleComponent
        key={index}
        image={element.img_link}
        autor={element.p_autor}
        title={element.p_title}
        text={element.p_text}
    />
))}

This makes it possible to reuse the same article component for multiple articles.

Responsive Design

The layout changes depending on the screen width.

CSS media queries are used to switch between the mobile and desktop layouts. For example, the mobile navigation is displayed on smaller screens, while the desktop navigation is displayed on larger screens.

The layout also uses Flexbox to arrange the different sections and components.

Mobile Navigation

The mobile navigation is controlled with React state:

const [showMenu, setShowMenu] = React.useState(false);

When the user opens or closes the navigation, the state changes and React displays the corresponding menu.

The navigation uses semantic HTML:

<nav>
    ...
</nav>

and the navigation links are implemented as actual links instead of non-interactive elements.

Focus Management

I also implemented focus management for the mobile navigation.

When the user closes the mobile menu, the close button is removed from the DOM. Without additional focus management, keyboard users could lose their current focus position.

A React ref keeps a reference to the open-menu button:

const openMenuButtonRef = React.useRef(null);

After the menu has been closed, useEffect restores the keyboard focus to the open-menu button.

This improves the experience for users who navigate the page using a keyboard or assistive technologies.

Accessibility

The project uses several accessibility improvements, including:

Semantic <header>, <main>, <nav>, <article>, and <footer> elements
Real <button> elements for interactive controls
Real <a> elements for navigation links
aria-label for the mobile menu buttons
aria-expanded to communicate the menu state
aria-controls to connect the menu button with the navigation
Focus restoration when closing the mobile navigation
Empty alt attributes for decorative images
What I Learned
React state

I learned how to use React state to control interactive parts of a page. In this project, useState is used to control whether the mobile navigation is open or closed.

Component-based development

Breaking the page into smaller components helped me understand how React components can be used to structure a larger interface.

Instead of putting all markup into one component, I separated the navigation, hero section, benefits section, articles, and footer into different components.

Responsive layouts

I practiced building a layout that works on different screen sizes. I used CSS media queries and Flexbox to change the structure between mobile and desktop layouts.

Accessibility and focus management

One of the most useful things I learned was how keyboard focus behaves when React removes an element from the DOM.

When the mobile navigation is closed, the close button disappears. Using useRef and useEffect, I learned how to restore focus to the button that opens the navigation.

This helped me better understand that accessibility is not only about semantic HTML, but also about how interactive elements behave during state changes.

Reusable styling

I also learned to look for repeated CSS declarations and extract common styles into reusable classes. This makes the stylesheet easier to maintain and reduces unnecessary duplication.

Continued Development

There are several things I would improve in a future version of this project:

Improve the naming consistency of component props and data properties.
Further reduce duplicated CSS rules.
Improve and standardize hover and focus states for all interactive elements.
Connect the navigation links to complete page sections or real pages.
Further improve the accessibility of the navigation and interactive elements.
Simplify the project structure and potentially move the project to a standard React build setup.
Add automated accessibility testing to identify issues earlier during development.
Challenges

One of the main challenges was implementing the responsive mobile navigation.

The navigation has two different states: opened and closed. I needed to make sure that the correct button was displayed in each state and that keyboard users could continue navigating after the menu was closed.

Another challenge was keeping the layout close to the original Frontend Mentor design while making it responsive for different screen sizes.

Links
Live Site: [Add your deployed project URL here]
Frontend Mentor Challenge: [Add the Frontend Mentor challenge URL here]
Author

Built as a Frontend Mentor project while practicing React, responsive web development, and web accessibility.