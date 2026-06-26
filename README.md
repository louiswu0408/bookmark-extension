# Bookmark URL Updater (Chrome Extension)

A simple Chrome extension that updates or creates a bookmark with a fixed name using the current tab URL.

## What it does

- Click the extension icon
- Gets the current tab URL
- Finds a bookmark with a specific name (e.g. "X")
- Updates that bookmark’s URL
- If it doesn’t exist, creates it in the Bookmarks Bar

## How it works

The extension uses Chrome’s `bookmarks` API to:

- Search through all bookmarks recursively
- Match a bookmark by title
- Update its URL or create it if missing

## Files

- `manifest.json` – Chrome extension config
- `background.js` – Main logic for updating bookmarks

## Setup

1. Clone or download this repo
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right)
4. Click **Load unpacked** (top left)
5. Select the project folder

## Customize

Change the bookmark name here:

```js
const BOOKMARK_NAME = "X";
