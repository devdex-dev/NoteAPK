# 📝 NoteAPK

A cross-platform mobile note-taking application built with **Ionic Framework**, **Angular**, and **Capacitor**. Write, manage, and persist your notes on Android (and potentially iOS) with a clean, native-feeling UI.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the App](#running-the-app)
- [Building for Android](#building-for-android)
- [Scripts Reference](#scripts-reference)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

NoteAPK is an Ionic + Angular application that lets users create and manage notes directly on their mobile device. It uses **Capacitor** as the native runtime bridge to deploy on Android, and **Ionic Storage** for persistent local data storage.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | [Ionic 6](https://ionicframework.com/) |
| App Framework | [Angular 14](https://angular.io/) |
| Native Runtime | [Capacitor 4](https://capacitorjs.com/) |
| Language | TypeScript 4.7 |
| Styling | SCSS |
| Local Storage | `@ionic/storage-angular` |
| Linting | ESLint + Angular ESLint |
| Testing | Karma + Jasmine |

---

## Features

- Create, view, and manage notes
- Persistent local storage via Ionic Storage
- Native Android support via Capacitor
- Haptic feedback on interactions
- Splash screen on app launch
- Responsive Ionic UI components

---

## Project Structure

```
NoteAPK/
├── android/              # Native Android project (Capacitor)
├── src/
│   ├── app/              # Angular app module, components, pages
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── environments/     # Environment configuration files
│   ├── theme/            # Global SCSS variables and Ionic theme
│   ├── index.html        # App entry HTML
│   └── main.ts           # Angular bootstrap entry point
├── capacitor.config.ts   # Capacitor configuration
├── ionic.config.json     # Ionic CLI configuration
├── angular.json          # Angular workspace configuration
├── package.json          # Dependencies and npm scripts
└── tsconfig.json         # TypeScript configuration
```

---

## Prerequisites

Make sure you have the following installed before getting started:

- **Node.js** v16 or higher — [Download](https://nodejs.org/)
- **npm** v8 or higher (comes with Node.js)
- **Ionic CLI** — install globally:
  ```bash
  npm install -g @ionic/cli
  ```
- **Angular CLI** — install globally:
  ```bash
  npm install -g @angular/cli
  ```
- **Java JDK 11+** — required for Android builds — [Download](https://adoptium.net/)
- **Android Studio** — required for Android builds — [Download](https://developer.android.com/studio)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/devdex-dev/NoteAPK.git
cd NoteAPK
```

### 2. Install dependencies

```bash
npm install
```

### 3. Sync Capacitor (for native builds)

```bash
npx cap sync
```

---

## Running the App

### In the browser (development)

```bash
npm start
```

This starts a local dev server at `http://localhost:8100`. Hot-reloading is enabled by default.

### Using Ionic Lab (side-by-side platform preview)

```bash
ionic serve --lab
```

---

## Building for Android

### 1. Build the web assets

```bash
npm run build
```

### 2. Sync with the Android project

```bash
npx cap sync android
```

### 3. Open in Android Studio

```bash
npx cap open android
```

From Android Studio you can run the app on an emulator or a connected physical device, or generate a signed APK via **Build > Generate Signed Bundle / APK**.

> **Tip:** Enable USB debugging on your Android device and run directly with:
> ```bash
> ionic capacitor run android --livereload
> ```

---

## Scripts Reference

| Script | Command | Description |
|---|---|---|
| `start` | `ng serve` | Start local dev server |
| `build` | `ng build` | Production build to `/www` |
| `watch` | `ng build --watch --configuration development` | Watch mode for development |
| `test` | `ng test` | Run unit tests via Karma |
| `lint` | `ng lint` | Lint the codebase with ESLint |

---

## Dependencies

### Runtime

| Package | Version | Purpose |
|---|---|---|
| `@ionic/angular` | ^6.1.9 | Ionic UI components |
| `@ionic/storage-angular` | ^3.0.6 | Local persistent storage |
| `@angular/core` | ^14.0.0 | Angular framework |
| `@capacitor/android` | 4.4.0 | Android native bridge |
| `@capacitor/core` | 4.4.0 | Capacitor core runtime |
| `@capacitor/haptics` | 4.0.1 | Haptic feedback |
| `@capacitor/keyboard` | 4.0.1 | Keyboard management |
| `@capacitor/status-bar` | 4.0.1 | Status bar styling |
| `cordova-plugin-splashscreen` | ^6.0.2 | Splash screen support |

### Dev

| Package | Purpose |
|---|---|
| `@angular/cli` | Angular build tooling |
| `@capacitor/cli` | Capacitor CLI |
| `eslint` + Angular ESLint | Linting |
| `karma` + Jasmine | Unit testing |
| `typescript` ~4.7.2 | TypeScript compiler |

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request against `main`

Please make sure your code passes linting before submitting:

```bash
npm run lint
```

---

## License

This project is private. See the repository owner for licensing details.

---

> Built with ❤️ using [Ionic Framework](https://ionicframework.com/) and [Capacitor](https://capacitorjs.com/)
