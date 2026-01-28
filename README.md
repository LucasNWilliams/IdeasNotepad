# Idea Notepad

Idea Notepad is a website that lets you create and edit Ideas quickly and easily. The project implements Vue to for its framework, but I created everything else, including the form inputs and page components. 

It was created for the Flavortown hackathon by Hack Club, and version 1.0.0 was created in approximately two weeks.

## Features

### — Create Ideas

Upon clicking the "Make Idea" button, a dialog will appear that allows you to create an Idea with a title and description

Neither are required to save an Idea, and you can even have an empty Idea if you so choose.

### — Edit Ideas*

You can edit Ideas with the Edit button or by simply clicking on the Idea.

### — Delete Ideas*

Clicking the delete button will activate a popup to confirm that you want to delete the Idea.

### — Favorite Ideas

You can favorite Ideas, this prevents them from being deleted and moves groups them together before non-favorite Ideas.

<br/>
<br/>

*The Edit and Delete buttons are hidden on each card until you hover the cursor over the card.

## Upcoming Features

### — Settings

There are settings being worked on that will allow for more customization than what currently exists and potentially more features.

### — Dark Mode/Light Mode Toggle

A light mode is in the works that for, well, a light mode version of the website.

It will be accessible through the upcoming settings page

## Potential Features

These are features that are being considered, but no work has been started on them yet.

### — Multi-level Favorites

The concept is that you can favorite an Idea multiple times, placing it higher up in the list of Ideas. The issue is the implementation and how to keep the UI unobtrusive, which may be challenging in a small space.

### — Re-ordering Ideas

You would be able to move an Idea to another location in the list. Its new location would be updated and saved to the page.

### — Server Support

Currently, the page relies on local storage to save Ideas. This is extremely limiting as it means that you can only access your Ideas with the browser you made it on. If I can, I plan to let you save Ideas to an account, which would then allow you to access them wherever you are signed in to the Idea Notepad account.

### — Sharing

Once server support is added, I would be able to implement sharing Ideas, which would allow you to share Ideas with a link or similar concept.