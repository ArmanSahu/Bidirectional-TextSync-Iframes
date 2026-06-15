# Bidirectional Rich Text Sync Across Iframes

## Overview

This project implements real-time bidirectional synchronization between two rich text editors rendered inside separate iframes. Since iframes are isolated browsing contexts, communication is achieved using the `window.postMessage` API, with the host page acting as a message broker.

## Features

* Two independent iframe-based rich text editors
* Real-time bidirectional synchronization
* Rich text formatting support
  * Bold
  * Italic
  * Strikethrough
* Host page relays messages between frames
* Infinite loop prevention
* Origin validation for incoming messages
* Live action log for synchronization events
* Sync status indicator

## Architecture

Frame A → Host Page → Frame B

Frame B → Host Page → Frame A

The host page listens for messages from both iframes and forwards them to the opposite frame.

## Message Format

```ts
{
  app: "iframe-editor"
  type: "FORMAT_SYNC",
  frame: "A" | "B",
  content: "<p>Formatted HTML</p>",
  formatType: "text" | "bold" | "italic" | "strikeThrough"
}
```

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* postMessage API

## Running the Project

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open the application in the browser.

## Challenges Solved

* Communication between isolated iframe contexts
* Bidirectional synchronization
* Preventing infinite synchronization loops
* Maintaining editor consistency across frames

## Future Improvements

* Cursor position preservation
* Undo/Redo synchronization
* Active toolbar state detection
* Dark mode support

```
```
