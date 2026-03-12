
# Chat Application — Frontend Test

This project is a simple chat interface built as a frontend coding test.
The application allows users to browse conversations, view messages, send new messages, and persist data locally using browser storage.

The focus of this project is on clean component structure, state management, and UI implementation based on the provided design.

# Live Features

View list of conversations

Select an active conversation

Display message history

Send new messages

Persist chat data using localStorage

Responsive layout with sidebar and chat window

# Tech Stack

React (with Hooks)

TypeScript

Context API + useReducer (state management)

CSS (no UI framework)

Browser localStorage

No external state libraries or backend services are used.

# Architecture Overview

The application is structured into main UI areas:

Sidebar — User profile section

ChatList — List of conversations

ChatWindow — Message display and input area

State is managed globally using Context + useReducer, which keeps logic centralized while avoiding the complexity of external libraries.

# Data Persistence

All chat data is stored in the browser using localStorage.

On app load → state is restored from storage

On state change → data is automatically saved

This simulates basic offline persistence without a backend.

# Project Structure (Simplified)
components/
  Sidebar
  ChatList
  ChatWindow

context/
  ChatContext
  chatReducer

utils/
  localStorage
  formatTime

data/
  mockData
# How to Run Locally
npm install
npm run dev

Then open the displayed local URL in your browser.

# Notes

This project uses mock data only (no backend API)

Real-time messaging is not implemented

The goal is to demonstrate frontend skills rather than production features

# What I Focused On

Clear component separation

Maintainable state logic

Readable code

UI consistency with the given design

Keeping the solution simple and understandable

# Author

Frontend test implementation by Nguyen Minh Khoi